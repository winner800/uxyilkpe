data = {
  "condition": {
    "name": "筛选",
    "relationship": [],
    "condition": [
      {
        "child": [
          {
            "id": "1586857998990",
            "conditionName": "参加会议",
            "filterName": "筛选",
            "nodetype": "54",
            "attrValue": "meetingJoin",
            "className": "condition-item first gap",
            "data": {
              "type": "32",
              "value": [
                "1"
              ],
              "name": [
                "是"
              ]
            },
            "valueStr": "任意某个会议是"
          }
        ]
      }
    ],
    "getWx_id": "1064"
  }
}
console.log('----------------------')
console.log(Reflect.ownKeys(data))