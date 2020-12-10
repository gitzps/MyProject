<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="network_id" style="height:500px;"></div>
    <div id="eventSpan"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Vis from 'vis'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      nodes: [],

      edges: [],

      // network:null,

      container: null,

      nodesArray: [
        { id: 0, label: '0', group: 0, level: 0 },

        { id: 1, label: '1', group: 0, level: 1 },

        { id: 2, label: '2', group: 0, level: 2 },

        { id: 3, label: '3', group: 1, level: 2 },

        { id: 4, label: '4', group: 1, level: 3 },

        { id: 5, label: '5', group: 1, level: 4 },

        { id: 6, label: '6', group: 2, level: 4 },

        { id: 7, label: '7', group: 2, level: 5 },

        { id: 8, label: '8', group: 2, level: 6 },

        { id: 9, label: '9', group: 2, level: 7 }
      ],

      edgesArray: [
        { from: 0, to: 1, label: 'hahah' },

        { from: 1, to: 2 },

        { from: 2, to: 9 },

        { from: 1, to: 3 },

        { from: 3, to: 4 },

        { from: 4, to: 5 },

        { from: 4, to: 6 },

        { from: 5, to: 7 },

        { from: 6, to: 7 },

        { from: 7, to: 8 },

        { from: 8, to: 9 }
      ],

      options: {},

      data: {}
    }
  },

  methods: {
    init() {
      let this_ = this

      this_.nodes = new Vis.DataSet(this_.nodesArray)

      this_.edges = new Vis.DataSet(this_.edgesArray)

      this_.container = document.getElementById('network_id')

      this_.data = {
        nodes: this_.nodes,

        edges: this_.edges
      }

      this_.options = {
        autoResize: true,

        groups: {
          useDefaultGroups: true,

          myGroupId: {
            /*node options*/
          }
        },

        nodes: {
          shape: 'dot',

          size: 30,

          font: {
            size: 32
          },

          borderWidth: 2
        },

        edges: {
          width: 2,

          smooth: {
            //设置两个节点之前的连线的状态

            enabled: false //默认是true，设置为false之后，两个节点之前的连线始终为直线，不会出现贝塞尔曲线
          }
        },

        physics: {
          //计算节点之前斥力，进行自动排列的属性

          enabled: true, //默认是true，设置为false后，节点将不会自动改变，拖动谁谁动。不影响其他的节点

          barnesHut: {
            gravitationalConstant: -4000,

            centralGravity: 0.3,

            springLength: 120,

            springConstant: 0.04,

            damping: 0.09,

            avoidOverlap: 0
          }
        },

        interaction: {
          hover: true,

          dragNodes: true, //是否能拖动节点

          dragView: true, //是否能拖动画布

          hover: true, //鼠标移过后加粗该节点和连接线

          multiselect: true, //按 ctrl 多选

          selectable: true, //是否可以点击选择

          selectConnectedEdges: true, //选择节点后是否显示连接线

          hoverConnectedEdges: true, //鼠标滑动节点后是否显示连接线

          zoomView: true //是否能缩放画布
        },
        layout: {
          hierarchical: {
            direction: 'LR'
          }
        },
        manipulation: {
          //该属性表示可以编辑，出现编辑操作按钮

          enabled: true
        }
      }

      this_.network = new Vis.Network(
        this_.container,
        this_.data,
        this_.options
      )
    },

    resetAllNodes() {
      let this_ = this

      this_.nodes.clear()

      this_.edges.clear()

      this_.nodes.add(this_.nodesArray)

      this_.edges.add(this_.edgesArray)

      this_.data = {
        nodes: this_.nodes,

        edges: this_.edges
      }

      this_.network = new Vis.Network(
        this_.container,
        this_.data,
        this_.options
      )
    },

    resetAllNodesStabilize() {
      let this_ = this

      this_.resetAllNodes()

      this_.network.stabilize()
    }
  },

  mounted() {
    this.init()

    this.network.on('click', function(params) {
      params.event = '[original event]'

      document.getElementById('eventSpan').innerHTML =
        '<h2>Click event:</h2>' + JSON.stringify(params, null, 4)

      console.log(
        'click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM)
      )
    })
  }
}
</script>
