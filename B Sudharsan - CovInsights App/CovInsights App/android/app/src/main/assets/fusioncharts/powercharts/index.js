import Spline from"../viz/spline";import Logmscolumn2d from"../viz/logmscolumn2d";import Logmsline from"../viz/logmsline";import LogStackedColumn2d from"../viz/logstackedcolumn2d";import Splinearea from"../viz/splinearea";import Msspline from"../viz/msspline";import MSSplineDy from"../viz/mssplinedy";import Mssplinearea from"../viz/mssplinearea";import Errorbar2d from"../viz/errorbar2d";import Errorline from"../viz/errorline";import Errorscatter from"../viz/errorscatter";import Inversemsarea from"../viz/inversemsarea";import Inversemscolumn2d from"../viz/inversemscolumn2d";import Inversemsline from"../viz/inversemsline";import Dragcolumn2d from"../viz/dragcolumn2d";import Dragline from"../viz/dragline";import Kagi from"../viz/kagi";import WaterFall2D from"../viz/waterfall2d";import SelectScatter from"../viz/selectscatter";import MultilevelPie from"../viz/multilevelpie";import Sunburst from"../viz/sunburst";import MultiAxisLine from"../viz/multiaxisline";import MSStepLine from"../viz/msstepline";import DragNode from"../viz/dragnode";import CandleStick from"../viz/candlestick";import BoxAndWhisker2D from"../viz/boxandwhisker2d";import Sankey from"../viz/sankey";import HeatMap from"../viz/heatmap";import Radar from"../viz/radar";import Chord from"../viz/chord";import DragArea from"../viz/dragarea";import CrossLine from"../features/crossline";import MultiCanvasCrossLine from"../features/multicanvas-crossline-manager";export{Spline,Logmscolumn2d,LogStackedColumn2d,Logmsline,Splinearea,MSSplineDy,Msspline,Mssplinearea,Errorbar2d,Errorline,Errorscatter,Inversemsarea,Inversemscolumn2d,Inversemsline,Dragcolumn2d,Dragline,Kagi,WaterFall2D,SelectScatter,MultilevelPie,Sunburst,MultiAxisLine,MSStepLine,DragNode,CandleStick,BoxAndWhisker2D,Sankey,HeatMap,Radar,DragArea,Chord};export default{name:"powercharts",type:"package",requiresFusionCharts:true,extension:FusionCharts=>{FusionCharts.addDep(CrossLine);FusionCharts.addDep(MultiCanvasCrossLine);FusionCharts.addDep(Spline);FusionCharts.addDep(Logmscolumn2d);FusionCharts.addDep(LogStackedColumn2d);FusionCharts.addDep(Logmsline);FusionCharts.addDep(Splinearea);FusionCharts.addDep(MSSplineDy);FusionCharts.addDep(Msspline);FusionCharts.addDep(Mssplinearea);FusionCharts.addDep(Errorbar2d);FusionCharts.addDep(Errorline);FusionCharts.addDep(Errorscatter);FusionCharts.addDep(Inversemsarea);FusionCharts.addDep(Inversemscolumn2d);FusionCharts.addDep(Inversemsline);FusionCharts.addDep(Dragcolumn2d);FusionCharts.addDep(Dragline);FusionCharts.addDep(Kagi);FusionCharts.addDep(WaterFall2D);FusionCharts.addDep(SelectScatter);FusionCharts.addDep(MultilevelPie);FusionCharts.addDep(Sunburst);FusionCharts.addDep(MultiAxisLine);FusionCharts.addDep(MSStepLine);FusionCharts.addDep(DragNode);FusionCharts.addDep(CandleStick);FusionCharts.addDep(BoxAndWhisker2D);FusionCharts.addDep(Sankey);FusionCharts.addDep(HeatMap);FusionCharts.addDep(Radar);FusionCharts.addDep(Chord);FusionCharts.addDep(DragArea)}};