import React, { memo } from 'react';
import { Handle, useReactFlow, useStoreApi, Position } from 'reactflow';

const options = [
  {
    value: 'CustomerSource_Office',
    label: 'Chi nhánh  (default)',
  },
  {
    value: 'CustomerSource_Agent',
    label: 'Qua kênh đại lý',
  },
  {
    value: 'CustomerSource_Facebook',
    label: 'Kênh fanpage Facebook',
  },
  {
    value: 'CustomerSource_Zalo',
    label: 'Kênh Zalo',
  },
  {
    value: 'CustomerSource_All',
    label: 'Tất cả',
  },
];

function Select({ value, handleId, nodeId }) {
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
      <div>Chọn nguồn</div>
      <select className="nodrag" onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* <Handle type="source" position={Position.Bottom} id={handleId} /> */}
    </div>
  );
}

function CN_CustomerSource({ id, data }) {
  return (
    <>
      <div className="custom-node__header py-1">
        <strong>Kênh </strong> Khách hàng
      </div>
      <div className="custom-node__body">
        {Object.keys(data.selects).map((handleId) => (
          <Select key={handleId} nodeId={id} value={data.selects[handleId]} handleId={handleId} />
        ))}
      </div>
    </>
  );
}

export default memo(CN_CustomerSource);
