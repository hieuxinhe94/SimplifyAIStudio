import Card from "components/card";
import CardMenu from "components/card/CardMenu";
import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";

import {
  nodes as initialNodes,
  edges as initialEdges,
} from "./initial-elements";
import CustomNode from "./custom-node";
import CN_CustomerSource from "./cn-customer-source";

import "reactflow/dist/style.css";
import "./custom.css";

const nodeTypes = {
  custom: CustomNode,
  selectorCustomerNode: CN_CustomerSource,
}

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const Playground = (props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === "custom" || node.type === "selectorCustomerNode").data
        .selects[edge.sourceHandle];
      edge.type = edgeType;
   
    }

    return edge;
  });

  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-2">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Tổng quan hoạt động
        </div>

        <CardMenu />
      </header>

      <div className=" overflow-x-scroll xl:overflow-x-hidden " style={{height: "650px"}}>
        <ReactFlow
          nodes={nodes}
          edges={edgesWithUpdatedTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={onInit}
          fitView
          attributionPosition="top-right"
          nodeTypes={nodeTypes}
        >
          <MiniMap style={minimapStyle} zoomable pannable />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </Card>
  );
};

export default Playground;
