class AdjacencyList {
  constructor() {
    this.AdjacencyList = {};
  }

  addVertex(vertex) {
    this.AdjacencyList[vertex] = [];
  }

  addEdge(fromVertex, toVertex) {
    this.AdjacencyList[fromVertex].push(toVertex);
  }

  dfs(startVertex) {
    const visited = {};
    const result = [];

    const visitNodes = (vertex) => {
      if (!vertex) {
        return;
      }

      visited[vertex] = true;
      result.push(vertex);

      for (const neighbor of this.AdjacencyList[vertex]) {
        if (!visited[neighbor]) {
          visitNodes(neighbor);
        }
      }
    };

    visitNodes(startVertex);
    return result;
  }
}

const graph = new AdjacencyList();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");

graph.addEdge("B", "E");

graph.addEdge("C", "D");

graph.addEdge("E", "F");

// console.log(graph.AdjacencyList);

let DFSResult = graph.dfs("A");

console.log(DFSResult);
