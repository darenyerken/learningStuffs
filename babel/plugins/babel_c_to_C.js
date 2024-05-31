export default function ({types: t}) {
  return {
    visitor: {
      ImportDeclaration(path) {
        if (
          path.node.source.value === "./hooks/useIncrease" &&
          path.node.specifiers
            .map((item) => item.imported.name)
            .includes("increase")
        ) {
          const tempNode = t.cloneDeep(path.node)
          tempNode.specifiers = []
          path.node.specifiers = path.node.specifiers.map(item=>{
            if(item.imported.name === 'decrease'){
              tempNode.specifiers.push(item)
              return null
            }
            return item
          })
          tempNode.source.value = "./hooks/useIncrease112233"
          path.insertAfter(tempNode)
        }
      },
      // 添加更多的访问者以修改其他类型的节点
    },
  };
}
