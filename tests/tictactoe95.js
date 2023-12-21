var ResNorm = 0,
ResWin = 1,
ResDraw = 2,
ResStart = 3;
var Result = ResStart;

export function Set(Str, Off, Val) {
// Set the value at the specified offset in the string
return Str.substring(0, Off) + Val + Str.substring(Off + 1);
}



export function Get(Str, Off) {
// Get the value at the specified offset in the string
return -(-Str.substring(Off, Off + 1));
}

export function Sum(Str, a, b, c) {
// Sum the values at the specified offsets in the string
return Get(Str, a) + Get(Str, b) + Get(Str, c);
}
export function MyMove(Dat) {
var PosLines,
  Order = "2613",
  PosCorns,
  j,
  i,
  a,
  b,
  c,
  center = Get(Dat, 5) == 1;
PosLines = center
  ? "132798174396546528519537"
  : "519537132798174396546528";
PosCorns = center ? "124326748968" : "542526548586";
Result = ResWin;
for (j = 0; j < 4; j++) {
  for (i = 0; i < 24; i += 3) {
    (a = Get(PosLines, i)),
      (b = Get(PosLines, i + 1)),
      (c = Get(PosLines, i + 2));
    if (Sum(Dat, a, b, c) == Get(Order, j)) {
      return Get(Dat, a) == 0
        ? Set(Dat, a, 1)
        : Get(Dat, b) == 0
        ? Set(Dat, b, 1)
        : Get(Dat, c) == 0
        ? Set(Dat, c, 1)
        : undefined;
    }
  }
  Result = ResNorm;
  if (j == 1) {
    for (i = 0; i < 12; i += 3) {
      (a = Get(PosCorns, i)),
        (b = Get(PosCorns, i + 1)),
        (c = Get(PosCorns, i + 2));
      if (Sum(Dat, a, b, c) == 6)
        return Get(Dat, a) == 0 ? Set(Dat, a, 1) : undefined;
    }
  }
}
Result = ResDraw;
return Dat;
}

export function createImgTag(src) {
return '<IMG ALIGN=bottom SRC="' + src + '">';
}

export function DrawTable(Dat) {
var i,
  Sqr,
  html =
    "<center><h1>Tic-Tac-Toe for Windows 95, Internet Explorer 3.0</h1>";
for (i = 1; i <= 9; i++) {
  Sqr = Get(Dat, i);
  html +=
    Sqr == 0
      ? Result == ResWin
        ? createImgTag("images/gameb.gif")
        : '<A HREF="index.html' +
          Set(Dat, i, "3") +
          '"><IMG ALIGN=bottom BORDER=0 SRC="images/gameb.gif"></A>'
      : Sqr == 3
      ? createImgTag("images/gamex.gif")
      : createImgTag("images/gameo.gif");
  html +=
    i == 9
      ? "<P>"
      : i % 3 == 0
      ? '<br><IMG ALIGN=bottom  SRC="images/gamedh.gif"><br>'
      : createImgTag("images/gamedv.gif");
}
html += "<H2>"; //make comments
html +=
  Result == ResDraw
    ? 'It\'s a draw!<BR>Want <A HREF="index.html">another game</A>?'
    : Result == ResStart
    ? "Your go first ..."
    : Result == ResWin
    ? 'I won!<BR>Like to <A HREF="index.html">play again</A>?'
    : "";
html += "<BR></H2><p><b>Created by Povilas, 2023</b> </p></center>";
document.write(html);
}

DrawTable(
location.search.length == 10 ? MyMove(location.search) : "?000000000"
); //

