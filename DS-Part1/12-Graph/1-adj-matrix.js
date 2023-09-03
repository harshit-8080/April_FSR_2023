class AdjacencyMatrix {
  constructor(vertices) {
    this.vertices = vertices;
    this.matrix = [];
    for (let i = 0; i < vertices; i++) {
      this.matrix[i] = new Array(vertices).fill(0);
    }
  }

  printGraph() {
    for (let i = 0; i < this.vertices; i++) {
      console.log(this.matrix[i].join(" "));
    }

    console.log();
    console.log();
    console.log();
  }

  addEdge(fromVertex, toVertex) {
    this.matrix[fromVertex][toVertex] = 1;
    this.matrix[toVertex][fromVertex] = 1;
  }
}

const graph = new AdjacencyMatrix(4);
graph.printGraph();

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);

// graph.addEdge(1, 0);
graph.addEdge(1, 2);

// graph.addEdge(2, 0);
// graph.addEdge(2, 1);

graph.addEdge(2, 2);
graph.addEdge(2, 3);

// graph.addEdge(3, 0);
// graph.addEdge(3, 2);

graph.printGraph();
