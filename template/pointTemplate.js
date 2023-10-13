export var point_template_area = {
  title: "{Name}",
  content: "<b>{Location}</b>.",
};

export var point_template_university = {
  title: "{Name}",
  content: "Trường ở <b>{Location}</b>.",
};

export var point_template_city = {
  title: "{Name}",
  content: "Thành phố/huyện/xã ở <b>{Location}</b>.",
};

export var info_province_template = {
  title: "{PROVINCE_NAME}",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "PROVINCE_AREA",
          label: "Area (km2)",
          isEditable: true,
          tooltip: "",
          visible: true,
          format: {
            places: 2,
            digitSeparator: true,
          },
          stringFieldOption: "text-box",
        },
        {
          fieldName: "PROVINCE_POPULATION",
          label: "Polulation (2021)",
          isEditable: true,
          tooltip: "",
          visible: true,
          format: {
            digitSeparator: true,
          },
          stringFieldOption: "text-box",
        },
      ],
    },
  ],
};
