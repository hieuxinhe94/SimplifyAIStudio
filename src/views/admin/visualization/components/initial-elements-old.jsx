// import React from "react";
// import { MarkerType, Position } from "reactflow";

// export const nodesJson = null;

// export const nodes = [
//   // {
//   //   id: "1",
//   //   type: "input",
//   //   data: {
//   //     label: "Input Node",
//   //   },
//   //   position: { x: 250, y: 0 },
//   // },
//   // {
//   //   id: "2",
//   //   data: {
//   //     label: "Default Node",
//   //   },
//   //   position: { x: 100, y: 100 },
//   // },
//   // {
//   //   id: "3",
//   //   type: "output",
//   //   data: {
//   //     label: "Output Node",
//   //   },
//   //   position: { x: 400, y: 100 },
//   // },
//   // {
//   //   id: "4",
//   //   type: "custom",
//   //   position: { x: 100, y: 200 },
//   //   data: {
//   //     selects: {
//   //       "handle-0": "smoothstep",
//   //       "handle-1": "smoothstep",
//   //     },
//   //   },
//   // },
//   // {
//   //   id: "5",
//   //   type: "output",
//   //   data: {
//   //     label: "custom style",
//   //   },
//   //   className: "circle",
//   //   style: {
//   //     background: "#2B6CB0",
//   //     color: "white",
//   //   },
//   //   position: { x: 400, y: 200 },
//   //   sourcePosition: Position.Right,
//   //   targetPosition: Position.Left,
//   // },
//   // {
//   //   id: "6",
//   //   type: "output",
//   //   style: {
//   //     background: "#63B3ED",
//   //     color: "white",
//   //     width: 100,
//   //   },
//   //   data: {
//   //     label: "Node",
//   //   },
//   //   position: { x: 400, y: 325 },
//   //   sourcePosition: Position.Right,
//   //   targetPosition: Position.Left,
//   // },
//   // {
//   //   id: "7",
//   //   type: "default",
//   //   className: "annotation",
//   //   data: {
//   //     label: (
//   //       <>
//   //         Bạn đang sử dụng <strong>Phiên bản thử nghiệm</strong> với dữ liệu mặc
//   //         định
//   //         <br />
//   //         Đăng ký tài khoản mới tại{" "}
//   //         <strong>
//   //           {" "}
//   //           <a href=""> đây </a>
//   //         </strong>{" "}
//   //         🥳
//   //       </>
//   //     ),
//   //   },
//   //   draggable: false,
//   //   selectable: false,
//   //   position: { x: 150, y: 600 },
//   // },
//   // {
//   //   id: "8",
//   //   type: "selectorCustomerNode",
//   //   data: {
//   //     label: "Node",
//   //     selects: {
//   //       "handle-0": "CustomerSource_All",
//   //     },
//   //   },
//   //   position: { x: 200, y: 200 },
//   //   sourcePosition: Position.Right,
//   //   targetPosition: Position.Left,
//   // },
// ];

// export const edges = [
//   {
//     id: "khachhangcanhan-tiepdontaiquay",
//     source: "khachhangcanhan",
//     target: "tiepdontaiquay",
//     type: "smoothstep",
//     sourceHandle: "khachhangcanhan-0",
//     data: {
//       selectIndex: 0,
//     },
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//     animated: true,
//     label: "57.8%",
//     labelBgPadding: [8, 4],
//     labelBgBorderRadius: 4,
//     labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//   },
//   {
//     id: "khachhangcanhan-nganhangtructuyen",
//     source: "khachhangcanhan",
//     target: "nganhangtructuyen",
//     type: "smoothstep",
//     sourceHandle: "nganhangtructuyen-0",
//     data: {
//       selectIndex: 0,
//     },
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//     animated: true,
//     label: "32.2%",
//     labelBgPadding: [8, 4],
//     labelBgBorderRadius: 4,
//     labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//   },
//   ,
//   {
//     id: "khachhangcanhan-khachhangtiemnang",
//     source: "khachhangcanhan",
//     target: "khachhangtiemnang",
//     type: "smoothstep",
//     sourceHandle: "khachhangtiemnang-0",
//     data: {
//       selectIndex: 0,
//     },
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//     animated: true,
//     label: "12.2%",
//     labelBgPadding: [8, 4],
//     labelBgBorderRadius: 4,
//     labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//   },

//   {
//     id: "khachhangdoanhnghiep-tiepdontaiquay",
//     source: "khachhangdoanhnghiep",
//     target: "tiepdontaiquay",
//     type: "smoothstep",
//     sourceHandle: "khachhangdoanhnghiep-0",
//     data: {
//       selectIndex: 0,
//     },
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//     animated: false,
//   },
// ];

// export const getBindingNodes = (defaultNodes) => {
//   const rootDatasources = [
//     {
//       id: "khachhangcanhan",
//       type: `selectorCustomerNode`,
//       metadata: {
//         title: `Khách hàng <strong>Cá nhân</strong>`,
//         selects: {
//           "khachhangcanhan-0": "khachhangcanhan_all",
//         },
//         options: [
//           {
//             value: "khachhangcanhan_1",
//             label: "Khách hàng mới",
//           },
//           {
//             value: "khachhangcanhan_2",
//             label: "Khách hàng cũ",
//           },

//           {
//             value: "khachhangcanhan_all",
//             label: "Tất cả",
//           },
//         ],
//       },
//     },
//     {
//       id: "khachhangdoanhnghiep",
//       type: `selectorCustomerNode`,
//       metadata: {
//         title: `Khách hàng <strong>doanh nghiệp</strong>`,
//         selects: {
//           "khachhangdoanhnghiep-0": "khachhangdoanhnghiep_all",
//         },

//         options: [
//           {
//             value: "khachhangdoanhnghiep_1",
//             label: "Khách hàng mới",
//           },
//           {
//             value: "khachhangdoanhnghiep_2",
//             label: "Khách hàng cũ",
//           },
//           {
//             value: "khachhangdoanhnghiep_all",
//             label: "Tất cả",
//           },
//         ],
//       },
//     },
//   ];

//   const secondaryDatasources = [
//     {
//       id: "tiepdontaiquay",
//       type: `selectorCustomerNode`,
//       metadata: {
//         title: `Tiếp đón <strong> tại quầy</strong> `,
//         selectLabel: `Chọn dịch vụ`,
//         selects: {
//           "handle-1010": "CustomerSource_All",
//         },
//         options: [
//           {
//             value: "CustomerSource_Office",
//             label: "Mở mới tài khoản",
//           },
//           {
//             value: "CustomerSource_Agent",
//             label: "Chuyển tiền liên ngân hàng",
//           },
//           {
//             value: "CustomerSource_Facebook",
//             label: "Gửi tiết kiệm",
//           },
//           {
//             value: "CustomerSource_All",
//             label: "Tất cả",
//           },
//         ],
//       },
//     },
//     {
//       id: "nganhangtructuyen",
//       type: `selectorCustomerNode`,
//       metadata: {
//         title: `Ngân hàng <strong> trực tuyến</strong> `,
//         selectLabel: `Chọn phương thức`,
//         selectType: `multiple`,
//         selects: {
//           "nganhangtructuyen-0": "CustomerSource_All",
//         },
//         options: [
//           {
//             value: "CustomerSource_Office",
//             label: "Ứng dụng EBanking",
//           },
//           {
//             value: "CustomerSource_Agent",
//             label: "Website",
//           },
//           {
//             value: "CustomerSource_Facebook",
//             label: "Ví điện tử",
//           },
//           {
//             value: "CustomerSource_All",
//             label: "Tất cả",
//           },
//         ],
//       },
//     },
//     {
//       id: "khachhangtiemnang",
//       type: `selectorCustomerNode`,
//       metadata: {
//         title: `Chuyển thành <strong>Khách hàng tiềm năng</strong>`,
//         selectLabel: `Chọn phân loại`,
//         selectType: `multiple`,
//         selects: {
//           "handle-1030": "CustomerSource_All",
//         },
//         options: [
//           {
//             value: "CustomerSource_Office",
//             label: "Không đủ giấy tờ",
//           },
//           {
//             value: "CustomerSource_Agent",
//             label: "Chưa hoàn thiện hồ sơ",
//           },
//           {
//             value: "CustomerSource_Facebook",
//             label: "Khác",
//           },
//           {
//             value: "CustomerSource_All",
//             label: "Tất cả",
//           },
//         ],
//       },
//     },
//   ];

//   const thirdDatasources = [
//     {
//       id: "motaikhoantaiquay",
//       type: `selectorCustomerNode`,
//       metadata: {
//         title: `<strong>Mở tài khoản</strong> tại quầy`,
//         selectLabel: `Chọn dịch vụ`,
//         selects: {
//           "motaikhoantaiquay-0": "motaikhoantaiquay-all",
//         },
//         options: [
//           {
//             value: "motaikhoantaiquay-1",
//             label: "Mở mới thành công",
//           },
//           {
//             value: "motaikhoantaiquay-2",
//             label: "Mở mới thất bại",
//           },
//           {
//             value: "motaikhoantaiquay-all",
//             label: "Tất cả",
//           },
//         ],
//       },
//     },
//     {
//       id: "ekyckhachhangtructuyen",
//       type: `selectorRecommendNode`,
//       metadata: {
//         title: `<strong>EKyc</strong> xác thực`,
//         selectLabel: `Chọn loại`,
//         selects: {
//           "ekyckhachhangtructuyen-0": "ekyckhachhangtructuyen-all",
//         },
//         options: [
//           {
//             value: "ekyckhachhangtructuyen-1",
//             label: "Mở mới thành công",
//           },
//           {
//             value: "ekyckhachhangtructuyen-2",
//             label: "Mở mới thất bại",
//           },
//           {
//             value: "ekyckhachhangtructuyen-all",
//             label: "Tất cả",
//           },
//         ],
//       },
//     },
//   ];

//   const fourthDatasources = [
//     {
//       id: "xacthucthongtinkhachhangtudong",
//       type: `selectorCustomerNode`,
//       metadata: {
//         title: `<strong>Tự động</strong>Xác thực khách hàng`,
//         selectLabel: `Chọn dịch vụ`,
//         selects: {
//           "motaikhoantaiquay-0": "motaikhoantaiquay-all",
//         },
//         options: [
//           {
//             value: "motaikhoantaiquay-1",
//             label: "Thông tin hợp lệ",
//           },
//           {
//             value: "motaikhoantaiquay-2",
//             label: "Thông tin không khớp",
//           },
//           {
//             value: "motaikhoantaiquay-all",
//             label: "Tất cả",
//           },
//         ],
//       },
//     },
//     {
//       id: "xacthucthongtinkhachhangthucong",
//       type: `selectorCustomerNode`,
//       metadata: {
//         title: `<strong>Tự động</strong>Xác thực khách hàng`,
//         selectLabel: `Chọn dịch vụ`,
//         selects: {
//           "xacthucthongtinkhachhangthucong-0": "xacthucthongtinkhachhangthucong-all",
//         },
//         options: [
//           {
//             value: "xacthucthongtinkhachhangthucong-1",
//             label: "Thông tin hợp lệ",
//           },
//           {
//             value: "xacthucthongtinkhachhangthucong-2",
//             label: "Thông tin không khớp",
//           },
//           {
//             value: "xacthucthongtinkhachhangthucong-all",
//             label: "Tất cả",
//           },
//         ],
//       },
//     },
//   ];

//   const fifthDatasources = [
//     {
//       id: "phathanhthekhachhang",
//       type: `selectorCustomerNode`,
//       metadata: {
//         title: `Phát hành <strong>Thẻ</strong>`,
//         selectLabel: `Chọn loại thẻ phát hành`,
//         selects: {
//           "phathanhthekhachhang-0": "phathanhthekhachhang-all",
//         },
//         options: [
//           {
//             value: "phathanhthekhachhang-1",
//             label: "A",
//           },
//           {
//             value: "phathanhthekhachhang-2",
//             label: "B",
//           },
//           {
//             value: "phathanhthekhachhang-all",
//             label: "Tất cả",
//           },
//         ],
//       },
//     },
    
//   ];

//   /* Add first round */
//   for (let i = 0; i < rootDatasources.length; i++) {
//     const element = rootDatasources[i];
//     var newNode = {
//       id: "" + element.id,
//       type: element.type == "default" ? "input" : element.type,
//       position: { x: 0, y: 100 + i * 250 },
//       data: element.metadata,
//       sourcePosition: Position.Right,
//     };

//     defaultNodes.push(newNode);
//   }

//   /* Add secondary and deeper round */
//   for (let j = 0; j < secondaryDatasources.length; j++) {
//     const element = secondaryDatasources[j];
//     var newNode = {
//       id: "" + element.id,
//       type: element.type == "default" ? "input" : element.type,
//       position: { x: 250, y: j * 250 },
//       data: element.metadata,
//       sourcePosition: Position.Right,
//     };

//     defaultNodes.push(newNode);
//   }

//   /* Add third and deeper round */
//   for (let j = 0; j < thirdDatasources.length; j++) {
//     const element = thirdDatasources[j];
//     var newNode = {
//       id: "" + element.id,
//       type: element.type == "default" ? "input" : element.type,
//       position: { x: 550, y: j * 250 },
//       data: element.metadata,
//       sourcePosition: Position.Right,
//     };

//     defaultNodes.push(newNode);
//   }
 

//  /* Add fourth and deeper round */
//  for (let j = 0; j < fourthDatasources.length; j++) {
//   const element = fourthDatasources[j];
//   var newNode = {
//     id: "" + element.id,
//     type: element.type == "default" ? "input" : element.type,
//     position: { x: 750, y: j * 250 },
//     data: element.metadata,
//     sourcePosition: Position.Right,
//     animated: true
//   };

//   defaultNodes.push(newNode);
// }


//  /* Add fifth and deeper round */
//  for (let j = 0; j < fifthDatasources.length; j++) {
//   const element = fifthDatasources[j];
//   var newNode = {
//     id: "" + element.id,
//     type: element.type == "default" ? "input" : element.type,
//     position: { x: 950, y: j * 250 },
//     data: element.metadata,
//     sourcePosition: Position.Right,
//   };

//   defaultNodes.push(newNode);
// }

// return defaultNodes;
// };


// export const getBindingEdges = (defaultEdges) => {
//   return defaultEdges;
// };
