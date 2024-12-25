import java.util.*;

public class nine {
    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        Map<String, Map<String, Double>> graph = buildGraph(equations, values);
        double[] results = new double[queries.size()];
        for (int i = 0; i < queries.size(); i++) {
            List<String> query = queries.get(i);
            String start = query.get(0);
            String end = query.get(1);
            if (!graph.containsKey(start) || !graph.containsKey(end)) {
                results[i] = -1.0;
            } else {
                results[i] = dfs(graph, start, end, new HashSet<>());
            }
        }
        return results;
    }

    private Map<String, Map<String, Double>> buildGraph(List<List<String>> equations, double[] values) {
        Map<String, Map<String, Double>> graph = new HashMap<>();
        for (int i = 0; i < equations.size(); i++) {
            String A = equations.get(i).get(0);
            String B = equations.get(i).get(1);
            double value = values[i];
            graph.putIfAbsent(A, new HashMap<>());
            graph.putIfAbsent(B, new HashMap<>());
            graph.get(A).put(B, value);
            graph.get(B).put(A, 1 / value);
        }
        return graph;
    }

    private double dfs(Map<String, Map<String, Double>> graph, String start, String end, Set<String> visited) {
        if (start.equals(end)) {
            return 1.0;
        }
        visited.add(start);
        for (Map.Entry<String, Double> neighbor : graph.get(start).entrySet()) {
            String nextNode = neighbor.getKey();
            double value = neighbor.getValue();

            if (!visited.contains(nextNode)) {
                double result = dfs(graph, nextNode, end, visited);
                if (result != -1.0) {
                    return value * result;
                }
            }
        }
        return -1.0;
    }

    public static void main(String[] args) {
        nine solution = new nine();
        List<List<String>> equations = new ArrayList<>();
        equations.add(Arrays.asList("a", "b"));
        equations.add(Arrays.asList("b", "c"));

        double[] values = { 2.0, 3.0 };

        List<List<String>> queries = new ArrayList<>();
        queries.add(Arrays.asList("a", "c"));
        queries.add(Arrays.asList("b", "a"));
        queries.add(Arrays.asList("a", "e"));
        queries.add(Arrays.asList("a", "a"));
        queries.add(Arrays.asList("x", "x"));

        double[] results = solution.calcEquation(equations, values, queries);
        for (double result : results) {
            System.out.println("The 399. Evaluate Division : " + result + " .");
        }
    }
}