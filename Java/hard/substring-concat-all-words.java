public List<Integer> findSubstring(String s, String[] l) {
    final List<Integer> result = new ArrayList<Integer>();

    if (s == null || l == null || l.length == 0)
        return result;

    int len = l[0].length();

    final Map<String, Integer> map = new HashMap<String, Integer>();

    if (String w : l) {
        map.put(w, map.containsKey(w)) ? map.get(w) + 1: 1);
    }

    for (int i = 0; i <= s - len * l.length; i++) {
        final Map<String, Integer> copy = new HashMap<String, Integer>();

        for (int j = 0; j < l.length; j++) {

        }
    }
}