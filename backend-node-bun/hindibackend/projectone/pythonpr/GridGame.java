import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class GridGame {
    static class Cell {
        int x, y, moves;

        Cell(int x, int y, int moves) {
            this.x = x;
            this.y = y;
            this.moves = moves;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Read grid dimensions
        int M = sc.nextInt();
        int N = sc.nextInt();

        // Read grid
        int[][] grid = new int[M][N];
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                grid[i][j] = sc.nextInt();
            }
        }

        // Read source and destination
        int startX = sc.nextInt();
        int startY = sc.nextInt();
        int endX = sc.nextInt();
        int endY = sc.nextInt();

        // Read move rule
        int dx = sc.nextInt();
        int dy = sc.nextInt();

        // BFS to find the shortest path
        int result = bfs(grid, startX, startY, endX, endY, dx, dy);
        System.out.println(result);
    }

    private static int bfs(int[][] grid, int startX, int startY, int endX, int endY, int dx, int dy) {
        int M = grid.length;
        int N = grid[0].length;

        // Directions: forward, right, left, back
        int[][] directions = new int[][] {
                { dx, dy }, // forward
                { dy, -dx }, // right
                { -dy, dx }, // left
                { -dx, -dy } // back
        };

        // Queue for BFS
        Queue<Cell> queue = new LinkedList<>();
        queue.offer(new Cell(startX, startY, 0));

        // Visited array
        boolean[][] visited = new boolean[M][N];
        visited[startX][startY] = true;

        while (!queue.isEmpty()) {
            Cell cell = queue.poll();
            int x = cell.x;
            int y = cell.y;
            int moves = cell.moves;

            // Check if destination is reached
            if (x == endX && y == endY) {
                return moves;
            }

            // Explore all four directions
            for (int[] dir : directions) {
                int newX = x + dir[0];
                int newY = y + dir[1];

                if (newX >= 0 && newX < M && newY >= 0 && newY < N && !visited[newX][newY] && grid[newX][newY] == 0) {
                    visited[newX][newY] = true;
                    queue.offer(new Cell(newX, newY, moves + 1));
                }
            }
        }

        // If destination is not reachable
        return -1;
    }
}