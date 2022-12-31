var tcs=function(grad_score,hsc_score,ssc_score,candidate_name)
{
    var tcsResult= grad_score>=70 && hsc_score>=80 && ssc_score>=90?`congratulations ${candidate_name} you are eligible for TCS Interview`:`Unfortunately ${candidate_name} you are not eligible for interview`;
    console.log(`${tcsResult}`);
}
tcs(80,86,90,"Aishwarya");
tcs(70,65,55,"Chetan");
tcs(60,79,88,"Bunny");
