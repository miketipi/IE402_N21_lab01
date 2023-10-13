import { createLines } from "../../template/createLines.js";

var path = [
  [107.725893388, 11.893234676],
  [107.725780735, 11.892982711],
  [107.726177702, 11.891292442],
  [107.7261026, 11.890741265],
  [107.725523243, 11.889087727],
  [107.725222836, 11.888468304],
  [107.724101673, 11.887827882],
  [107.723693977, 11.887691399],
  [107.724166046, 11.886531286],
  [107.72445036, 11.886573281],
  [107.724756132, 11.88692499],
  [107.725035081, 11.886851498],
  [107.725072632, 11.886526036],
  [107.724868784, 11.884709741],
  [107.725340853, 11.882562717],
  [107.72509409, 11.881995774],
  [107.725217471, 11.881197852],
  [107.725426684, 11.880788391],
  [107.725394497, 11.88058891],
  [107.724847327, 11.880200446],
  [107.724884878, 11.879649247],
  [107.723887096, 11.878751577],
  [107.722857128, 11.879140043],
  [107.72191299, 11.879434016],
  [107.721371184, 11.87972274],
  [107.721097598, 11.87950226],
  [107.721274624, 11.878788324],
  [107.721129785, 11.878630837],
  [107.720813284, 11.878662335],
  [107.720491419, 11.879150542],
  [107.720212469, 11.879176789],
  [107.718726526, 11.878557344],
  [107.718259821, 11.878394608],
  [107.715582977, 11.878735828],
  [107.714703212, 11.878867067],
  [107.714097033, 11.879386771],
  [107.713764439, 11.87939202],
  [107.712713013, 11.878903813],
  [107.712203393, 11.879066549],
  [107.71195663, 11.879465513],
  [107.711731325, 11.879565254],
  [107.711221705, 11.879481262],
  [107.71080328, 11.878835569],
  [107.710867653, 11.878436604],
  [107.710787187, 11.87813738],
  [107.710320483, 11.87813213],
  [107.709843049, 11.878242371],
  [107.708845268, 11.87801664],
  [107.708260546, 11.878048137],
  [107.707504163, 11.877507433],
  [107.705015073, 11.876987725],
  [107.704897056, 11.876221286],
  [107.704886327, 11.876000803],
  [107.703872452, 11.875433847],
  [107.703303824, 11.875559837],
  [107.703051696, 11.87591681],
  [107.702708373, 11.876940479],
  [107.702499161, 11.877045471],
  [107.701689134, 11.87693523],
  [107.701249252, 11.877061219],
  [107.700557242, 11.876137293],
  [107.701517473, 11.873979702],
  [107.701742778, 11.872662041],
  [107.701512108, 11.871260379],
  [107.701302896, 11.870913899],
  [107.700321207, 11.870357431],
  [107.700149546, 11.869816711],
  [107.69919468, 11.867564575],
  [107.698593865, 11.867302087],
  [107.697370777, 11.867916309],
  [107.697204481, 11.86808955],
  [107.697011361, 11.868756267],
  [107.696871887, 11.868945258],
  [107.696448098, 11.869165746],
  [107.694227229, 11.868436033],
  [107.692848573, 11.868262792],
  [107.691732774, 11.86829429],
  [107.689029107, 11.866162886],
  [107.688605318, 11.865979144],
  [107.687881122, 11.865884648],
  [107.686995993, 11.864377954],
  [107.685992847, 11.863338488],
  [107.684785853, 11.861606036],
  [107.684463988, 11.861249045],
  [107.683557401, 11.859254084],
  [107.683709009, 11.858439989],
  [107.682861431, 11.857022503],
  [107.682764871, 11.856019759],
  [107.682378633, 11.85578351],
  [107.681579335, 11.85583601],
  [107.681327207, 11.85571001],
  [107.678022726, 11.85408776],
  [107.677003486, 11.85387776],
  [107.675989611, 11.853841009],
  [107.67568384, 11.853715009],
  [107.675651653, 11.853494508],
  [107.676450951, 11.851651742],
  [107.677507742, 11.85017122],
  [107.677684767, 11.849745963],
  [107.677743776, 11.84865919],
  [107.677657945, 11.848428184],
  [107.675919874, 11.848123677],
  [107.675313695, 11.848354683],
  [107.674702151, 11.848869195],
  [107.67362514, 11.848987867],
  [107.673233538, 11.848819864],
  [107.67426887, 11.847076819],
  [107.674419074, 11.846872063],
  [107.674864321, 11.845591022],
  [107.673088866, 11.841685341],
  [107.67240222, 11.83854567],
  [107.672257381, 11.838251653],
  [107.67140806, 11.837346019],
  [107.670635584, 11.836841986],
  [107.669573429, 11.834736588],
  [107.666301134, 11.831476078],
  [107.666049006, 11.831087545],
  [107.665244343, 11.830341979],
  [107.664809826, 11.830179214],
  [107.6640749, 11.830016449],
  [107.662497761, 11.828871842],
  [107.662213447, 11.827879496],
  [107.662079337, 11.827595968],
  [107.661848667, 11.827349193],
  [107.661242488, 11.826986906],
  [107.661135199, 11.82672963],
  [107.661140564, 11.826430349],
  [107.660824063, 11.826230828],
  [107.660400274, 11.826356841],
  [107.66011596, 11.826236078],
  [107.660105231, 11.826010305],
  [107.660405638, 11.825301479],
  [107.660325172, 11.824897185],
  [107.659037712, 11.824078093],
  [107.658442261, 11.823311506],
  [107.658436897, 11.822964966],
  [107.660748961, 11.821426531],
  [107.66103864, 11.821163999],
  [107.661872189, 11.81839522],
  [107.660751026, 11.815223778],
  [107.660418432, 11.814814218],
  [107.659297269, 11.813695802],
  [107.659704964, 11.810545309],
  [107.66047744, 11.809306105],
  [107.660815399, 11.809143328],
  [107.661705892, 11.808938544],
  [107.662440817, 11.808649745],
  [107.662521284, 11.808465964],
  [107.662585657, 11.807988132],
  [107.66273586, 11.807667827],
  [107.663647811, 11.807003586],
  [107.663875706, 11.806751542],
  [107.665664832, 11.803826762],
  [107.665739934, 11.803165137],
  [107.665326874, 11.799358141],
  [107.665353696, 11.798628242],
  [107.667140047, 11.796506797],
  [107.667413633, 11.796044698],
  [107.667542379, 11.79531479],
  [107.666136901, 11.792762722],
  [107.665809672, 11.789065858],
  [107.664640228, 11.787485223],
  [107.663969676, 11.787122884],
  [107.662338893, 11.786713282],
  [107.659806888, 11.786434963],
  [107.659399192, 11.786282674],
  [107.659222166, 11.785804804],
  [107.659254353, 11.785206152],
  [107.659071962, 11.784791297],
  [107.657891791, 11.783930075],
  [107.657317798, 11.783084604],
  [107.656824271, 11.782790527],
  [107.65549926, 11.782632985],
  [107.653551976, 11.781551198],
  [107.6533374, 11.781047062],
  [107.653686087, 11.780143817],
  [107.65375046, 11.779676439],
  [107.652468364, 11.777838428],
  [107.6519051, 11.776152698],
  [107.651449124, 11.775280946],
  [107.649866621, 11.773495421],
  [107.649684231, 11.77322234],
  [107.649523298, 11.772865233],
  [107.649475019, 11.772324321],
  [107.649330179, 11.77038648],
  [107.649421374, 11.769624994],
  [107.649399917, 11.769378167],
  [107.649297993, 11.769173353],
  [107.648960035, 11.768900267],
  [107.648788373, 11.768642937],
  [107.648724, 11.768322585],
  [107.649517934, 11.767293258],
  [107.649652044, 11.767056933],
  [107.649893443, 11.765418402],
  [107.649630587, 11.764977258],
  [107.649222891, 11.764562372],
  [107.649115603, 11.764031946],
  [107.649008314, 11.763837632],
  [107.64835922, 11.76350152],
  [107.648219745, 11.763312457],
  [107.648144643, 11.76305512],
  [107.648530881, 11.760760092],
  [107.648557703, 11.760539516],
  [107.649061958, 11.759714981],
  [107.649120967, 11.759557426],
  [107.649249713, 11.759163539],
  [107.650032918, 11.757393665],
  [107.65029041, 11.757157331],
  [107.650499622, 11.757120568],
  [107.650714199, 11.757157331],
  [107.651996295, 11.757645754],
  [107.652280609, 11.757672014],
  [107.652699034, 11.757608991],
  [107.653906028, 11.753659561],
  [107.65426008, 11.749914903],
  [107.654480021, 11.747357162],
  [107.654657046, 11.74322376],
  [107.654995005, 11.742698546],
  [107.655236404, 11.741401262],
  [107.65545098, 11.741038862],
  [107.655665557, 11.740897053],
  [107.656277101, 11.740849783],
];

export var QL28aLDLine = createLines(path, "Quốc Lộ 28", "tỉnh Lâm Đồng");