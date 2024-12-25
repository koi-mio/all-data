import java.util.HashSet;

public class first {
    public static void main(String[] args) {
        String allowed = "ab";
        String[] words = { "ad", "bd", "aaab", "baa", "badab" };
        System.out.println(countConsistentStrings(allowed, words));
        String allowed1 = "abc";
        String[] words1 = { "a", "b", "c", "ab", "ac", "bc", "abc" };
        System.out.println(countConsistentStrings(allowed1, words1));
    }

    public static int countConsistentStrings(String allowed, String[] words) {
        HashSet<Character> allowedSet = new HashSet<>();
        for (char c : allowed.toCharArray()) {
            allowedSet.add(c);
        }
        int consistentCount = 0;
        for (String word : words) {
            boolean isConsistent = true;
            for (char c : word.toCharArray()) {
                if (!allowedSet.contains(c)) {
                    isConsistent = false;
                    break;
                }
            }
            if (isConsistent) {
                consistentCount++;
            }
        }
        return consistentCount;
    }
}