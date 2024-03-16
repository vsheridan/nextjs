import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
<head>
<meta http-equiv=3DContent-Type content=3D"text/html; charset=3Dwindows-125=
2">
<meta name=3DProgId content=3DWord.Document>
<meta name=3DGenerator content=3D"Microsoft Word 14">
<meta name=3DOriginator content=3D"Microsoft Word 14">
<link rel=3DFile-List href=3D"VercelAnswers_files/filelist.xml">
<!--[if gte mso 9]><xml>
 <o:DocumentProperties>
  <o:Author>Vaughan</o:Author>
  <o:Template>Normal</o:Template>
  <o:LastAuthor>Vaughan</o:LastAuthor>
  <o:Revision>2</o:Revision>
  <o:TotalTime>23</o:TotalTime>
  <o:Created>2024-03-16T03:51:00Z</o:Created>
  <o:LastSaved>2024-03-16T03:51:00Z</o:LastSaved>
  <o:Pages>1</o:Pages>
  <o:Words>1239</o:Words>
  <o:Characters>7066</o:Characters>
  <o:Company>Hewlett-Packard Company</o:Company>
  <o:Lines>58</o:Lines>
  <o:Paragraphs>16</o:Paragraphs>
  <o:CharactersWithSpaces>8289</o:CharactersWithSpaces>
  <o:Version>14.00</o:Version>
 </o:DocumentProperties>
 <o:OfficeDocumentSettings>
  <o:AllowPNG/>
 </o:OfficeDocumentSettings>
</xml><![endif]-->
<link rel=3DthemeData href=3D"VercelAnswers_files/themedata.thmx">
<link rel=3DcolorSchemeMapping href=3D"VercelAnswers_files/colorschememappi=
ng.xml">
<!--[if gte mso 9]><xml>
 <w:WordDocument>
  <w:SpellingState>Clean</w:SpellingState>
  <w:GrammarState>Clean</w:GrammarState>
  <w:TrackMoves>false</w:TrackMoves>
  <w:TrackFormatting/>
  <w:PunctuationKerning/>
  <w:ValidateAgainstSchemas/>
  <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
  <w:IgnoreMixedContent>false</w:IgnoreMixedContent>
  <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
  <w:DoNotPromoteQF/>
  <w:LidThemeOther>EN-US</w:LidThemeOther>
  <w:LidThemeAsian>X-NONE</w:LidThemeAsian>
  <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>
  <w:Compatibility>
   <w:BreakWrappedTables/>
   <w:SnapToGridInCell/>
   <w:WrapTextWithPunct/>
   <w:UseAsianBreakRules/>
   <w:DontGrowAutofit/>
   <w:SplitPgBreakAndParaMark/>
   <w:EnableOpenTypeKerning/>
   <w:DontFlipMirrorIndents/>
   <w:OverrideTableStyleHps/>
  </w:Compatibility>
  <m:mathPr>
   <m:mathFont m:val=3D"Cambria Math"/>
   <m:brkBin m:val=3D"before"/>
   <m:brkBinSub m:val=3D"&#45;-"/>
   <m:smallFrac m:val=3D"off"/>
   <m:dispDef/>
   <m:lMargin m:val=3D"0"/>
   <m:rMargin m:val=3D"0"/>
   <m:defJc m:val=3D"centerGroup"/>
   <m:wrapIndent m:val=3D"1440"/>
   <m:intLim m:val=3D"subSup"/>
   <m:naryLim m:val=3D"undOvr"/>
  </m:mathPr></w:WordDocument>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <w:LatentStyles DefLockedState=3D"false" DefUnhideWhenUsed=3D"true"
  DefSemiHidden=3D"true" DefQFormat=3D"false" DefPriority=3D"99"
  LatentStyleCount=3D"267">
  <w:LsdException Locked=3D"false" Priority=3D"0" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"Normal"/>
  <w:LsdException Locked=3D"false" Priority=3D"9" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"heading 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"9" QFormat=3D"true" Name=3D"=
heading 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"9" QFormat=3D"true" Name=3D"=
heading 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"9" QFormat=3D"true" Name=3D"=
heading 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"9" QFormat=3D"true" Name=3D"=
heading 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"9" QFormat=3D"true" Name=3D"=
heading 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"9" QFormat=3D"true" Name=3D"=
heading 7"/>
  <w:LsdException Locked=3D"false" Priority=3D"9" QFormat=3D"true" Name=3D"=
heading 8"/>
  <w:LsdException Locked=3D"false" Priority=3D"9" QFormat=3D"true" Name=3D"=
heading 9"/>
  <w:LsdException Locked=3D"false" Priority=3D"39" Name=3D"toc 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"39" Name=3D"toc 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"39" Name=3D"toc 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"39" Name=3D"toc 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"39" Name=3D"toc 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"39" Name=3D"toc 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"39" Name=3D"toc 7"/>
  <w:LsdException Locked=3D"false" Priority=3D"39" Name=3D"toc 8"/>
  <w:LsdException Locked=3D"false" Priority=3D"39" Name=3D"toc 9"/>
  <w:LsdException Locked=3D"false" Priority=3D"35" QFormat=3D"true" Name=3D=
"caption"/>
  <w:LsdException Locked=3D"false" Priority=3D"10" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"Title"/>
  <w:LsdException Locked=3D"false" Priority=3D"1" Name=3D"Default Paragraph=
 Font"/>
  <w:LsdException Locked=3D"false" Priority=3D"11" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"Subtitle"/>
  <w:LsdException Locked=3D"false" Priority=3D"22" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"Strong"/>
  <w:LsdException Locked=3D"false" Priority=3D"20" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"Emphasis"/>
  <w:LsdException Locked=3D"false" Priority=3D"59" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Table Grid"/>
  <w:LsdException Locked=3D"false" UnhideWhenUsed=3D"false" Name=3D"Placeho=
lder Text"/>
  <w:LsdException Locked=3D"false" Priority=3D"1" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"No Spacing"/>
  <w:LsdException Locked=3D"false" Priority=3D"60" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light Shading"/>
  <w:LsdException Locked=3D"false" Priority=3D"61" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light List"/>
  <w:LsdException Locked=3D"false" Priority=3D"62" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light Grid"/>
  <w:LsdException Locked=3D"false" Priority=3D"63" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Shading 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"64" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Shading 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"65" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium List 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"66" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium List 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"67" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"68" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"69" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"70" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Dark List"/>
  <w:LsdException Locked=3D"false" Priority=3D"71" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful Shading"/>
  <w:LsdException Locked=3D"false" Priority=3D"72" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful List"/>
  <w:LsdException Locked=3D"false" Priority=3D"73" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful Grid"/>
  <w:LsdException Locked=3D"false" Priority=3D"60" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light Shading Accent 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"61" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light List Accent 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"62" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light Grid Accent 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"63" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Shading 1 Accent 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"64" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Shading 2 Accent 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"65" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium List 1 Accent 1"/>
  <w:LsdException Locked=3D"false" UnhideWhenUsed=3D"false" Name=3D"Revisio=
n"/>
  <w:LsdException Locked=3D"false" Priority=3D"34" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"List Paragraph"/>
  <w:LsdException Locked=3D"false" Priority=3D"29" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"Quote"/>
  <w:LsdException Locked=3D"false" Priority=3D"30" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"Intense Quote"/>
  <w:LsdException Locked=3D"false" Priority=3D"66" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium List 2 Accent 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"67" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 1 Accent 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"68" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 2 Accent 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"69" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 3 Accent 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"70" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Dark List Accent 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"71" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful Shading Accent 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"72" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful List Accent 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"73" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful Grid Accent 1"/>
  <w:LsdException Locked=3D"false" Priority=3D"60" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light Shading Accent 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"61" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light List Accent 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"62" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light Grid Accent 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"63" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Shading 1 Accent 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"64" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Shading 2 Accent 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"65" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium List 1 Accent 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"66" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium List 2 Accent 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"67" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 1 Accent 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"68" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 2 Accent 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"69" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 3 Accent 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"70" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Dark List Accent 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"71" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful Shading Accent 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"72" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful List Accent 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"73" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful Grid Accent 2"/>
  <w:LsdException Locked=3D"false" Priority=3D"60" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light Shading Accent 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"61" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light List Accent 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"62" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light Grid Accent 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"63" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Shading 1 Accent 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"64" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Shading 2 Accent 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"65" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium List 1 Accent 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"66" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium List 2 Accent 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"67" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 1 Accent 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"68" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 2 Accent 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"69" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 3 Accent 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"70" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Dark List Accent 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"71" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful Shading Accent 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"72" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful List Accent 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"73" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful Grid Accent 3"/>
  <w:LsdException Locked=3D"false" Priority=3D"60" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light Shading Accent 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"61" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light List Accent 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"62" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light Grid Accent 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"63" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Shading 1 Accent 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"64" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Shading 2 Accent 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"65" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium List 1 Accent 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"66" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium List 2 Accent 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"67" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 1 Accent 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"68" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 2 Accent 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"69" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 3 Accent 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"70" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Dark List Accent 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"71" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful Shading Accent 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"72" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful List Accent 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"73" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful Grid Accent 4"/>
  <w:LsdException Locked=3D"false" Priority=3D"60" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light Shading Accent 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"61" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light List Accent 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"62" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light Grid Accent 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"63" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Shading 1 Accent 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"64" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Shading 2 Accent 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"65" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium List 1 Accent 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"66" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium List 2 Accent 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"67" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 1 Accent 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"68" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 2 Accent 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"69" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 3 Accent 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"70" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Dark List Accent 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"71" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful Shading Accent 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"72" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful List Accent 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"73" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful Grid Accent 5"/>
  <w:LsdException Locked=3D"false" Priority=3D"60" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light Shading Accent 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"61" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light List Accent 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"62" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Light Grid Accent 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"63" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Shading 1 Accent 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"64" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Shading 2 Accent 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"65" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium List 1 Accent 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"66" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium List 2 Accent 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"67" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 1 Accent 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"68" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 2 Accent 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"69" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Medium Grid 3 Accent 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"70" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Dark List Accent 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"71" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful Shading Accent 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"72" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful List Accent 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"73" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" Name=3D"Colorful Grid Accent 6"/>
  <w:LsdException Locked=3D"false" Priority=3D"19" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"Subtle Emphasis"/>
  <w:LsdException Locked=3D"false" Priority=3D"21" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"Intense Emphasis"/>
  <w:LsdException Locked=3D"false" Priority=3D"31" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"Subtle Reference"/>
  <w:LsdException Locked=3D"false" Priority=3D"32" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"Intense Reference"/>
  <w:LsdException Locked=3D"false" Priority=3D"33" SemiHidden=3D"false"
   UnhideWhenUsed=3D"false" QFormat=3D"true" Name=3D"Book Title"/>
  <w:LsdException Locked=3D"false" Priority=3D"37" Name=3D"Bibliography"/>
  <w:LsdException Locked=3D"false" Priority=3D"39" QFormat=3D"true" Name=3D=
"TOC Heading"/>
 </w:LatentStyles>
</xml><![endif]-->
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:Helvetica;
	panose-1:2 11 6 4 2 2 2 2 2 4;
	mso-font-charset:0;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-536858881 -1073711013 9 0 511 0;}
@font-face
	{font-family:Helvetica;
	panose-1:2 11 6 4 2 2 2 2 2 4;
	mso-font-charset:0;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-536858881 -1073711013 9 0 511 0;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-469750017 -1073732485 9 0 511 0;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-parent:"";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:10.0pt;
	margin-left:0in;
	line-height:115%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri","sans-serif";
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;}
p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph
	{mso-style-priority:34;
	mso-style-unhide:no;
	mso-style-qformat:yes;
	margin-top:0in;
	margin-right:0in;
	margin-bottom:10.0pt;
	margin-left:.5in;
	mso-add-space:auto;
	line-height:115%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri","sans-serif";
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;}
p.MsoListParagraphCxSpFirst, li.MsoListParagraphCxSpFirst, div.MsoListParag=
raphCxSpFirst
	{mso-style-priority:34;
	mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-type:export-only;
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	mso-add-space:auto;
	line-height:115%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri","sans-serif";
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;}
p.MsoListParagraphCxSpMiddle, li.MsoListParagraphCxSpMiddle, div.MsoListPar=
agraphCxSpMiddle
	{mso-style-priority:34;
	mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-type:export-only;
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:.5in;
	margin-bottom:.0001pt;
	mso-add-space:auto;
	line-height:115%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri","sans-serif";
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;}
p.MsoListParagraphCxSpLast, li.MsoListParagraphCxSpLast, div.MsoListParagra=
phCxSpLast
	{mso-style-priority:34;
	mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-type:export-only;
	margin-top:0in;
	margin-right:0in;
	margin-bottom:10.0pt;
	margin-left:.5in;
	mso-add-space:auto;
	line-height:115%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri","sans-serif";
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;}
span.SpellE
	{mso-style-name:"";
	mso-spl-e:yes;}
span.GramE
	{mso-style-name:"";
	mso-gram-e:yes;}
.MsoChpDefault
	{mso-style-type:export-only;
	mso-default-props:yes;
	font-family:"Calibri","sans-serif";
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;}
.MsoPapDefault
	{mso-style-type:export-only;
	margin-bottom:10.0pt;
	line-height:115%;}
@page WordSection1
	{size:8.5in 11.0in;
	margin:1.0in 1.0in 1.0in 1.0in;
	mso-header-margin:.5in;
	mso-footer-margin:.5in;
	mso-paper-source:0;}
div.WordSection1
	{page:WordSection1;}
 /* List Definitions */
 @list l0
	{mso-list-id:454297178;
	mso-list-type:hybrid;
	mso-list-template-ids:-1784014682 67698703 67698713 67698715 67698703 6769=
8713 67698715 67698703 67698713 67698715;}
@list l0:level1
	{mso-level-tab-stop:none;
	mso-level-number-position:left;
	margin-left:1.0in;
	text-indent:-.25in;}
@list l0:level2
	{mso-level-number-format:alpha-lower;
	mso-level-tab-stop:none;
	mso-level-number-position:left;
	margin-left:1.5in;
	text-indent:-.25in;}
@list l0:level3
	{mso-level-number-format:roman-lower;
	mso-level-tab-stop:none;
	mso-level-number-position:right;
	margin-left:2.0in;
	text-indent:-9.0pt;}
@list l0:level4
	{mso-level-tab-stop:none;
	mso-level-number-position:left;
	margin-left:2.5in;
	text-indent:-.25in;}
@list l0:level5
	{mso-level-number-format:alpha-lower;
	mso-level-tab-stop:none;
	mso-level-number-position:left;
	margin-left:3.0in;
	text-indent:-.25in;}
@list l0:level6
	{mso-level-number-format:roman-lower;
	mso-level-tab-stop:none;
	mso-level-number-position:right;
	margin-left:3.5in;
	text-indent:-9.0pt;}
@list l0:level7
	{mso-level-tab-stop:none;
	mso-level-number-position:left;
	margin-left:4.0in;
	text-indent:-.25in;}
@list l0:level8
	{mso-level-number-format:alpha-lower;
	mso-level-tab-stop:none;
	mso-level-number-position:left;
	margin-left:4.5in;
	text-indent:-.25in;}
@list l0:level9
	{mso-level-number-format:roman-lower;
	mso-level-tab-stop:none;
	mso-level-number-position:right;
	margin-left:5.0in;
	text-indent:-9.0pt;}
@list l1
	{mso-list-id:839084763;
	mso-list-template-ids:591677732;}
@list l1:level1
	{mso-level-tab-stop:.5in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l1:level2
	{mso-level-tab-stop:1.0in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l1:level3
	{mso-level-tab-stop:1.5in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l1:level4
	{mso-level-tab-stop:2.0in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l1:level5
	{mso-level-tab-stop:2.5in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l1:level6
	{mso-level-tab-stop:3.0in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l1:level7
	{mso-level-tab-stop:3.5in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l1:level8
	{mso-level-tab-stop:4.0in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l1:level9
	{mso-level-tab-stop:4.5in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l2
	{mso-list-id:2143380807;
	mso-list-template-ids:-1764580002;}
@list l2:level1
	{mso-level-tab-stop:.5in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l2:level2
	{mso-level-number-format:bullet;
	mso-level-text:\F0B7;
	mso-level-tab-stop:1.0in;
	mso-level-number-position:left;
	text-indent:-.25in;
	font-family:Symbol;}
@list l2:level3
	{mso-level-tab-stop:1.5in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l2:level4
	{mso-level-tab-stop:2.0in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l2:level5
	{mso-level-tab-stop:2.5in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l2:level6
	{mso-level-tab-stop:3.0in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l2:level7
	{mso-level-tab-stop:3.5in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l2:level8
	{mso-level-tab-stop:4.0in;
	mso-level-number-position:left;
	text-indent:-.25in;}
@list l2:level9
	{mso-level-tab-stop:4.5in;
	mso-level-number-position:left;
	text-indent:-.25in;}
ol
	{margin-bottom:0in;}
ul
	{margin-bottom:0in;}
-->
</style>
<!--[if gte mso 10]>
<style>
 /* Style Definitions */
 table.MsoNormalTable
	{mso-style-name:"Table Normal";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-noshow:yes;
	mso-style-priority:99;
	mso-style-parent:"";
	mso-padding-alt:0in 5.4pt 0in 5.4pt;
	mso-para-margin-top:0in;
	mso-para-margin-right:0in;
	mso-para-margin-bottom:10.0pt;
	mso-para-margin-left:0in;
	line-height:115%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri","sans-serif";
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;}
</style>
<![endif]--><!--[if gte mso 9]><xml>
 <o:shapedefaults v:ext=3D"edit" spidmax=3D"1026"/>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <o:shapelayout v:ext=3D"edit">
  <o:idmap v:ext=3D"edit" data=3D"1"/>
 </o:shapelayout></xml><![endif]-->
</head>

<body lang=3DEN-US style=3D'tab-interval:.5in'>

<div class=3DWordSection1>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:.5in;text-indent:-.25in;line-height:normal;mso-list:l2 level1 l=
fo1;
tab-stops:list .5in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:Helvetica;color:#1D2228'><span style=3D'mso-list:Ig=
nore'>1.<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></sp=
an></span><![endif]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#1D2228'>From&nbsp;<a
href=3D"https://gist.github.com/Pieparker/b04a4e9ff82ba949e5db9d5b0e9d89e8"
target=3D"_blank"><span style=3D'color:#196AD4'>this list</span></a>, rank =
your 5
most <span class=3DSpellE>favourite</span> and 5 least <span class=3DSpellE=
>favourite</span>
support tasks. Provide a brief explanation for each.<o:p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:.5in;line-height:normal;background:white'><span style=3D'font-s=
ize:
8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica","sans-serif";
mso-fareast-font-family:"Times New Roman";color:#0070C0'>Most favorite<o:p>=
</o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:1.0in;text-indent:-.25in;line-height:normal;mso-list:l2 level2 =
lfo1;
tab-stops:list 1.0in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:Symbol;mso-f=
areast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#0070C0'><span style=3D'mso-list:I=
gnore'>�<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style=3D'font-size:8.0pt;mso-bidi-font=
-size:
10.0pt;font-family:"Helvetica","sans-serif";mso-fareast-font-family:"Times =
New Roman";
color:#0070C0'>Manage a Support team � I have been doing this for a while a=
nd
love working with technical people to improve their skills and deliver
exceptional support. Working with engineers to understand what they are loo=
king
for to grow their careers and help <span class=3DGramE>them</span> move on =
to
their next big thing, within the company. (I like to think of support as the
incubator for a <span class=3DSpellE>companys</span> future superstars.)<o:=
p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:1.0in;text-indent:-.25in;line-height:normal;mso-list:l2 level2 =
lfo1;
tab-stops:list 1.0in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:Symbol;mso-f=
areast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#0070C0'><span style=3D'mso-list:I=
gnore'>�<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style=3D'font-size:8.0pt;mso-bidi-font=
-size:
10.0pt;font-family:"Helvetica","sans-serif";mso-fareast-font-family:"Times =
New Roman";
color:#0070C0'>Analyze hundreds of support tickets to spot trends the produ=
ct
team can use � Diving in and analyzing patterns in cases to find the changes
that can improve the customer experience and reduce case volume can be very
rewarding. It also reduces case volumes, improved customer satisfaction and
gives more time for support to resolve other issues. <o:p></o:p></span></p>

<p class=3DMsoListParagraphCxSpFirst style=3D'margin-left:1.0in;mso-add-spa=
ce:auto;
text-indent:-.25in;mso-list:l2 level2 lfo1;tab-stops:list 1.0in'><![if !sup=
portLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;line-height:115%;font-fa=
mily:
Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:Symbol;color:#00=
70C0'><span
style=3D'mso-list:Ignore'>�<span style=3D'font:7.0pt "Times New Roman"'>&nb=
sp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style=3D'font-size:8.0pt;mso-bidi-font=
-size:
10.0pt;line-height:115%;font-family:"Helvetica","sans-serif";mso-fareast-fo=
nt-family:
"Times New Roman";color:#0070C0'>Scheduling time-off coverage and collabora=
ting
as part of a growing cohesive support team. This was one of the projects th=
at I
implemented at Splunk resulting in greater customer satisfaction and employ=
ee morale.
<o:p></o:p></span></p>

<p class=3DMsoListParagraphCxSpMiddle style=3D'margin-left:1.0in;mso-add-sp=
ace:
auto;text-indent:-.25in;mso-list:l2 level2 lfo1;tab-stops:list 1.0in'><![if=
 !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;line-height:115%;font-fa=
mily:
Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:Symbol;color:#00=
70C0'><span
style=3D'mso-list:Ignore'>�<span style=3D'font:7.0pt "Times New Roman"'>&nb=
sp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style=3D'font-size:8.0pt;mso-bidi-font=
-size:
10.0pt;line-height:115%;font-family:"Helvetica","sans-serif";mso-fareast-fo=
nt-family:
"Times New Roman";color:#0070C0'>Find and recruit teammates for the support
team � I like to think of this as my superpower. Finding the right person f=
or a
support role who will grow into the role and get so much more out of the job
that just a pay check. They get to learn new skills and the company gets a
future superstar. <o:p></o:p></span></p>

<p class=3DMsoListParagraphCxSpLast style=3D'margin-left:1.0in;mso-add-spac=
e:auto;
text-indent:-.25in;mso-list:l2 level2 lfo1;tab-stops:list 1.0in'><![if !sup=
portLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;line-height:115%;font-fa=
mily:
Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:Symbol;color:#00=
70C0'><span
style=3D'mso-list:Ignore'>�<span style=3D'font:7.0pt "Times New Roman"'>&nb=
sp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style=3D'font-size:8.0pt;mso-bidi-font=
-size:
10.0pt;line-height:115%;font-family:"Helvetica","sans-serif";mso-fareast-fo=
nt-family:
"Times New Roman";color:#0070C0'>Run ticket review sessions to make sure to=
ne
is consistent � Whilst not particularly fun, I see this as a very necessary=
 part
of the role. Reviewing support cases allows me to find coaching opportuniti=
es with
support engineers as well as intervene in cases where things are starting t=
o go
sideways. It is also the best way to learn what is going on with the product
and how customers are using it. <o:p></o:p></span></p>

<p class=3DMsoNormal style=3D'text-indent:.5in'><span style=3D'font-size:8.=
0pt;
mso-bidi-font-size:10.0pt;line-height:115%;font-family:"Helvetica","sans-se=
rif";
mso-fareast-font-family:"Times New Roman";color:#0070C0'>Least Favorite<o:p=
></o:p></span></p>

<p class=3DMsoNormal style=3D'text-indent:.5in'><span style=3D'font-size:8.=
0pt;
mso-bidi-font-size:10.0pt;line-height:115%;font-family:"Helvetica","sans-se=
rif";
mso-fareast-font-family:"Times New Roman";color:#0070C0'>For my least favor=
ite
tasks, I have a similar answer for all of them. My current skills are focus=
ed
on growing high performance support teams, process improvements and
implementing tools to improve the customer and support engineer experience.=
 The
5 tasks below require current, in-depth technical knowledge to do them well=
. It
<span class=3DSpellE>isnt</span> so much that I <span class=3DSpellE>dont</=
span>
enjoy these tasks, but rather than without the focus on current technical
knowledge, I would not be quick or efficient at the tasks. <span
style=3D'mso-spacerun:yes'>�</span><o:p></o:p></span></p>

<p class=3DMsoListParagraphCxSpFirst style=3D'margin-left:1.0in;mso-add-spa=
ce:auto;
text-indent:-.25in;mso-list:l0 level1 lfo3'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;line-height:115%;font-fa=
mily:
"Helvetica","sans-serif";mso-fareast-font-family:Helvetica;color:#0070C0'><=
span
style=3D'mso-list:Ignore'>1.<span style=3D'font:7.0pt "Times New Roman"'>&n=
bsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style=3D'font-size:8.0pt;mso-bidi-font=
-size:
10.0pt;line-height:115%;font-family:"Helvetica","sans-serif";mso-fareast-fo=
nt-family:
"Times New Roman";color:#0070C0'>Respond to 50+ support requests via email
every day. <o:p></o:p></span></p>

<p class=3DMsoListParagraphCxSpMiddle style=3D'margin-left:1.0in;mso-add-sp=
ace:
auto;text-indent:-.25in;mso-list:l0 level1 lfo3'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;line-height:115%;font-fa=
mily:
"Helvetica","sans-serif";mso-fareast-font-family:Helvetica;color:#0070C0'><=
span
style=3D'mso-list:Ignore'>2.<span style=3D'font:7.0pt "Times New Roman"'>&n=
bsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style=3D'font-size:8.0pt;mso-bidi-font=
-size:
10.0pt;line-height:115%;font-family:"Helvetica","sans-serif";mso-fareast-fo=
nt-family:
"Times New Roman";color:#0070C0'>Dig through logs to troubleshoot a <span
class=3DSpellE>customers</span> broken project<o:p></o:p></span></p>

<p class=3DMsoListParagraphCxSpMiddle style=3D'margin-left:1.0in;mso-add-sp=
ace:
auto;text-indent:-.25in;mso-list:l0 level1 lfo3'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;line-height:115%;font-fa=
mily:
"Helvetica","sans-serif";mso-fareast-font-family:Helvetica;color:#0070C0'><=
span
style=3D'mso-list:Ignore'>3.<span style=3D'font:7.0pt "Times New Roman"'>&n=
bsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style=3D'font-size:8.0pt;mso-bidi-font=
-size:
10.0pt;line-height:115%;font-family:"Helvetica","sans-serif";mso-fareast-fo=
nt-family:
"Times New Roman";color:#0070C0'>Work with the product team to develop a new
feature based on feedback from customers<o:p></o:p></span></p>

<p class=3DMsoListParagraphCxSpMiddle style=3D'margin-left:1.0in;mso-add-sp=
ace:
auto;text-indent:-.25in;mso-list:l0 level1 lfo3'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;line-height:115%;font-fa=
mily:
"Helvetica","sans-serif";mso-fareast-font-family:Helvetica;color:#0070C0'><=
span
style=3D'mso-list:Ignore'>4.<span style=3D'font:7.0pt "Times New Roman"'>&n=
bsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style=3D'font-size:8.0pt;mso-bidi-font=
-size:
10.0pt;line-height:115%;font-family:"Helvetica","sans-serif";mso-fareast-fo=
nt-family:
"Times New Roman";color:#0070C0'>Engage multiple users at once in a public
discussion, to answer their questions and troubleshoot problems<o:p></o:p><=
/span></p>

<p class=3DMsoListParagraphCxSpLast style=3D'margin-left:1.0in;mso-add-spac=
e:auto;
text-indent:-.25in;mso-list:l0 level1 lfo3'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;line-height:115%;font-fa=
mily:
"Helvetica","sans-serif";mso-fareast-font-family:Helvetica;color:#0070C0'><=
span
style=3D'mso-list:Ignore'>5.<span style=3D'font:7.0pt "Times New Roman"'>&n=
bsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style=3D'font-size:8.0pt;mso-bidi-font=
-size:
10.0pt;line-height:115%;font-family:"Helvetica","sans-serif";mso-fareast-fo=
nt-family:
"Times New Roman";color:#0070C0'>Identify, file (and, where possible, resol=
ve)
bugs in private and public <span class=3DSpellE>Vercel</span> Next.js repos=
 on
GitHub<o:p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:.5in;text-indent:-.25in;line-height:normal;mso-list:l2 level1 l=
fo1;
tab-stops:list .5in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:Helvetica;color:#1D2228'><span style=3D'mso-list:Ig=
nore'>2.<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></sp=
an></span><![endif]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#1D2228'>What do you want to
learn or do more of at work?<o:p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:1.0in;text-indent:-.25in;line-height:normal;mso-list:l2 level2 =
lfo1;
tab-stops:list 1.0in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:Symbol;mso-f=
areast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#0070C0'><span style=3D'mso-list:I=
gnore'>�<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style=3D'font-size:8.0pt;mso-bidi-font=
-size:
10.0pt;font-family:"Helvetica","sans-serif";mso-fareast-font-family:"Times =
New Roman";
color:#0070C0'>Implementing new technology to improve the customer and supp=
ort
engineer experience. For example, implementing Artificial Intelligence to
review case communication, identify cases needing intervention earlier and =
easier
than random case sampling by a manager. Once this use case was well
implemented, look at ways to extend into assisting with resolving cases. <o=
:p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:.5in;text-indent:-.25in;line-height:normal;mso-list:l2 level1 l=
fo1;
tab-stops:list .5in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:Helvetica;color:#1D2228'><span style=3D'mso-list:Ig=
nore'>3.<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></sp=
an></span><![endif]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#1D2228'>Describe how you
solved a challenge or technical issue that you faced in a previous role
(preferably in a previous support role). How did you determine that your
solution was successful?<o:p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:1.0in;text-indent:-.25in;line-height:normal;mso-list:l2 level2 =
lfo1;
tab-stops:list 1.0in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:Symbol;mso-f=
areast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#0070C0'><span style=3D'mso-list:I=
gnore'>�<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style=3D'font-size:8.0pt;mso-bidi-font=
-size:
10.0pt;font-family:"Helvetica","sans-serif";mso-fareast-font-family:"Times =
New Roman";
color:#0070C0'>Analyzing the customer satisfaction (CSAT) data it was clear
that the quality of support delivered using the on-call model over the week=
ends
was not satisfactory. Working with senior management, HR and Finance I came=
 up
with a new staffing model that has Support Engineers covering 24x7, elimina=
ting
the weekend on-call model. We were worried that engineers would not want to
work non-traditional Monday to Friday shifts so incentives were added resul=
ting
in more volunteers that we could accept for the new shifts. The new staffing
model resulted in weekend CSAT improving above that of M-F CSAT. Additional=
ly,
employee satisfaction improved as a result of being better supported by a t=
eam
on weekends, and no engineer working 5 days and then having to be on-call. =
All
engineers now worked only 5 days in a week with no on-call duties needed. <=
span
style=3D'mso-spacerun:yes'>�</span><o:p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:.5in;text-indent:-.25in;line-height:normal;mso-list:l2 level1 l=
fo1;
tab-stops:list .5in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:Helvetica;color:#1D2228'><span style=3D'mso-list:Ig=
nore'>4.<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></sp=
an></span><![endif]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#1D2228'>When would you cho=
ose
to use Edge Functions, <span class=3DSpellE>Serverless</span> Functions, or=
 Edge
Middleware with <span class=3DSpellE>Vercel</span>?<o:p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:1.0in;text-indent:-.25in;line-height:normal;mso-list:l2 level2 =
lfo1;
tab-stops:list 1.0in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:Symbol;mso-f=
areast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#0070C0'><span style=3D'mso-list:I=
gnore'>�<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span class=3DSpellE><span style=3D'font-siz=
e:8.0pt;
mso-bidi-font-size:10.0pt;font-family:"Helvetica","sans-serif";mso-fareast-=
font-family:
"Times New Roman";color:#0070C0'>Im</span></span><span style=3D'font-size:8=
.0pt;
mso-bidi-font-size:10.0pt;font-family:"Helvetica","sans-serif";mso-fareast-=
font-family:
"Times New Roman";color:#0070C0'> unfamiliar with these technologies. I wou=
ld have
to Google them, understand their use cases and choose between them based on=
 the
merits, time to implement, and the goal I was trying to achieve.<o:p></o:p>=
</span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:.5in;text-indent:-.25in;line-height:normal;mso-list:l2 level1 l=
fo1;
tab-stops:list .5in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:Helvetica;color:#1D2228'><span style=3D'mso-list:Ig=
nore'>5.<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></sp=
an></span><![endif]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#1D2228'>Imagine a customer
writes in requesting help with a build issue on a framework or technology t=
hat <span
class=3DSpellE>youve</span> not seen before. How would you begin troublesho=
oting
this and what questions would you ask the customer to understand the situat=
ion
better?<o:p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:1.0in;text-indent:-.25in;line-height:normal;mso-list:l2 level2 =
lfo1;
tab-stops:list 1.0in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:Symbol;mso-f=
areast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#0070C0'><span style=3D'mso-list:I=
gnore'>�<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style=3D'font-size:8.0pt;mso-bidi-font=
-size:
10.0pt;font-family:"Helvetica","sans-serif";mso-fareast-font-family:"Times =
New Roman";
color:#0070C0'>Id first work with the customer to understand the big pictur=
e of
what they are trying to do. There is always the possibility they are way do=
wn a
rabbit <span class=3DGramE>hole</span> trying to do something that can be
achieved a different way. After understanding the big picture, Id <span
class=3DGramE>work</span> with the customer to understand what they are see=
ing,
and what they were expecting to see. At the same time, collect log files and
any other information that might be useful to investigate. Perhaps capture a
screen recording. Best to go to the well for water just the once rather than
having to go back multiple times as the investigation continues. Id then set
expectations with the customer on how long it would take to go over the
information provided and when I can call them back with an update.<o:p></o:=
p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:.5in;text-indent:-.25in;line-height:normal;mso-list:l2 level1 l=
fo1;
tab-stops:list .5in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:Helvetica;color:#1D2228'><span style=3D'mso-list:Ig=
nore'>6.<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></sp=
an></span><![endif]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#1D2228'>The customer from
question 5 replies to your response with the below:<o:p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
line-height:normal;background:white'><span class=3DSpellE><i><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#1D2228'>Im</span></i></spa=
n><i><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#1D2228'> so frustrated. <s=
pan
class=3DSpellE>Ive</span> been trying to make this work for hours and I jus=
t <span
class=3DSpellE><span class=3DGramE>cant</span></span> figure it out. It mus=
t be <span
class=3DGramE>a platform issue so just fix</span> it for me instead of aski=
ng me
questions.<o:p></o:p></span></i></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
line-height:normal;background:white'><i><span style=3D'font-size:8.0pt;
mso-bidi-font-size:10.0pt;font-family:"Helvetica","sans-serif";mso-fareast-=
font-family:
"Times New Roman";color:#0070C0'>Dear <span class=3DSpellE>Mr</span> Custom=
er,<o:p></o:p></span></i></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
line-height:normal;background:white'><i><span style=3D'font-size:8.0pt;
mso-bidi-font-size:10.0pt;font-family:"Helvetica","sans-serif";mso-fareast-=
font-family:
"Times New Roman";color:#0070C0'>I appreciate we are frustrated with this
issue. I too would be frustrated having spent so long working on it without
progress. I assume you that <span class=3DSpellE>Vercel</span> takes the re=
solution
of this issue very seriously and I am here to work with you till it is reso=
lved
to your satisfaction.<o:p></o:p></span></i></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
line-height:normal;background:white'><i><span style=3D'font-size:8.0pt;
mso-bidi-font-size:10.0pt;font-family:"Helvetica","sans-serif";mso-fareast-=
font-family:
"Times New Roman";color:#0070C0'>We have setup an internal reproduction to =
help
engineering identify and fix the issue. As it stands, we have not been able=
 to
recreate the issue described, and as such we believe this has to do with th=
e specifics
of your project build. For us to fix the issue, we will need more informati=
on.
If we can send us the requested files, or better yet provide a time we can =
do a
zoom session to live troubleshoot and collect logs, we can then work on a f=
ix. <br>
Would you be willing to work with us in such a fashion? <o:p></o:p></span><=
/i></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
line-height:normal;background:white'><i><span style=3D'font-size:8.0pt;
mso-bidi-font-size:10.0pt;font-family:"Helvetica","sans-serif";mso-fareast-=
font-family:
"Times New Roman";color:#0070C0'>Vaughan Sheridan<o:p></o:p></span></i></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
line-height:normal;background:white'><span class=3DSpellE><i><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#0070C0'>Vercel</span></i><=
/span><i><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#0070C0'> Technical Support=
<o:p></o:p></span></i></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
line-height:normal;background:white'><span style=3D'font-size:8.0pt;mso-bid=
i-font-size:
10.0pt;font-family:"Helvetica","sans-serif";mso-fareast-font-family:"Times =
New Roman";
color:#1D2228'>Please write a follow-up reply to the customer.<o:p></o:p></=
span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:.5in;text-indent:-.25in;line-height:normal;mso-list:l1 level1 l=
fo2;
tab-stops:list .5in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:Helvetica;color:#1D2228'><span style=3D'mso-list:Ig=
nore'>1.<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></sp=
an></span><![endif]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#1D2228'>A customer writes =
in
to the Helpdesk asking How do I do a redirect from the /blog path to
https://example.com? Please write a reply to the customer. Feel free to add=
 any
information about your decision making process after the reply.<o:p></o:p><=
/span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:1.0in;text-indent:-.25in;line-height:normal;mso-list:l1 level2 =
lfo2;
tab-stops:list 1.0in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:Helvetica;color:#0070C0'><span style=3D'mso-list:Ig=
nore'>1.<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></sp=
an></span><![endif]><span
class=3DSpellE><span style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;fon=
t-family:
"Helvetica","sans-serif";mso-fareast-font-family:"Times New Roman";color:#0=
070C0'>Im</span></span><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#0070C0'> unfamiliar with t=
his.
I would start by searching the docs, perhaps googling it and go from there.=
<o:p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:.5in;text-indent:-.25in;line-height:normal;mso-list:l1 level1 l=
fo2;
tab-stops:list .5in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:Helvetica;color:#1D2228'><span style=3D'mso-list:Ig=
nore'>2.<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></sp=
an></span><![endif]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#1D2228'>A customer is crea=
ting
a site and would like their project not to be indexed by search engines. Pl=
ease
write a reply to the customer. Feel free to add any information about your
decision making process after the reply.<o:p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:1.0in;text-indent:-.25in;line-height:normal;mso-list:l1 level2 =
lfo2;
tab-stops:list 1.0in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:Helvetica;color:#0070C0'><span style=3D'mso-list:Ig=
nore'>1.<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></sp=
an></span><![endif]><span
class=3DSpellE><span style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;fon=
t-family:
"Helvetica","sans-serif";mso-fareast-font-family:"Times New Roman";color:#0=
070C0'>Im</span></span><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#0070C0'> unfamiliar with t=
his.
I would start by searching the docs, perhaps googling it and go from there.=
<o:p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:.5in;text-indent:-.25in;line-height:normal;mso-list:l1 level1 l=
fo2;
tab-stops:list .5in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:Helvetica;color:#1D2228'><span style=3D'mso-list:Ig=
nore'>3.<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></sp=
an></span><![endif]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#1D2228'>What do you think =
is
one of the most common problems which customers ask <span class=3DSpellE>Ve=
rcel</span>
for help with? How would you help customers to overcome common problems,
short-term and long-term?<o:p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:1.0in;text-indent:-.25in;line-height:normal;mso-list:l1 level2 =
lfo2;
tab-stops:list 1.0in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:Helvetica;color:#1D2228'><span style=3D'mso-list:Ig=
nore'>1.<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></sp=
an></span><![endif]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#0070C0'>Short term, a good
knowledgebase article or video. Longer term, I would work with Product
Management to improve the usability of the product so this was no longer an
issue in the first place. <span style=3D'mso-spacerun:yes'>�</span>For a sp=
ecific
enhancement, and maybe this was just my unfamiliarity with SCM and <span
class=3DSpellE>Git</span>, but I struggled to see how to re-deploy after co=
mmitting
and pushing changes from </span><span class=3DSpellE><span style=3D'font-si=
ze:8.0pt;
mso-bidi-font-size:10.0pt;font-family:"Helvetica","sans-serif";mso-fareast-=
font-family:
"Times New Roman";color:#1D2228'>Git</span></span><span style=3D'font-size:=
8.0pt;
mso-bidi-font-size:10.0pt;font-family:"Helvetica","sans-serif";mso-fareast-=
font-family:
"Times New Roman";color:#1D2228'>. I was expecting a big button and <span
class=3DSpellE>didnt</span> see one. <o:p></o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:.5in;text-indent:-.25in;line-height:normal;mso-list:l1 level1 l=
fo2;
tab-stops:list .5in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:Helvetica;color:#1D2228'><span style=3D'mso-list:Ig=
nore'>4.<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></sp=
an></span><![endif]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#1D2228'>How could we impro=
ve
or alter this <span class=3DSpellE>familiarisation</span> exercise? <o:p></=
o:p></span></p>

<p class=3DMsoNormal style=3D'mso-margin-top-alt:auto;mso-margin-bottom-alt=
:auto;
margin-left:1.0in;text-indent:-.25in;line-height:normal;mso-list:l1 level2 =
lfo2;
tab-stops:list 1.0in;background:white'><![if !supportLists]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:Helvetica;color:#0070C0'><span style=3D'mso-list:Ig=
nore'>1.<span
style=3D'font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></sp=
an></span><![endif]><span
style=3D'font-size:8.0pt;mso-bidi-font-size:10.0pt;font-family:"Helvetica",=
"sans-serif";
mso-fareast-font-family:"Times New Roman";color:#0070C0'>Ultimately, the be=
st
way to do this is to evolve the product so some tasks become unnecessary or=
 at
least much simpler. Support, as we work with the customer and see what issu=
es
are being encountered is a key part of this <span class=3DGramE>and</span> =
can
provide feedback to Products and engineering on what are the friction points
within the product. <o:p></o:p></span></p>

<p class=3DMsoNormal><o:p>&nbsp;</o:p></p>

</div>

</body>

</html>
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth info about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
