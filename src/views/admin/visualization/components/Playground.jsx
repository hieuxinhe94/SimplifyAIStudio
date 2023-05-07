import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  useOnSelectionChange,
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";

import {
  nodes as initialNodes,
  edges as initialEdges,
  getBindingNodes,
  nodesJson,
  getBindingEdges,
} from "./initial-elements";
import CustomNode from "./custom-node";
import CN_CustomerSource from "./cn-customer-source";
import CN_RecommendingNode from "./cn-suggestion-node";

import "reactflow/dist/style.css";
import "./custom.css";
import { useDispatch } from "react-redux";
import { closeDetail, openDetail } from "./actions/adminReducers";

const nodeTypes = {
  custom: CustomNode,
  selectorCustomerNode: CN_CustomerSource,
  selectorRecommendNode: CN_RecommendingNode  ,

};

const minimapStyle = {
  height: 120,
};

const Playground = ({ datasource, isDemo, onOpenDetailCb }) => {
  const dispatch = useDispatch();
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState(getBindingNodes(initialNodes));
  const [edges, setEdges, onEdgesChange] = useEdgesState(getBindingEdges(initialEdges));
  const [rfInstance, setRfInstance] = useState(null);

  const flowKey = "simplifyAI-flow";
  var edgesWithUpdatedTypes = [];

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
      console.log(JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey) ) || nodesJson;
      console.log(flow);
      if (flow) {
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
      }
    };
    restoreFlow();
  }, [setNodes]);

  const onAdd = useCallback(() => {
    const newNode = {
      id: "0000",
      data: { label: "Added node" },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight,
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  function SelectionChangeLogger(event, node) {
    console.log("changed selection");
    console.log(node);
    if(isOpenDetail) {
      setIsOpenDetail(!isOpenDetail);
      dispatch(isOpenDetail ? openDetail() : closeDetail());
    }
  }

  if (nodes && edges && edges.length) {
    edgesWithUpdatedTypes = edges.map((edge) => {
      if (edge.sourceHandle) {
        const edgeType = nodes.find(
          (node) =>
            node.type === "custom" || node.type === "selectorCustomerNode"
        ).data.selects[edge.sourceHandle];
        edge.type = edgeType;
      }

      return edge;
    });
  }

  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-2">
        <div className="text-sm font-bold text-navy-700 dark:text-white">
          Bản đồ phân bổ giá trị
        </div>
        <CardMenu />
      </header>

      <div
        className=" overflow-x-scroll xl:overflow-x-hidden "
        style={{ height: "650px" }}
      >
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edgesWithUpdatedTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setRfInstance}
            fitView
            attributionPosition="top-right"
            nodeTypes={nodeTypes}
            onNodeClick={SelectionChangeLogger}
            //onNodeDragStop={onSave}
            minZoom={0}
          >
            {/* <MiniMap style={minimapStyle} zoomable pannable /> */}
            <Controls />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </ReactFlowProvider>
      </div>

      <button onClick={onSave}>save</button>
      <button onClick={onRestore}>restore</button>
    </Card>
  );
};

export default Playground;
