public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog"; // Replace with your input

        boolean isPangram = isPangram(input);
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String str) {
        boolean[] letters = new boolean[26];
        str = str.toLowerCase(); 

        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if ('a' <= c && c <= 'z') {
                letters[c - 'a'] = true;
            }
        }
        for (boolean letterPresent : letters) {
            if (!letterPresent) {
                return false;
            }
        }

        return true;
    }
}

