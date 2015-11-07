(function(window, undefined) {
  var dictionary = {
    "a3c5d857-a794-4997-b10f-94abd56b3bd1": "知识库-详细信息",
    "3824fca4-0f5c-4cf6-a72e-14d658080f49": "生理数据",
    "9efce3be-fdeb-43e3-9120-2e03b3f6a894": "huliluru",
    "3301b260-6622-44f6-8bb7-0a0b220709d6": "护士-患者信息",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "登陆",
    "bfc15a44-de7d-4bec-8d11-331bf31fdf18": "医嘱",
    "55cd9813-8261-40c4-8473-c429e3a7b83b": "即时消息添加",
    "77909696-ac60-4070-872c-02ea27a086c8": "值班表",
    "02baadb4-5d05-41d6-a42e-a98349c8db8f": "护士-即时消息",
    "2cfa389e-1c41-44e4-a249-7f3a7310f7ad": "shengmingtiz",
    "4b0bef1c-4c7f-457c-b02b-e086bfd675f2": "护士-患者列表",
    "fa3a345b-52bd-4504-ab84-59c85b59614d": "护士-呼叫请求",
    "e255a80a-3c9c-4039-93b1-eb32139f916c": "护理录入",
    "3a0defcf-a3dd-43fe-a6c8-5399032af8db": "知识库",
    "402987c1-f04a-4d06-8723-605b6b19125d": "查询",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);