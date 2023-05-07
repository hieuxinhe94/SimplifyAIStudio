import React from "react";
import { MarkerType, Position } from "reactflow";

export const nodesJson = null;
export const nodes = [];

export const edges = [
  {
    id: "dailybanhang-kenhdathangtructuyen",
    source: "dailybanhang",
    target: "kenhdathangtructuyen",
    type: "smoothstep",
    sourceHandle: "kenhdathangtructuyen_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: true,
    label: "12.2%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "dailybanhang-traodoiquaemail",
    source: "dailybanhang",
    target: "traodoiquaemail",
    type: "smoothstep",
    sourceHandle: "traodoiquaemail_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: false,
    label: "12.2%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "dailybanhang-traodoiquafax",
    source: "dailybanhang",
    target: "traodoiquafax",
    type: "smoothstep",
    sourceHandle: "traodoiquafax_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: false,
    label: "12.2%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  /* second layer */

  {
    id: "kenhdathangtructuyen-capnhatthongtinsanpham",
    source: "kenhdathangtructuyen",
    target: "capnhatthongtinsanpham",
    type: "smoothstep",
    sourceHandle: "kenhdathangtructuyen_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: true,
    label: "*82.2%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "kenhdathangtructuyen-chatbotbanhang",
    source: "kenhdathangtructuyen",
    target: "chatbotbanhang",
    type: "smoothstep",
    sourceHandle: "kenhdathangtructuyen_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: true,
    label: "*17.8%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "traodoiquafax-phongkinhdoanh",
    source: "traodoiquafax",
    target: "phongkinhdoanh",
    type: "smoothstep",
    sourceHandle: "traodoiquafax_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: false,
    label: "17.8%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "gray", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "traodoiquaemail-phongkinhdoanh",
    source: "traodoiquaemail",
    target: "phongkinhdoanh",
    type: "smoothstep",
    sourceHandle: "traodoiquaemail_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: false,
    label: "17.8%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "gray", color: "gray", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  /* third layer */
  {
    id: "capnhatthongtinsanpham-hethongcrm",
    source: "capnhatthongtinsanpham",
    target: "hethongcrm",
    type: "smoothstep",
    sourceHandle: "capnhatthongtinsanpham_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: true,
    label: "*82.2%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "chatbotbanhang-hethongcrm",
    source: "chatbotbanhang",
    target: "hethongcrm",
    type: "smoothstep",
    sourceHandle: "chatbotbanhang_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: true,
    label: "*17.8%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "phongkinhdoanh-nhanvienkinhdoanhtuvan",
    source: "phongkinhdoanh",
    target: "nhanvienkinhdoanhtuvan",
    type: "smoothstep",
    sourceHandle: "phongkinhdoanh_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: false,
    label: "17.8%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "gray", color: "gray", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  /* fourth layer */
  {
    id: "hethongcrm-hethongcrmkyhd",
    source: "hethongcrm",
    target: "hethongcrmkyhd",
    type: "smoothstep",
    sourceHandle: "hethongcrm_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: true,
    label: "*17.8%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "nhanvienkinhdoanhtuvan-nhanvienkhoquy",
    source: "nhanvienkinhdoanhtuvan",
    target: "nhanvienkhoquy",
    type: "smoothstep",
    sourceHandle: "nhanvienkinhdoanhtuvan_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: false,
    label: "17.8%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "gray", color: "gray", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  /* fifth layer */
  {
    id: "hethongcrmkyhd-thanhtoanliennganhang",
    source: "hethongcrmkyhd",
    target: "thanhtoanliennganhang",
    type: "smoothstep",
    sourceHandle: "hethongcrmkyhd_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
   
    label: "*17.8%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "nhanvienkhoquy-nhanvienkinhdoanhkyhopdong",
    source: "nhanvienkhoquy",
    target: "nhanvienkinhdoanhkyhopdong",
    type: "smoothstep",
    sourceHandle: "nhanvienkhoquy_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: false,
    label: "17.8%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "gray", color: "gray", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  /* sixth layer */
  {
    id: "thanhtoanliennganhang-doitacgiaonhan",
    source: "thanhtoanliennganhang",
    target: "doitacgiaonhan",
    type: "smoothstep",
    sourceHandle: "thanhtoanliennganhang_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
     
    label: "*17.8%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "nhanvienkinhdoanhkyhopdong-thanhtoanhopdong",
    source: "nhanvienkinhdoanhkyhopdong",
    target: "thanhtoanhopdong",
    type: "smoothstep",
    sourceHandle: "nhanvienkinhdoanhkyhopdong_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: false,
    label: "17.8%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "gray", color: "gray", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  /* seventh layer */
  {
    id: "doitacgiaonhan-giaohangvatly",
    source: "doitacgiaonhan",
    target: "giaohangvatly",
    type: "smoothstep",
    sourceHandle: "doitacgiaonhan_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    
    label: "*17.8%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "#FFCC00", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "thanhtoanhopdong-giaohangvatly",
    source: "thanhtoanhopdong",
    target: "giaohangvatly",
    type: "smoothstep",
    sourceHandle: "thanhtoanhopdong_0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    animated: false,
    label: "*17.8%",
    labelBgPadding: [8, 4],
    labelBgBorderRadius: 4,
    labelBgStyle: { fill: "gray", color: "#fff", fillOpacity: 0.7 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  
  /* end edgs */
];

export const getBindingNodes = (defaultNodes) => {
  const rootDatasources = [
    {
      id: "dailybanhang",
      type: `selectorCustomerNode`,
      metadata: {
        title: `<strong>Đại lý</strong> phân phối`,
        analysis: {
          effort: 100,
        },
        selects: {
          "dailybanhang-0": "dailybanhang",
        },
        options: [
          {
            value: "dailybanhang_1",
            label: "Khách hàng mới",
          },
          {
            value: "dailybanhang_2",
            label: "Khách hàng cũ",
          },
          {
            value: "dailybanhang",
            label: "Tất cả",
          },
        ],
      },
    },
  ];

  const secondaryDatasources = [
    {
      id: "kenhdathangtructuyen",
      type: `selectorRecommendNode`,
      metadata: {
        title: `Ứng dụng <strong> trực tuyến</strong> `,
        selectLabel: `Chọn phân loại`,
        selectType: `multiple`,
        analysis: {
          effort: 100,
        },
        selects: {
          "kenhdathangtructuyen-0": "kenhdathangtructuyen",
        },
        options: [
          {
            value: "kenhdathangtructuyen_0",
            label: "Website",
          },
          {
            value: "kenhdathangtructuyen_1",
            label: "Mobile App",
          },
          {
            value: "kenhdathangtructuyen_2",
            label: "Các kênh mạng xã hội",
          },
          {
            value: "kenhdathangtructuyen",
            label: "Tất cả",
          },
        ],
      },
    },
    {
      id: "traodoiquaemail",
      type: `selectorCustomerNode`,
      metadata: {
        title: `Trao đổi qua<strong> Email</strong> `,
        selectLabel: `Chọn dịch vụ`,
        analysis: {
          effort: 100,
        },
        selects: {
          "giaodichquaemail-1": "giaodichquaemail",
        },
        options: [
          {
            value: "giaodichquaemail",
            label: "Tất cả",
          },
        ],
      },
    },
    {
      id: "traodoiquafax",
      type: `selectorCustomerNode`,
      metadata: {
        title: `Trao đổi qua <strong> Fax/Phone</strong> `,
        analysis: {
          effort: 100,
        },
        selectLabel: `Chọn phương thức`,
        selectType: `multiple`,
        selects: {
          "traodoiquafax-0": "traodoiquafax",
        },
        options: [
          {
            value: "traodoiquafax",
            label: "Tất cả",
          },
        ],
      },
    },
  ];

  const thirdDatasources = [
    {
      id: "capnhatthongtinsanpham",
      type: `selectorRecommendNode`,
      metadata: {
        title: `Thông tin sản phẩm`,

        tasks: {
          capnhatthongtinsanpham_0: `Chính sách bán hàng`,
          capnhatthongtinsanpham_1: `Thông tin sản phẩm`,
          capnhatthongtinsanpham_2: `Cá nhân hóa danh mục hàng hóa phù hợp`,
          capnhatthongtinsanpham_3: `Cá nhân hóa mức chiết khấu`,
        },
      },
    },
    {
      id: "chatbotbanhang",
      type: `selectorRecommendNode`,
      metadata: {
        title: `Chatbot tra cứu & hồ trợ`,

        tasks: {
          chatbotbanhang_0: `Thông tin chínhh sách bán hàng`,
          chatbotbanhang_1: `Tra cứu trạng thái đơn hàng`,
          chatbotbanhang_2: `Tra cứu thông tin kỹ thuật`,
          chatbotbanhang_3: `QnA hỗ trợ bảo hành`,
        },
      },
    },

    {
      id: "phongkinhdoanh",
      type: `selectorCustomerNode`,
      metadata: {
        title: `<strong>Phòng kinh doanh</strong> `,
        selectLabel: `Chọn dịch vụ`,
        analysis: {
          effort: 100,
        },
        selects: {
          phongkinhdoanh_0: "phongkinhdoanh",
        },
        options: [
          {
            value: "phongkinhdoanh",
            label: "Tất cả",
          },
        ],
      },
    },
  ];

  const fourthDatasources = [
    {
      id: "hethongcrm",
      type: `selectorRecommendNode`,
      metadata: {
        title: `Hệ thống CRM`,
        tasks: {
          hethongcrm_0: `Cá nhân hóa danh mục hàng hóa phù hợp`,
          hethongcrm_1: `Cá nhân hóa mức chiết khấu`,
        },
      },
    },
    {
      id: "nhanvienkinhdoanhtuvan",
      type: `selectorCustomerNode`,
      metadata: {
        title: ` <strong> Nhân viên kinh doanh</strong> `,
        analysis: {
          effort: 100,
        },
        tasks: {
          nhanvienkinhdoanhtuvan_0: `Chuyển nhận hợp đồng mua bán`,
          nhanvienkinhdoanhtuvan_1: `Thảo luận điều khoản`,
          nhanvienkinhdoanhtuvan_2: `Ký kết HĐ`,
        },
      },
    },
  ];

  const fifthDatasources = [
    {
      id: "hethongcrmkyhd",
      type: `selectorRecommendNode`,
      metadata: {
        title: `Chữ ký điện tử`,

        tasks: {
          hethongcrmkyhd_0: `Ký hợp đồng điện tử`,
          hethongcrmkyhd_1: `Tích hợp chữ ký số`,
          hethongcrmkyhd_2: `Tích hợp kênh logictics đối tác`,
        },
      },
    },
    {
      id: "nhanvienkhoquy",
      type: `selectorCustomerNode`,
      metadata: {
        title: `<strong>Nghiệp vụ Kho quỹ</strong> `,

        analysis: {
          effort: 100,
        },
        tasks: {
          nhanvienkhoquy_0: `Kiểm tra tồn kho`,
          nhanvienkhoquy_1: `Kiểm tra các đơn hàng đang xử lý`,
          nhanvienkhoquy_2: `Kiểm tra khả năng đáp ứng`,
          nhanvienkhoquy_3: `Thông báo tình trạng`,
        },
      },
    },
  ];

  const sixthDatasources = [
    {
      id: "thanhtoanliennganhang",
      type: `selectorRecommendNode`,
      metadata: {
        title: `Thanh toán trực tuyến`,
        tasks: {
          thanhtoanliennganhang_0: `Đồng bộ trạng thái đơn hàng`,
          thanhtoanliennganhang_1: `Đồng bộ kênh tài chính`,
        },
      },
    },
    {
      id: "nhanvienkinhdoanhkyhopdong",
      type: `selectorCustomerNode`,
      metadata: {
        title: `<strong>Kế toán</strong> `,

        analysis: {
          effort: 100,
        },
        tasks: {
          nhanvienkinhdoanhkyhopdong_0: `Chuyển nhận hợp đồng mua bán`,
          nhanvienkinhdoanhkyhopdong_1: `Thảo luận điều khoản`,
          nhanvienkinhdoanhkyhopdong_2: `Ký kết HĐ`,
        },
      },
    },
  ];

  const seventhDatasources = [
    {
      id: "doitacgiaonhan",
      type: `selectorRecommendNode`,
      metadata: {
        title: `Tích hợp Đối tác Logictic`,
        tasks: {
          doitacgiaonhan_0: `Đồng bộ trạng thái đơn hàng`,
          doitacgiaonhan_1: `Đồng bộ kênh tài chính`,
        },
      },
    },
    {
      id: "thanhtoanhopdong",
      type: `selectorCustomerNode`,
      metadata: {
        title: `<strong>Thanh toán</strong> `,

        analysis: {
          effort: 100,
        },
        tasks: {
          thanhtoanhopdong_0: `Chuyển nhận hợp đồng mua bán`,
          thanhtoanhopdong_1: `Thảo luận điều khoản`,
          thanhtoanhopdong_2: `Ký kết HĐ`,
        },
      },
    },
  ];

  const eighthDatasources = [
    {
      id: "giaohangvatly",
      type: `selectorRecommendNode`,
      metadata: {
        title: `Vận chuyển & Giao hàng`,
        tasks: {
          giaohangvatly_0: `Đồng bộ trạng thái đơn hàng`,
          giaohangvatly_1: `Đồng bộ kênh tài chính`,
        },
      },
    },
  ];

  /* Add first round */
  for (let i = 0; i < rootDatasources.length; i++) {
    const element = rootDatasources[i];
    var newNode = {
      id: "" + element.id,
      type: element.type == "default" ? "input" : element.type,
      position: { x: 0, y: 100 + i * 250 },
      data: element.metadata,
      sourcePosition: Position.Right,
    };

    defaultNodes.push(newNode);
  }

  /* Add secondary and deeper round */
  for (let j = 0; j < secondaryDatasources.length; j++) {
    const element = secondaryDatasources[j];
    var newNode = {
      id: "" + element.id,
      type: element.type == "default" ? "input" : element.type,
      position: { x: 250, y: j * 250 },
      data: element.metadata,
      sourcePosition: Position.Right,
    };

    defaultNodes.push(newNode);
  }

  /* Add third and deeper round */
  for (let j = 0; j < thirdDatasources.length; j++) {
    const element = thirdDatasources[j];
    var newNode = {
      id: "" + element.id,
      type: element.type == "default" ? "input" : element.type,
      position: { x: 500, y: j * 150 },
      data: element.metadata,
      sourcePosition: Position.Right,
    };

    defaultNodes.push(newNode);
  }

  /* Add fourth and deeper round */
  for (let j = 0; j < fourthDatasources.length; j++) {
    const element = fourthDatasources[j];
    var newNode = {
      id: "" + element.id,
      type: element.type == "default" ? "input" : element.type,
      position: { x: 750, y: j * 250 },
      data: element.metadata,
      sourcePosition: Position.Right,
      animated: true,
    };

    defaultNodes.push(newNode);
  }

  /* Add fifth and deeper round */
  for (let j = 0; j < fifthDatasources.length; j++) {
    const element = fifthDatasources[j];
    var newNode = {
      id: "" + element.id,
      type: element.type == "default" ? "input" : element.type,
      position: { x: 1000, y: j * 250 },
      data: element.metadata,
      sourcePosition: Position.Right,
    };

    defaultNodes.push(newNode);
  }

  /* Add fifth and deeper round */
  for (let j = 0; j < sixthDatasources.length; j++) {
    const element = sixthDatasources[j];
    var newNode = {
      id: "" + element.id,
      type: element.type == "default" ? "input" : element.type,
      position: { x: 1250, y: j * 250 },
      data: element.metadata,
      sourcePosition: Position.Right,
    };

    defaultNodes.push(newNode);
  }

  /* Add fifth and deeper round */
  for (let j = 0; j < seventhDatasources.length; j++) {
    const element = seventhDatasources[j];
    var newNode = {
      id: "" + element.id,
      type: element.type == "default" ? "input" : element.type,
      position: { x: 1500, y: j * 250 },
      data: element.metadata,
      sourcePosition: Position.Right,
    };

    defaultNodes.push(newNode);
  }

  /* Add eighth and deeper round */
  for (let j = 0; j < eighthDatasources.length; j++) {
    const element = eighthDatasources[j];
    var newNode = {
      id: "" + element.id,
      type: element.type == "default" ? "input" : element.type,
      position: { x: 1750, y: j * 250 },
      data: element.metadata,
      sourcePosition: Position.Right,
    };

    defaultNodes.push(newNode);
  }
  return defaultNodes;
};

export const getBindingEdges = (defaultEdges) => {
  return defaultEdges;
};
