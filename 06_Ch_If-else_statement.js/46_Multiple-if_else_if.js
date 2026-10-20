/* Multiple conditions using if...else if...else

    Use this structure when you want to select one outcome from several possibilities.

Example: Student grading system.  Suppose the grading rules are:
- Score 90 or above → Grade A
- Score 80–89 → Grade B
- Score 70–79 → Grade C
- Score below 70 → Fail
*/

let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}