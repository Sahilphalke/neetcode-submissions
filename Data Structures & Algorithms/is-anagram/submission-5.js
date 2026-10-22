class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let Ssort = s.split('').sort().join()
        let Tsort = t.split('').sort().join()
        console.log(Ssort)
        console.log(Tsort)
        return Ssort == Tsort
    }
}
