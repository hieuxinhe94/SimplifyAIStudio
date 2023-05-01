import React from "react";
import { MarkerType, Position } from "reactflow";

export const nodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: "Input Node",
    },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",
    data: {
      label: "Default Node",
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    type: "output",
    data: {
      label: "Output Node",
    },
    position: { x: 400, y: 100 },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 100, y: 200 },
    data: {
      selects: {
        "handle-0": "smoothstep",
        "handle-1": "smoothstep",
      },
    },
  },
  {
    id: "5",
    type: "output",
    data: {
      label: "custom style",
    },
    className: "circle",
    style: {
      background: "#2B6CB0",
      color: "white",
    },
    position: { x: 400, y: 200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "6",
    type: "output",
    style: {
      background: "#63B3ED",
      color: "white",
      width: 100,
    },
    data: {
      label: "Node",
    },
    position: { x: 400, y: 325 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "7",
    type: "default",
    className: "annotation",
    data: {
      label: (
        <>
          Bạn đang sử dụng <strong>Phiên bản thử nghiệm</strong> với dữ liệu mặc
          định và không thể thay đổi <br />
          Liên hệ chúng tôi tại <strong>đây</strong> 🥳
        </>
      ),
    },
    draggable: false,
    selectable: false,
    position: { x: 150, y: 600 },
  },

  /* This start template */
  {
    id: "8",
    type: "selectorCustomerNode",
    position: { x: 100, y: 400 },
    data: {
      selects: {
        "handle-0": "CustomerSource_All",
      
      },
    },sourcePosition: Position.Right,
    
  },
];

export const edges = [
  { id: "e1-2", source: "1", target: "2", label: "this is an edge label" },
  { id: "e1-3", source: "1", target: "3", animated: true },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    type: "smoothstep",
    sourceHandle: "handle-0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: true,
  },
  {
    id: "e4-6",
    source: "4",
    target: "6",
    type: "smoothstep",
    sourceHandle: "handle-1",
    data: {
      selectIndex: 1,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
/* This start template */
  {
    id: "e8-6",
    source: "8",
    target: "6",
    type: "smoothstep",
    sourceHandle: "handle-1",
    data: {
      selectIndex: 1,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: true,
  },
];
