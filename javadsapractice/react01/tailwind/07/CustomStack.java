import java.util.ArrayList;
import java.util.List;

class CustomStack {
    private int maxSize;
    private List<Integer> stack;
    private int[] increment;

    public CustomStack(int maxSize) {
        this.maxSize = maxSize;
        this.stack = new ArrayList<>();
        this.increment = new int[maxSize];
    }

    public void push(int x) {
        if (stack.size() < maxSize) {
            stack.add(x);
        }
    }

    public int pop() {
        int n = stack.size();
        if (n == 0) {
            return -1;
        }

        if (n > 1) {
            increment[n - 2] += increment[n - 1];
        }

        int res = stack.remove(n - 1) + increment[n - 1];
        increment[n - 1] = 0;

        return res;
    }

    public void increment(int k, int val) {
        int n = Math.min(k, stack.size());
        if (n > 0) {
            increment[n - 1] += val;
        }
    }

    public static void main(String[] args) {
        CustomStack stk = new CustomStack(3);
        stk.push(1);
        stk.push(2);
        System.out.println(stk.pop());
        stk.push(2);
        stk.push(3);
        stk.push(4);
        stk.increment(5, 100);
        stk.increment(2, 100);
        System.out.println(" The solution stackCustomStack : " + stk.pop());
        System.out.println(" The solution stackCustomStack : " + stk.pop());
        System.out.println(" The solution stackCustomStack : " + stk.pop());
        System.out.println(" The solution stackCustomStack : " + stk.pop());
    }
}
