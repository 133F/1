
fetch("https://www.youtube.com/api/stats/watchtime?ns=yt&el=shortspage&cpn=4waeLcmB0K1iTbBT&ver=2&cmt=4.645&fmt=399&fs=0&rt=6.001&euri=https%3A%2F%2Fwww.youtube.com%2Fshorts%2FtwEqrw99wCI&lact=4556&cl=725027312&state=playing&volume=23&cbr=Chrome&cbrver=133.0.0.0&c=WEB&cver=2.20250210.02.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&delay=4&hl=de_DE&cr=CH&uga=m44&len=58.461&rtn=16&afmt=251&idpj=-6&ldpj=-33&dtm=1&rti=6&st=0&et=4.645&muted=0&docid=twEqrw99wCI&ei=1s2sZ-j4LKnj6dsPy6H1kAs&plid=AAYt9Ifab3L0gp4u&of=-9rn1VhpNjvJ_vIkTXfVdw&osid=AAAAAB7bxzQ%3AAOeUNAbmVGJo_1V6AnHGj1jxKZ7j3IOqOw&vm=CAQQARgCOjJBSHFpSlRKU0NUNks0U1RxaTlBZUtYTzNPOEV2T1ZQWXN2QWluV1ZwMnJMcGdXc2lwZ2JbQUZVQTZSU3FOMlBhQlFSY2l0OG1Oc2hVNmpqUmM4RW1yTU8zX25HbWtVWVVWeEpOSHB1MG5MSXoycUxBbkVQZFlKWWE0a2VMemNRUXhXdUpkSm1TUjQ4MXppaw", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(ns=yt&el=shortspage&cpn=4waeLcmB0K1iTbBT&ver=2&cmt=4.645&fmt=399&fs=0&rt=6.001&euri=https%3A%2F%2Fwww.youtube.com%2Fshorts%2FtwEqrw99wCI&lact=4556&cl=725027312&state=playing&volume=23&cbr=Chrome&cbrver=133.0.0.0&c=WEB&cver=2.20250210.02.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&delay=4&hl=de_DE&cr=CH&uga=m44&len=58.461&rtn=16&afmt=251&idpj=-6&ldpj=-33&dtm=1&rti=6&st=0&et=4.645&muted=0&docid=twEqrw99wCI&ei=1s2sZ-j4LKnj6dsPy6H1kAs&plid=AAYt9Ifab3L0gp4u&of=-9rn1VhpNjvJ_vIkTXfVdw&osid=AAAAAB7bxzQ%3AAOeUNAbmVGJo_1V6AnHGj1jxKZ7j3IOqOw&vm=CAQQARgCOjJBSHFpSlRKU0NUNks0U1RxaTlBZUtYTzNPOEV2T1ZQWXN2QWluV1ZwMnJMcGdXc2lwZ2JbQUZVQTZSU3FOMlBhQlFSY2l0OG1Oc2hVNmpqUmM4RW1yTU8zX25HbWtVWVVWeEpOSHB1MG5MSXoycUxBbkVQZFlKWWE0a2VMemNRUXhXdUpkSm1TUjQ4MXppaw)
})
.then(r => r.text())
.then(d => console.log("Response:", d))
.catch(err => console.error("Fetch error:", err));
