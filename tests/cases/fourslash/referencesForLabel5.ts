/// <reference path='fourslash.ts'/>

// References to shadowed label

////[|label|]:  while (true) {
////            if (false) break [|label|];
////            function blah() {
////[|label|]:          while (true) {
////                    if (false) break [|label|];
////                }
////            }
////            if (false) break [|label|];
////        }

const [outer1, outer2, inner1, inner2, outer3] = test.ranges();
verify.rangesReferenceEachOther([outer1, outer2, outer3]);
verify.rangesReferenceEachOther([inner1, inner2]);
