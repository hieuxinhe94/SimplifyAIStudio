import Checkbox from "components/checkbox";
import Progress from "components/progress";
import React, { memo } from "react";
import { MdCheckCircle } from "react-icons/md";
import { Handle, useReactFlow, useStoreApi, Position } from "reactflow";

function Select({ value, options, handleId, nodeId }) {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  const onChange = (evt) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            selects: {
              ...node.data.selects,
              [handleId]: evt.target.value,
            },
          };
        }

        return node;
      })
    );
  };

  return (
    <div className="custom-node__select">
      <Handle
        className="-ml-2"
        style={{ backgroundColor: "white" }}
        type="target"
        position={Position.Left}
        id={handleId}
        key={handleId}
        isConnectable={true}
      />
      <select className="nodrag " onChange={onChange} value={value}>
        {options.map((option) => (
          <option
            className="my-1 bg-navy-800 py-2 text-sm text-white"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      <div>
        <Handle
          className="-mr-2 "
          style={{ backgroundColor: "white" }}
          type="source"
          position={Position.Right}
          id={handleId}
        />
      </div>
    </div>
  );
}

function CN_CustomerSource({ id, data }) {
  return (
    <section>
      <div className="custom-node__header flex py-1 ">
        <span
          className=""
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></span>{" "}
        <MdCheckCircle className="mx-1 h-2 w-2 text-green-500" />
      </div>
      <div className="custom-node__body">
        {data.analysis && (
          <div className="">
            <div className="flex w-full">
              <div className="flex w-1/2 flex-col items-start justify-center">
                <p className="text-[10px] text-gray-600">Nhân sự</p>
                <p className="text-[10px] font-medium text-navy-700 ">
                  1,2k
                </p>
              </div>{" "}
              <div className="flex w-1/2 flex-col items-start justify-center">
                <p className="text-[10px] text-gray-600">Efforts</p>
                <p className="text-[10px] font-medium text-navy-700 ">
                  5400h
                </p>
              </div>
            </div>
            <div className={`flex items-center rounded-full`}>
              <span className="mr-2 w-1/4 text-[10px]">%GT: </span>{" "}
              <Progress width="w-[108px]" value={20} />
            </div>
            <div className={`flex items-center rounded-full`}>
              <span className="mr-2 w-1/4 text-[10px]">%CP: </span>{" "}
              <Progress width="w-[108px]" value={12} />
            </div>
          </div>
        )}

        <hr className="my-1" />
        <span
          className=""
          dangerouslySetInnerHTML={{ __html: data.desc }}
        ></span>
        <div className="">{data.selectLabel || ""}</div>
        {data.selects &&
          Object.keys(data.selects).map((handleId) => (
            <Select
              key={handleId}
              nodeId={id}
              value={data.selects[handleId]}
              handleId={handleId}
              options={data.options || []}
            />
          ))}

        {!data.selects && (
          <>
            <div className="flex w-full">
              <Handle
                className=""
                style={{ backgroundColor: "white" }}
                type="target"
                position={Position.Left}
                id={id}
                key={id}
                isConnectable={true}
              />
              <Handle
                className=""
                style={{ backgroundColor: "white" }}
                type="source"
                position={Position.Right}
                id={id}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default memo(CN_CustomerSource);
