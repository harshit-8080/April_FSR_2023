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
}

const graph = new AdjacencyList();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");

graph.addEdge("B", "A");
graph.addEdge("B", "C");

graph.addEdge("C", "A");
graph.addEdge("C", "B");
graph.addEdge("C", "D");

graph.addEdge("D", "C");

console.log(graph.AdjacencyList);
