$(function(){
    

    // 柱状图
    function Histogram(ele){
        var dom = document.getElementById(ele);
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        app.title = '坐标轴刻度与标签对齐';

        option = {
            color: ['#2E7EFE'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
    Histogram('Histogram');
    
    Histogram('Histogram3');
    //Histogram('Histogram4');

    // 饼图
    function PieChart(ele){
        var dom = document.getElementById(ele);
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        app.title = '环形图';

        option = {
            tooltip: {
                //show:false,
                //showContent:false, 
                trigger: 'item',
                //backgroundColor:'rgba(255,255,255,0.8)',
                //formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color:['#20C170','#FE962E','#3D6AFF'], 
            // 标题
                title: [{
                    text: '总单数\n499单',
                    top:'middle',
                    left:'center',
                    textStyle:{
                        color: '#000',
                        fontSize:18,
                    }
                }],
            series: [
                {
                    name:'',
                    type:'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    hoverAnimation:false,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter:'{d}%',
                            fontSize:'12'
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    }, 
                    data:[
                        {value:1, name:'受理单数'},
                        {value:1, name:'预约单数'},
                        {value:1, name:'完成单数'} 
                    ]
                }
            ]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
    PieChart('Histogram2');
    PieChart('Histogram4');

    var myChart = echarts.getInstanceByDom(document.getElementById("Histogram")); //通过DOM id获取到echarts实例 
    var myChart2 = echarts.getInstanceByDom(document.getElementById("Histogram2"));
    var myChart3 = echarts.getInstanceByDom(document.getElementById("Histogram3"));
    var myChart4 = echarts.getInstanceByDom(document.getElementById("Histogram4"));
    //根据窗口的大小变动图表 --- 重点
    window.onresize = function(){
        myChart.resize(); 
        myChart2.resize(); 
        myChart3.resize(); 
        myChart4.resize(); 

    }
})