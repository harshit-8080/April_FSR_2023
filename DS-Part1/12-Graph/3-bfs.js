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

  bfs(startVertex) {
    const visited = {};
    const queue = [startVertex];

    const result = [];

    // Mark start vertex as visited.
    visited[startVertex] = true;

    while (queue.length > 0) {
      const currentVertex = queue.shift(); // Dequeue the first vertex from the queue.

      result.push(currentVertex); // Pushed the result here.

      // iterate through the neighbors of the current vertex.
      for (const neighbor of this.AdjacencyList[currentVertex]) {
        // if neighbor has't been visited yet.
        // mark it as visited and enqueue it.
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

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

graph.addEdge("B", "A");
graph.addEdge("B", "C");
graph.addEdge("B", "E");

graph.addEdge("C", "A");
graph.addEdge("C", "B");
graph.addEdge("C", "D");

graph.addEdge("D", "C");

graph.addEdge("E", "F");

// console.log(graph.AdjacencyList);

let bfsResult = graph.bfs("A");

console.log(bfsResult);
