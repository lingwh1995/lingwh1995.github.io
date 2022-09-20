const e=JSON.parse('{"key":"v-871a354c","path":"/blogs/environment/centos/centos7/shardings/centos7-chapter-8.%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%8C%85%E6%90%AD%E5%BB%BAKubernetes.html","title":"\u5728Centos7\u4E0A\u642D\u5EFA\u5F00\u53D1\u73AF\u5883-8.\u4E8C\u8FDB\u5236\u5305\u642D\u5EFAKubernetes","lang":"zh-CN","frontmatter":{"title":"\u5728Centos7\u4E0A\u642D\u5EFA\u5F00\u53D1\u73AF\u5883-8.\u4E8C\u8FDB\u5236\u5305\u642D\u5EFAKubernetes","description":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A\u73AF\u5883\u914D\u7F6E\u6E05\u5355,\u670D\u52A1\u5668\u89C4\u5212\u548CIP\u5730\u5740\u89C4\u5212,\u5B89\u88C5\u524D\u51C6\u5907\u5DE5\u4F5C,\u5B89\u88C5cfssl\u8BC1\u4E66\u751F\u6210\u5DE5\u5177,\u642D\u5EFAetcd\u96C6\u7FA4,\u5B89\u88C5\u914D\u7F6EDocker,\u642D\u5EFAkube-apiserver,\u5728Master Node1\u4E0A\u90E8\u7F72kube-controller-manager,\u90E8\u7F72kube-scheduler,\u4F7F\u7528kubectl\u67E5\u770B\u96C6\u7FA4\u72B6\u6001,\u5728Master Node1\u4E0A\u90E8\u7F72\u7B2C\u4E00\u4E2AWorker Node,\u589E\u52A0Worker Node,\u589E\u52A0Master2\u8282\u70B9,\u90E8\u7F72Nginx+Keepalived\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668,\u90E8\u7F72\u5E38\u89C1\u95EE\u9898,\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B,\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002","headerDepth":4,"isOriginal":true,"category":["\u73AF\u5883\u642D\u5EFA"],"star":false,"tag":["\u4E8C\u8FDB\u5236\u642D\u5EFAk8s\u96C6\u7FA4","docker","k8s\u7F51\u7EDC\u63D2\u4EF6","k8s\u53EF\u89C6\u5316","etcd\u96C6\u7FA4","kube-apiserver","kube-controller-manager","kube-scheduler","kubectl","nginx","keepalive","\u9AD8\u53EF\u7528"],"date":"2020-02-27T00:00:00.000Z","head":[["meta",{"name":"keywords","content":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A\u73AF\u5883\u914D\u7F6E\u6E05\u5355,\u670D\u52A1\u5668\u89C4\u5212\u548CIP\u5730\u5740\u89C4\u5212,\u5B89\u88C5\u524D\u51C6\u5907\u5DE5\u4F5C,\u5B89\u88C5cfssl\u8BC1\u4E66\u751F\u6210\u5DE5\u5177,\u642D\u5EFAetcd\u96C6\u7FA4,\u5B89\u88C5\u914D\u7F6EDocker,\u642D\u5EFAkube-apiserver,\u5728Master Node1\u4E0A\u90E8\u7F72kube-controller-manager,\u90E8\u7F72kube-scheduler,\u4F7F\u7528kubectl\u67E5\u770B\u96C6\u7FA4\u72B6\u6001,\u5728Master Node1\u4E0A\u90E8\u7F72\u7B2C\u4E00\u4E2AWorker Node,\u589E\u52A0Worker Node,\u589E\u52A0Master2\u8282\u70B9,\u90E8\u7F72Nginx+Keepalived\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668,\u90E8\u7F72\u5E38\u89C1\u95EE\u9898,\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B,\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/blogs/environment/centos/centos7/shardings/centos7-chapter-8.%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%8C%85%E6%90%AD%E5%BB%BAKubernetes.html"}],["meta",{"property":"og:site_name","content":"\u6B64\u751F\u631A\u7231\u4E07\u5B9D\u8DEF"}],["meta",{"property":"og:title","content":"\u5728Centos7\u4E0A\u642D\u5EFA\u5F00\u53D1\u73AF\u5883-8.\u4E8C\u8FDB\u5236\u5305\u642D\u5EFAKubernetes"}],["meta",{"property":"og:description","content":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A\u73AF\u5883\u914D\u7F6E\u6E05\u5355,\u670D\u52A1\u5668\u89C4\u5212\u548CIP\u5730\u5740\u89C4\u5212,\u5B89\u88C5\u524D\u51C6\u5907\u5DE5\u4F5C,\u5B89\u88C5cfssl\u8BC1\u4E66\u751F\u6210\u5DE5\u5177,\u642D\u5EFAetcd\u96C6\u7FA4,\u5B89\u88C5\u914D\u7F6EDocker,\u642D\u5EFAkube-apiserver,\u5728Master Node1\u4E0A\u90E8\u7F72kube-controller-manager,\u90E8\u7F72kube-scheduler,\u4F7F\u7528kubectl\u67E5\u770B\u96C6\u7FA4\u72B6\u6001,\u5728Master Node1\u4E0A\u90E8\u7F72\u7B2C\u4E00\u4E2AWorker Node,\u589E\u52A0Worker Node,\u589E\u52A0Master2\u8282\u70B9,\u90E8\u7F72Nginx+Keepalived\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668,\u90E8\u7F72\u5E38\u89C1\u95EE\u9898,\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B,\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-29T02:23:51.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"\u4E8C\u8FDB\u5236\u642D\u5EFAk8s\u96C6\u7FA4"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"k8s\u7F51\u7EDC\u63D2\u4EF6"}],["meta",{"property":"article:tag","content":"k8s\u53EF\u89C6\u5316"}],["meta",{"property":"article:tag","content":"etcd\u96C6\u7FA4"}],["meta",{"property":"article:tag","content":"kube-apiserver"}],["meta",{"property":"article:tag","content":"kube-controller-manager"}],["meta",{"property":"article:tag","content":"kube-scheduler"}],["meta",{"property":"article:tag","content":"kubectl"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:tag","content":"keepalive"}],["meta",{"property":"article:tag","content":"\u9AD8\u53EF\u7528"}],["meta",{"property":"article:published_time","content":"2020-02-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-29T02:23:51.000Z"}]]},"excerpt":"","headers":[{"level":1,"title":"8.\u4E8C\u8FDB\u5236\u5305\u642D\u5EFAKubernetes","slug":"_8-\u4E8C\u8FDB\u5236\u5305\u642D\u5EFAkubernetes","children":[{"level":2,"title":"8.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0","slug":"_8-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0","children":[]},{"level":2,"title":"8.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2","slug":"_8-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2","children":[]},{"level":2,"title":"8.3.\u73AF\u5883\u914D\u7F6E\u6E05\u5355","slug":"_8-3-\u73AF\u5883\u914D\u7F6E\u6E05\u5355","children":[]},{"level":2,"title":"8.4.\u670D\u52A1\u5668\u89C4\u5212\u548CIP\u5730\u5740\u89C4\u5212","slug":"_8-4-\u670D\u52A1\u5668\u89C4\u5212\u548Cip\u5730\u5740\u89C4\u5212","children":[{"level":3,"title":"8.4.1\u670D\u52A1\u5668\u89C4\u5212","slug":"_8-4-1\u670D\u52A1\u5668\u89C4\u5212","children":[]},{"level":3,"title":"8.4.2.IP\u5730\u5740\u89C4\u5212","slug":"_8-4-2-ip\u5730\u5740\u89C4\u5212","children":[]}]},{"level":2,"title":"8.5.\u5B89\u88C5\u524D\u51C6\u5907\u5DE5\u4F5C","slug":"_8-5-\u5B89\u88C5\u524D\u51C6\u5907\u5DE5\u4F5C","children":[{"level":3,"title":"8.5.1\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E","slug":"_8-5-1\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E","children":[]},{"level":3,"title":"8.5.2\u4E0B\u8F7D\u6240\u6709\u7528\u5230\u7684\u8F6F\u4EF6\u5305","slug":"_8-5-2\u4E0B\u8F7D\u6240\u6709\u7528\u5230\u7684\u8F6F\u4EF6\u5305","children":[]}]},{"level":2,"title":"8.6.\u5B89\u88C5cfssl\u8BC1\u4E66\u751F\u6210\u5DE5\u5177","slug":"_8-6-\u5B89\u88C5cfssl\u8BC1\u4E66\u751F\u6210\u5DE5\u5177","children":[]},{"level":2,"title":"8.7.\u642D\u5EFAetcd\u96C6\u7FA4","slug":"_8-7-\u642D\u5EFAetcd\u96C6\u7FA4","children":[{"level":3,"title":"8.7.1\u751F\u6210CA\u8BC1\u4E66\u548Chttps\u8BC1\u4E66","slug":"_8-7-1\u751F\u6210ca\u8BC1\u4E66\u548Chttps\u8BC1\u4E66","children":[]},{"level":3,"title":"8.7.2.\u90E8\u7F72etcd\u96C6\u7FA4","slug":"_8-7-2-\u90E8\u7F72etcd\u96C6\u7FA4","children":[]},{"level":3,"title":"8.7.4.\u62F7\u8D1Detcd\u6240\u9700\u8BC1\u4E66","slug":"_8-7-4-\u62F7\u8D1Detcd\u6240\u9700\u8BC1\u4E66","children":[]},{"level":3,"title":"8.7.5.\u8BA9systemd\u7BA1\u7406etcd","slug":"_8-7-5-\u8BA9systemd\u7BA1\u7406etcd","children":[]},{"level":3,"title":"8.7.6.\u62F7\u8D1Detcd\u5B89\u88C5\u6587\u4EF6\u5230Worker Node","slug":"_8-7-6-\u62F7\u8D1Detcd\u5B89\u88C5\u6587\u4EF6\u5230worker-node","children":[]},{"level":3,"title":"8.7.7.\u542F\u52A8\u4E09\u4E2Aetcd\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F","slug":"_8-7-7-\u542F\u52A8\u4E09\u4E2Aetcd\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F","children":[]}]},{"level":2,"title":"8.8.\u5B89\u88C5\u914D\u7F6EDocker","slug":"_8-8-\u5B89\u88C5\u914D\u7F6Edocker","children":[{"level":3,"title":"8.8.1\u5728Master1\u4E0A\u5B89\u88C5docker","slug":"_8-8-1\u5728master1\u4E0A\u5B89\u88C5docker","children":[]},{"level":3,"title":"8.8.2\u5728\u6240\u6709Worker Node\u4E0A\u5B89\u88C5docker","slug":"_8-8-2\u5728\u6240\u6709worker-node\u4E0A\u5B89\u88C5docker","children":[]},{"level":3,"title":"8.8.3\u542F\u52A8\u4E09\u53F0\u673A\u5668\u4E0A\u7684docker","slug":"_8-8-3\u542F\u52A8\u4E09\u53F0\u673A\u5668\u4E0A\u7684docker","children":[]}]},{"level":2,"title":"8.9.\u642D\u5EFAkube-apiserver","slug":"_8-9-\u642D\u5EFAkube-apiserver","children":[{"level":3,"title":"8.9.1.\u751F\u6210CA\u8BC1\u4E66\u548CHttps\u8BC1\u4E66","slug":"_8-9-1-\u751F\u6210ca\u8BC1\u4E66\u548Chttps\u8BC1\u4E66","children":[]},{"level":3,"title":"8.9.2.\u5728Master Node1\u4E0A\u90E8\u7F72kube-apiserver","slug":"_8-9-2-\u5728master-node1\u4E0A\u90E8\u7F72kube-apiserver","children":[]},{"level":3,"title":"8.9.3.\u62F7\u8D1D\u6240\u9700\u8BC1\u4E66","slug":"_8-9-3-\u62F7\u8D1D\u6240\u9700\u8BC1\u4E66","children":[]},{"level":3,"title":"8.9.4.\u542F\u7528TLS bootstrapping","slug":"_8-9-4-\u542F\u7528tls-bootstrapping","children":[]},{"level":3,"title":"8.9.5.\u8BA9systemd\u7BA1\u7406apiserver","slug":"_8-9-5-\u8BA9systemd\u7BA1\u7406apiserver","children":[]},{"level":3,"title":"8.9.6.\u542F\u52A8kube-apiserver","slug":"_8-9-6-\u542F\u52A8kube-apiserver","children":[]}]},{"level":2,"title":"8.10.\u5728Master Node1\u4E0A\u90E8\u7F72kube-controller-manager","slug":"_8-10-\u5728master-node1\u4E0A\u90E8\u7F72kube-controller-manager","children":[{"level":3,"title":"8.10.1.\u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-controller-manager\u76F8\u5173\u6587\u4EF6\u5230/opt/kubernetes/bin","slug":"_8-10-1-\u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-controller-manager\u76F8\u5173\u6587\u4EF6\u5230-opt-kubernetes-bin","children":[]},{"level":3,"title":"8.10.2.\u751F\u6210\u8BC1\u4E66","slug":"_8-10-2-\u751F\u6210\u8BC1\u4E66","children":[]},{"level":3,"title":"8.10.2.\u521B\u5EFAkube-controller-manager\u914D\u7F6E\u6587\u4EF6","slug":"_8-10-2-\u521B\u5EFAkube-controller-manager\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":3,"title":"8.10.3.\u751F\u6210\u914D\u7F6E\u6587\u4EF6","slug":"_8-10-3-\u751F\u6210\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":3,"title":"8.10.4.\u8BA9systemd\u7BA1\u7406controller-manager","slug":"_8-10-4-\u8BA9systemd\u7BA1\u7406controller-manager","children":[]},{"level":3,"title":"8.10.5.\u542F\u52A8kube-controller-manager","slug":"_8-10-5-\u542F\u52A8kube-controller-manager","children":[]}]},{"level":2,"title":"8.11.\u90E8\u7F72kube-scheduler","slug":"_8-11-\u90E8\u7F72kube-scheduler","children":[{"level":3,"title":"8.10.1 \u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-dcheduler\u76F8\u5173\u6587\u4EF6\u5230/opt/kubernetes/bin","slug":"_8-10-1-\u5207\u6362\u76EE\u5F55\u5E76\u62F7\u8D1Dkube-dcheduler\u76F8\u5173\u6587\u4EF6\u5230-opt-kubernetes-bin","children":[]},{"level":3,"title":"8.11.2.\u751F\u6210\u8BC1\u4E66","slug":"_8-11-2-\u751F\u6210\u8BC1\u4E66","children":[]},{"level":3,"title":"8.11.3.\u521B\u5EFAkube-scheduler.conf\u914D\u7F6E\u6587\u4EF6","slug":"_8-11-3-\u521B\u5EFAkube-scheduler-conf\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":3,"title":"8.11.4.\u751F\u6210kube-scheduler.kubeconfig\u6587\u4EF6","slug":"_8-11-4-\u751F\u6210kube-scheduler-kubeconfig\u6587\u4EF6","children":[]},{"level":3,"title":"8.11.5.\u8BA9systemd\u7BA1\u7406kube-scheduler","slug":"_8-11-5-\u8BA9systemd\u7BA1\u7406kube-scheduler","children":[]},{"level":3,"title":"8.11.6.\u542F\u52A8\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8","slug":"_8-11-6-\u542F\u52A8\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8","children":[]}]},{"level":2,"title":"8.12.\u4F7F\u7528kubectl\u67E5\u770B\u96C6\u7FA4\u72B6\u6001","slug":"_8-12-\u4F7F\u7528kubectl\u67E5\u770B\u96C6\u7FA4\u72B6\u6001","children":[{"level":3,"title":"8.12.1.\u751F\u6210\u6240\u9700\u8BC1\u4E66","slug":"_8-12-1-\u751F\u6210\u6240\u9700\u8BC1\u4E66","children":[]},{"level":3,"title":"8.12.2.\u5728.kube\u6587\u4EF6\u5939\u4E2D\u751F\u6210config\u6587\u4EF6","slug":"_8-12-2-\u5728-kube\u6587\u4EF6\u5939\u4E2D\u751F\u6210config\u6587\u4EF6","children":[]},{"level":3,"title":"8.12.3.\u901A\u8FC7kubectl\u5DE5\u5177\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6","slug":"_8-12-3-\u901A\u8FC7kubectl\u5DE5\u5177\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6","children":[]},{"level":3,"title":"8.12.4.\u6388\u6743kubelet-bootstrap\u7528\u6237\u5141\u8BB8\u8BF7\u6C42\u8BC1\u4E66","slug":"_8-12-4-\u6388\u6743kubelet-bootstrap\u7528\u6237\u5141\u8BB8\u8BF7\u6C42\u8BC1\u4E66","children":[]}]},{"level":2,"title":"8.13.\u5728Master Node1\u4E0A\u90E8\u7F72\u7B2C\u4E00\u4E2AWorker Node","slug":"_8-13-\u5728master-node1\u4E0A\u90E8\u7F72\u7B2C\u4E00\u4E2Aworker-node","children":[{"level":3,"title":"8.13.2.\u5728Master Node1\u90E8\u7F72kubelet","slug":"_8-13-2-\u5728master-node1\u90E8\u7F72kubelet","children":[{"level":4,"title":"8.13.2.1.\u521B\u5EFAkubelet\u914D\u7F6E\u6587\u4EF6","slug":"_8-13-2-1-\u521B\u5EFAkubelet\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":4,"title":"8.13.2.2.\u521B\u5EFAkubelet\u7F16\u6392\u6587\u4EF6","slug":"_8-13-2-2-\u521B\u5EFAkubelet\u7F16\u6392\u6587\u4EF6","children":[]},{"level":4,"title":"8.13.2.3.\u751F\u6210kubelet\u521D\u6B21\u52A0\u5165\u96C6\u7FA4\u5F15\u5BFCkubeconfig\u6587\u4EF6","slug":"_8-13-2-3-\u751F\u6210kubelet\u521D\u6B21\u52A0\u5165\u96C6\u7FA4\u5F15\u5BFCkubeconfig\u6587\u4EF6","children":[]},{"level":4,"title":"8.13.2.4.systemd\u7BA1\u7406kubelet","slug":"_8-13-2-4-systemd\u7BA1\u7406kubelet","children":[]},{"level":4,"title":"8.13.3.5.\u542F\u52A8kubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8","slug":"_8-13-3-5-\u542F\u52A8kubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8","children":[]},{"level":4,"title":"8.13.2.6.\u5141\u8BB8kubelet\u8BC1\u4E66\u7533\u8BF7\u5E76\u52A0\u5165\u96C6\u7FA4","slug":"_8-13-2-6-\u5141\u8BB8kubelet\u8BC1\u4E66\u7533\u8BF7\u5E76\u52A0\u5165\u96C6\u7FA4","children":[]}]},{"level":3,"title":"8.13.3.\u90E8\u7F72kube-proxy","slug":"_8-13-3-\u90E8\u7F72kube-proxy","children":[{"level":4,"title":"8.13.3.1.\u521B\u5EFAkube-proxy\u914D\u7F6E\u6587\u4EF6","slug":"_8-13-3-1-\u521B\u5EFAkube-proxy\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":4,"title":"8.13.3.2.\u914D\u7F6E\u53C2\u6570\u6587\u4EF6","slug":"_8-13-3-2-\u914D\u7F6E\u53C2\u6570\u6587\u4EF6","children":[]},{"level":4,"title":"8.13.3.3.\u751F\u6210kube-proxy\u8BC1\u4E66\u6587\u4EF6","slug":"_8-13-3-3-\u751F\u6210kube-proxy\u8BC1\u4E66\u6587\u4EF6","children":[]},{"level":4,"title":"8.13.3.4.\u751F\u6210kube-proxy.kubeconfig\u6587\u4EF6","slug":"_8-13-3-4-\u751F\u6210kube-proxy-kubeconfig\u6587\u4EF6","children":[]},{"level":4,"title":"8.13.3.5.systemd\u7BA1\u7406kube-proxy","slug":"_8-13-3-5-systemd\u7BA1\u7406kube-proxy","children":[]},{"level":4,"title":"8.12.3.6.\u542F\u52A8kube-proxy\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F","slug":"_8-12-3-6-\u542F\u52A8kube-proxy\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F","children":[]}]},{"level":3,"title":"8.13.4.\u90E8\u7F72\u7F51\u7EDC\u7EC4\u4EF6(Calico)","slug":"_8-13-4-\u90E8\u7F72\u7F51\u7EDC\u7EC4\u4EF6-calico","children":[]},{"level":3,"title":"8.13.5.\u6388\u6743apiserver\u8BBF\u95EEkubelet","slug":"_8-13-5-\u6388\u6743apiserver\u8BBF\u95EEkubelet","children":[]}]},{"level":2,"title":"8.14.\u589E\u52A0Worker Node","slug":"_8-14-\u589E\u52A0worker-node","children":[{"level":3,"title":"8.14.1.\u5728\u6240\u6709Worker Node\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55\u5E76\u62F7\u8D1D\u4E8C\u8FDB\u5236\u6587\u4EF6","slug":"_8-14-1-\u5728\u6240\u6709worker-node\u521B\u5EFA\u5DE5\u4F5C\u76EE\u5F55\u5E76\u62F7\u8D1D\u4E8C\u8FDB\u5236\u6587\u4EF6","children":[]},{"level":3,"title":"8.14.2\u62F7\u8D1DMaster Node1\u4E0A\u90E8\u7F72\u597D\u7684\u6587\u4EF6\u5230Worker Node","slug":"_8-14-2\u62F7\u8D1Dmaster-node1\u4E0A\u90E8\u7F72\u597D\u7684\u6587\u4EF6\u5230worker-node","children":[]},{"level":3,"title":"8.14.3.\u5220\u9664\u6240\u6709Worker Node\u4E2Dkubelet\u8BC1\u4E66\u548Ckubeconfig\u6587\u4EF6","slug":"_8-14-3-\u5220\u9664\u6240\u6709worker-node\u4E2Dkubelet\u8BC1\u4E66\u548Ckubeconfig\u6587\u4EF6","children":[]},{"level":3,"title":"8.14.4. \u4FEE\u6539Worker Node1\u548CWorker Node2\u4E3B\u673A\u540D","slug":"_8-14-4-\u4FEE\u6539worker-node1\u548Cworker-node2\u4E3B\u673A\u540D","children":[]},{"level":3,"title":"8.14.5.\u542F\u52A8Worker Node1\u548CWorker Node2\u4E2Dkubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F","slug":"_8-14-5-\u542F\u52A8worker-node1\u548Cworker-node2\u4E2Dkubelet\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F","children":[]},{"level":3,"title":"8.14.6.\u5728Master1\u4E0A\u540C\u610F\u65B0\u7684Node kubelet\u8BC1\u4E66\u7533\u8BF7","slug":"_8-14-6-\u5728master1\u4E0A\u540C\u610F\u65B0\u7684node-kubelet\u8BC1\u4E66\u7533\u8BF7","children":[]},{"level":3,"title":"8.14.7.\u5728Master1\u4E0A\u90E8\u7F72kubernetes-dashboard","slug":"_8-14-7-\u5728master1\u4E0A\u90E8\u7F72kubernetes-dashboard","children":[]},{"level":3,"title":"8.14.8.\u5728Master1\u4E0A\u90E8\u7F72CoreDNS","slug":"_8-14-8-\u5728master1\u4E0A\u90E8\u7F72coredns","children":[]}]},{"level":2,"title":"8.15.\u589E\u52A0Master2\u8282\u70B9","slug":"_8-15-\u589E\u52A0master2\u8282\u70B9","children":[{"level":3,"title":"8.15.1.Kubernetes\u96C6\u7FA4\u67B6\u6784\u7B80\u4ECB","slug":"_8-15-1-kubernetes\u96C6\u7FA4\u67B6\u6784\u7B80\u4ECB","children":[]},{"level":3,"title":"8.15.2.\u7ED9Master Node2\u5B89\u88C5Docker","slug":"_8-15-2-\u7ED9master-node2\u5B89\u88C5docker","children":[]},{"level":3,"title":"8.15.5.\u7ED9Master Node2\u8282\u70B9\u62F7\u8D1D\u6240\u6709\u9700\u8981\u7684\u8BC1\u4E66","slug":"_8-15-5-\u7ED9master-node2\u8282\u70B9\u62F7\u8D1D\u6240\u6709\u9700\u8981\u7684\u8BC1\u4E66","children":[]},{"level":3,"title":"8.15.6.\u542F\u52A8Master\u6240\u6709\u670D\u52A1\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F","slug":"_8-15-6-\u542F\u52A8master\u6240\u6709\u670D\u52A1\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F","children":[]},{"level":3,"title":"8.15.7.\u5728Master\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6\u72B6\u6001","slug":"_8-15-7-\u5728master\u67E5\u770B\u96C6\u7FA4\u7EC4\u4EF6\u72B6\u6001","children":[]},{"level":3,"title":"8.15.8.\u5BA1\u6279\u6240\u6709Worker  Node\u4E0A\u7684kubelet\u8BC1\u4E66\u7533\u8BF7","slug":"_8-15-8-\u5BA1\u6279\u6240\u6709worker-node\u4E0A\u7684kubelet\u8BC1\u4E66\u7533\u8BF7","children":[]}]},{"level":2,"title":"8.16.\u90E8\u7F72Nginx+Keepalived\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668","slug":"_8-16-\u90E8\u7F72nginx-keepalived\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668","children":[{"level":3,"title":"8.16.1.Nginx\u548CKeepalived\u7B80\u4ECB","slug":"_8-16-1-nginx\u548Ckeepalived\u7B80\u4ECB","children":[]},{"level":3,"title":"8.16.2.\u5728\u4E24\u53F0Master Node\u4E0A\u5B89\u88C5\u8F6F\u4EF6","slug":"_8-16-2-\u5728\u4E24\u53F0master-node\u4E0A\u5B89\u88C5\u8F6F\u4EF6","children":[]},{"level":3,"title":"8.16.3.Nginx\u589E\u52A0Steam\u6A21\u5757","slug":"_8-16-3-nginx\u589E\u52A0steam\u6A21\u5757","children":[{"level":4,"title":"8.16.3.1.\u67E5\u770BNginx\u7248\u672C\u6A21\u5757","slug":"_8-16-3-1-\u67E5\u770Bnginx\u7248\u672C\u6A21\u5757","children":[]},{"level":4,"title":"8.16.3.2.Master1\u548CMaster2\u5B89\u88C5Stream\u6A21\u5757","slug":"_8-16-3-2-master1\u548Cmaster2\u5B89\u88C5stream\u6A21\u5757","children":[]}]},{"level":3,"title":"8.16.4.\u542F\u52A8nginx\u3001keepalived\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F(master1/master2)","slug":"_8-16-4-\u542F\u52A8nginx\u3001keepalived\u5E76\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F-master1-master2","children":[]},{"level":3,"title":"8.16.5.\u67E5\u770Bkeepalived\u5DE5\u4F5C\u72B6\u6001","slug":"_8-16-5-\u67E5\u770Bkeepalived\u5DE5\u4F5C\u72B6\u6001","children":[]},{"level":3,"title":"8.16.6.Nginx+keepalived\u9AD8\u53EF\u7528\u6D4B\u8BD5","slug":"_8-16-6-nginx-keepalived\u9AD8\u53EF\u7528\u6D4B\u8BD5","children":[]},{"level":3,"title":"8.16.7.\u6D4B\u8BD5\u8D1F\u8F7D\u5747\u8861\u5668","slug":"_8-16-7-\u6D4B\u8BD5\u8D1F\u8F7D\u5747\u8861\u5668","children":[]},{"level":3,"title":"8.16.8.\u4FEE\u6539\u6240\u6709\u7684Worker Node\u8FDE\u63A5LB VIP","slug":"_8-16-8-\u4FEE\u6539\u6240\u6709\u7684worker-node\u8FDE\u63A5lb-vip","children":[]}]},{"level":2,"title":"8.17.\u90E8\u7F72\u5E38\u89C1\u95EE\u9898","slug":"_8-17-\u90E8\u7F72\u5E38\u89C1\u95EE\u9898","children":[{"level":3,"title":"8.17.1\u7CFB\u7EDF\u65AD\u7535\u540E,\u67D0\u4E2Aetcd\u8282\u70B9\u65E0\u6CD5\u542F\u52A8","slug":"_8-17-1\u7CFB\u7EDF\u65AD\u7535\u540E-\u67D0\u4E2Aetcd\u8282\u70B9\u65E0\u6CD5\u542F\u52A8","children":[]},{"level":3,"title":"8.17.2 The connection to the server localhost:8080 was refused - did you specify the right host or port?","slug":"_8-17-2-the-connection-to-the-server-localhost-8080-was-refused-did-you-specify-the-right-host-or-port","children":[]}]},{"level":2,"title":"8.18.\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F","slug":"_8-18-\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F","children":[]}]}],"git":{"createdTime":1659560423000,"updatedTime":1661739831000,"contributors":[{"name":"lingwh","email":"LRwq942133","commits":14}]},"readingTime":{"minutes":43.55,"words":13065},"copyright":"\u8457\u4F5C\u6743\u5F52lingwh\u6240\u6709\\n\u57FA\u4E8ECopyright 2021 \xA9 open linux lingwh\u534F\u8BAE\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://github.com/lingwh1995/blogs/environment/centos/centos7/shardings/centos7-chapter-8.%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%8C%85%E6%90%AD%E5%BB%BAKubernetes.html","filePathRelative":"blogs/environment/centos/centos7/shardings/centos7-chapter-8.\u4E8C\u8FDB\u5236\u5305\u642D\u5EFAKubernetes.md","localizedDate":"2020\u5E742\u670826\u65E5"}');export{e as data};
