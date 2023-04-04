<div id="content_views" class="markdown_views prism-atom-one-light">
                    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                        <path stroke-linecap="round" d="M5,0 0,2.5 5,5z" id="raphael-marker-block" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                    </svg>
                    <h1><a name="t0"></a><a id="_0"></a>操作系统</h1> 
<h2><a name="t1"></a><a id="_2"></a>操作系统的概念、功能和目标</h2> 
<h3><a name="t2"></a><a id="_4"></a>定义</h3> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/cb2656d78d0456dadf865a40ccc9a972.png#pic_center" alt="在这里插入图片描述"></p> 
<p>操作系统是指控制和管理整个计算机系统的硬件和软件资源，并合理地组织调度计算机的工作和资源的分配，以提供给用户和其他软件方便的接口和环境，它是计算机系统中最基本的系统软件。</p> 
<h3><a name="t3"></a><a id="_11"></a>功能和目标</h3> 
<p>补充：进程是一个程序的执行过程。执行前需要将该程序放到<a href="https://so.csdn.net/so/search?q=%E5%86%85%E5%AD%98&amp;spm=1001.2101.3001.7020" target="_blank" class="hl hl-1" data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.7020&quot;,&quot;dest&quot;:&quot;https://so.csdn.net/so/search?q=%E5%86%85%E5%AD%98&amp;spm=1001.2101.3001.7020&quot;,&quot;extra&quot;:&quot;{\&quot;searchword\&quot;:\&quot;内存\&quot;}&quot;}" data-tit="内存" data-pretit="内存">内存</a>中，才可以被CPU处理。</p> 
<p><strong>作为系统资源的管理者，操作系统的功能和目标</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/50e4093b6ea97a7ab69ebb0d9ceccfd9.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>作为用户和计算机硬件之间的接口-操作系统的功能和目标</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/829246dfcea5ec26d94deb27b9450a05.png#pic_center" alt="在这里插入图片描述"></p> 
<p>命令接口：允许用户直接使用（联机命令接口又称为交互式命令接口，<a href="https://so.csdn.net/so/search?q=%E8%84%B1%E6%9C%BA&amp;spm=1001.2101.3001.7020" target="_blank" class="hl hl-1" data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.7020&quot;,&quot;dest&quot;:&quot;https://so.csdn.net/so/search?q=%E8%84%B1%E6%9C%BA&amp;spm=1001.2101.3001.7020&quot;,&quot;extra&quot;:&quot;{\&quot;searchword\&quot;:\&quot;脱机\&quot;}&quot;}" data-tit="脱机" data-pretit="脱机">脱机</a>命令接口又称为批处理命令接口）</p> 
<p>程序接口：允许用户通过程序间接使用（系统调用=广义指令）</p> 
<p>GUI：现代操作系统中最流行的图形用户接口</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/e1110c06fa137c3b4a8d61d85926df8d.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>作为最接近硬件的层次-操作系统的功能和目标</strong></p> 
<p>需要提供的功能和目标：实现对硬件机器的扩展</p> 
<p>没有任何软件支持的计算机成为裸机，在裸机上安装的操作系统可以提供资源管理功能和方便用户的服务功能，将裸机改造成功能更强、使用更方便的机器</p> 
<p>通常把覆盖了软件的机器成为扩充机器或虚拟机。</p> 
<p>类比</p> 
<p>硬件：锤子、锯子、木头</p> 
<p>操作系统：优秀的工匠</p> 
<p>通过锤子锯子木头和工匠打造出来房屋。</p> 
<h3><a name="t4"></a><a id="_52"></a>操作系统的四个特征</h3> 
<p><strong>并发、共享、虚拟、异步</strong></p> 
<p>其中<strong>并发和共享是最基本的两个特征</strong>，二者互为存在条件。没有并发和共享就谈不上虚拟和异步</p> 
<p><strong>并发</strong></p> 
<p>并发是指两个或多个事件在同一时间间隔内发生。这些事件<strong>宏观上是同时发生</strong>的，但是<strong>微观上是交替发生</strong>的。</p> 
<p>常考易混概念：并行：指两个或多个事件在同一时刻<strong>同时发生。</strong></p> 
<p><strong>操作系统的并发性</strong>是指：计算机系统中同时存在着多个运行着的程序。</p> 
<p>一个单核处理器(CPU)同一时刻只能执行一个程序，因此操作系统会负责协调多个程序交替执行（这些程序微观上是交替执行的。但是宏观上看起来像是在同一时刻运行。）<strong>操作系统和程序并发是一起诞生的</strong></p> 
<p><strong>共享</strong></p> 
<p>共享即资源共享，是指系统中的资源可供内存中多个并发执行的进程共同使用。</p> 
<p>两种资源共享方式：</p> 
<p>1.<strong>互斥共享方式</strong>（系统中的某些资源虽然可以提供给多个进程使用，但一个时间段内只允许一个进程访问该资源）</p> 
<p>2.<strong>同时共享方式</strong>（系统中的某些资源，允许一个时间段内由多个进程<strong>同时</strong>对他们进行访问）这里的同时也分为宏观上和微观上</p> 
<p>互斥共享方式：如qq和微信使用摄像头，同一时间只有一个可以软件可以使用。</p> 
<p>同时共享方式：使用qq和微信同时对一个文件进行发送。宏观上看是同时读取并发送文件的，说明两个进程都在访问硬盘资源，从中读取数据。微观上看，两个进程是交替着访问硬盘的。</p> 
<p><strong>并发与共享的关系</strong></p> 
<p>如果失去并发性，则系统中只有一个程序正在运行，则共享性会失去存在的意义。</p> 
<p>如果失去共享性，则qq和微信不能同时访问硬盘资源， 就无法实现同时发送文件，也就无法并发</p> 
<p><strong>虚拟</strong></p> 
<p>虚拟是指把一个物理上的实体变为若干个逻辑上的对应物。物理实体（前者）是实际存在的，而逻辑上对应物（后者）是用户感受到的。</p> 
<p>虚拟技术：</p> 
<p>1.空分复用技术（如虚拟存储器技术）</p> 
<p>2.时分复用技术（如虚拟处理器）</p> 
<p><strong>异步</strong></p> 
<p>异步是指，在多道程序环境下，允许多个程序并发执行，但是由于资源有限，进程的执行不是一贯到底的。而是走走停停，以不可预知的速度向前推进，这就是进程的异步性。</p> 
<p>显然，如果失去了并发性，则系统只能串行地处理各个进程，每个进程的执行会一贯到底。只有系统拥有并发性，才可能导致异步性。</p> 
<h3><a name="t5"></a><a id="_104"></a>操作系统的发展与分类</h3> 
<p><strong>手工操作阶段</strong></p> 
<p>缺点：用户独占全机，人机速度矛盾导致资源利用率极低。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/d50ce9d45b21111bed26a1bdaec29ed0.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>批处理阶段-单道批处理系统</strong></p> 
<p>引入脱机输入、输出技术（用磁带完成），并监督程序负责控制作业的输入和输出。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/f7556e99db0f8d6a705e964af6ab81cb.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>批处理阶段-多道批处理系统</strong></p> 
<p>主要优点：多道程序并发执行，共享计算机资源。资源利用率大幅提升，CPU和其他资源保持“忙碌状态”，系统的吞吐量增大。</p> 
<p>主要缺点：用户响应时间长，没有人机交互功能（用户提交自己的作业后只能等待计算机处理完成，中间不能控制自己的作业执行）</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/cace27cf05c169bf08fdf1764647b905.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>为何多批道处理系统能使资源利用率大幅提升</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/5d27cf984560a3cd4ca5faff2675e43e.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>分时操作系统</strong></p> 
<p>计算机以时间片为单位轮流为各个用户/作业服务，各个用户可以通过终端与计算机进行交互。</p> 
<p>主要优点：用户请求可以被即时响应，解决了人机交互问题。允许多个用户同时使用一台计算机，并且用户对计算机的操作相互独立，感受不到别人的存在。</p> 
<p>主要缺点：不能优先处理一些紧急任务，操作系统对各个用户/作业都是完全公平的，循环地为每个用户/作业服务一个时间片。不能区分任务的紧急性。</p> 
<p><strong>实时操作系统</strong></p> 
<p>主要优点：能够优先响应一些紧急任务，某些紧急任务不需要时间片排队。</p> 
<p>在实时操作系统的控制下，计算机系统接受到外部信号后及时处理，并且要在严格的时限内处理完事件。实时操作系统的特点是及时性和可靠性。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/3264779bb8f6e521eae32a4b87347125.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>其他几种操作系统</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/3c3bf92242b64306ce49cee649f9adf2.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>总结</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/c2145f0f491a4bfde9ac4700c18a7081.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t6"></a><a id="_161"></a>操作系统的运行机制体系结构</h3> 
<p>预备知识：</p> 
<p><strong>什么是指令？</strong></p> 
<p>指令就是处理器(CPU)能识别、执行的最基本命令。比如：加法指令就是让CPU进行加法运算。</p> 
<p>指令分为：特权指令（可能产生恶意破坏|危险：如内存清零）和非特权指令（人畜无害）</p> 
<p><strong>对应了两种处理器状态</strong>（用程序状态字寄存器(PSW)中的某标志位来标识当前处理器出于什么状态）：</p> 
<p>1.用户态（目态）（只可以处理非特权指令）</p> 
<p>2.核心态（管态）（特权指令和非特权指令都可以执行）</p> 
<p><strong>两种程序：</strong></p> 
<p>1.内核程序：系统的管理者，既可以执行特权指令又可以执行非特权指令，运行在核心态</p> 
<p>2.应用程序：为了保证系统能安全运行，普通应用程序只能执行非特权指令，运行在用户态。</p> 
<p><strong>操作系统中哪些功能应该由内核程序实现呢？</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/304f1e1a49d872432b099efe2b4ce60d.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>内核</strong></p> 
<p>内核是计算机上配置的<strong>底层软件</strong>，是操作系统最基本最核心的部分。实现操作系统内核功能的那些程序就是内核程序。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/4929d0855e1fba32f79c094fe1adf547.png#pic_center" alt="在这里插入图片描述"></p> 
<p>大内核与微内核</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/5c36adb5a85b172b938b0de16563a010.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/5d7e3ec86362dae3a6966e42c4541388.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t7"></a><a id="_203"></a>中断和异常</h3> 
<p>引入中断机制，实现了多道程序并发执行。</p> 
<p>本质：发生中断意味着需要操作系统的介入，开展管理工作。</p> 
<p>当中断发生时，CPU立即进入核心态</p> 
<p>当中断发生后，当前运行的进程暂停运行，并由操作系统内核对中断进行处理。</p> 
<p>对于不同的中断信号，会进行不同的操作</p> 
<p><strong>发生了中断就意味着需要操作系统的介入</strong>，开展管理工作。由于操作系统的管理工作（比如进程切换、分配I/O设备等）需要使用特权指令，因此CPU要从用户态转换为核心态，使操作系统获得计算机的控制权。有了中断才可以实现多道程序并发执行。</p> 
<p><strong>用户态切换到核心态是由中断实现的（唯一途径）</strong></p> 
<p>核心态到用户态的切换是通过执行一个特权指令，将程序状态字(PSW)的标志位设置为“用户态”</p> 
<p><strong>中断的分类</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/ddac3e9805b5bc0b7f9b924d593ab2d5.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>外中断处理过程</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/13de8eeefa9c3c9cb551efea27ee2845.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t8"></a><a id="_231"></a>系统调用</h3> 
<p>什么是系统调用？有何作用？</p> 
<p>操作系统作为用户和计算机硬件之间的接口，需要向上提供一些简单易用的服务，主要包括命令接口和程序接口。其中，程序接口由一组系统调用组成。</p> 
<p>应用程序通过系统调用请求操作系统的服务。系统中的各种共享资源都由操作系统统一掌管，因此在用户程序中，凡是与资源有关的操作（如存储分配、I\O操作、文件管理等），都必须通过系统调用的方式向操作系统提出服务请求，由操作系统代为完成。这样可以保证系统的<strong>安全性和稳定性</strong>，防止用户进行非法操作。</p> 
<p><strong>系统调用按功能分类</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/48d426541fb6eb3ebc55ed7b4d344db4.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>系统调用在核心态下完成！</strong></p> 
<p><strong>系统调用和库函数的区别</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/ade6bf1b6667638bcf1a3e02d073416c.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>系统调用背后的过程</strong></p> 
<p>传递系统调用参数–&gt;执行陷入指令(用户态)，引发一个内中断–&gt;执行系统调用响应服务程序(核心态)–&gt;返回用户程序</p> 
<p><strong>注意：陷入指令是唯一一个只能在用户态执行，而不可在核心态执行的命令</strong></p> 
<p>系统调用发生在用户态但是对系统调用的处理发生在核心态</p> 
<h2><a name="t9"></a><a id="_259"></a>进程</h2> 
<p>程序：就是一个指令序列</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/a6b43b2307290194a0c5366aaf07f95e.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t10"></a><a id="_266"></a><strong>进程的定义</strong></h3> 
<p>程序段、数据段、PCB三部分组成了进程实体（进程映像）。一般情况下，我们把进程实体就简称为进程。例如，所谓创建进程，实质上就是创建进程实体上的PCB；而撤销进程就是撤销进程实体中的PCB。</p> 
<p><strong>注意：PCB是进程存在的唯一标志！</strong></p> 
<p>引入进程实体的概念后，可把进程定义为：</p> 
<p>进程是进程实体的运行过程，是系统进行资源分配和调度的一个独立单位。</p> 
<p>注：严格来说，进程实体和进程并不一样，进程实体是静态的，进程则是动态的，不过除非题目专门考察二者的区别，否则可以认为进程实体就是进程。因此我们可以说“进程是由程序段、数据段、PCB三部分组成的。”</p> 
<h3><a name="t11"></a><a id="_278"></a><strong>进程的组成</strong></h3> 
<p>进程（进程实体）由程序段、数据段、PCB三部分组成。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/4cad52df5ae2a842d4a8d08987d24370.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>PCB的组成</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/6cf8b21990dbbcb020dca1ada050342d.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t12"></a><a id="_290"></a><strong>进程的组织</strong></h3> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/9c80a729316eaaf935b0f19ce3338418.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>链接方式</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/ddef0a609f3747a5bb1cbf314ea3c4e5.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>索引方式</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/fd3e5be033a948b83076c8e294588d8e.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t13"></a><a id="_305"></a>进程的特征</h3> 
<ol><li>动态性：进程是程序的一次执行过程，是动态地产生、变化和消亡的（最基本的特性）</li><li>并发性：内存中有多个进程实体，各进程可并发执行</li><li>独立性：进程是能独立运行、独立获取资源、独立接收调度的基本单位（进程是资源分配、接受调度的基本单位）</li><li>异步性：各进程按各自独立的、不可预知的速度向前推进，操作系统要提供“进程同步机制”来解决异步问题（异步性会导致并发程序执行的不确定性）</li><li>结构性：每个进程都会配置一个PCB,结构上看，进程由程序段、数据段、PCB三部分组成</li></ol> 
<h2><a name="t14"></a><a id="_313"></a>进程的状态与转换</h2> 
<p><strong>进程的三种基本状态</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/9ad3a1843e909116166b15c127fe2bed.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>另外两种状态</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/08d8a35eb1832ab4139d937112a642d6.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>进程状态的转换</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/f90935172c6fc3dec4ae560021de1d63.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t15"></a><a id="_330"></a>进程控制</h3> 
<p><strong>什么是进程控制？</strong></p> 
<p>进程控制的主要功能是对系统中的所有进程实施有效的管理，它具有创建新进程、撤销已有进程、实现进程状态转换等功能。</p> 
<p><strong>如何实现进程控制？</strong></p> 
<p>用原语实现进程控制，原语的特点是执行期间不允许中断，只能一气呵成。这种不可以被中断的操作即原子操作</p> 
<p>原语采用了“关中断指令”和“开中断指令”实现。显然关/开中断指令的权限很大，所以是只允许在核心态下执行的特权命令。</p> 
<p><strong>创建原语</strong></p> 
<ul><li>申请空白PCB</li><li>为新进程分配所需资源</li><li>初始化PCB</li><li>将PCB插入就绪队列</li></ul> 
<p><strong>引起进程创建的事件</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/990406bfcbeee441e20b144cef39a01c.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>进程的终止</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/7646821bdf72d31b75fd682c620782b6.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>进程的阻塞和唤醒</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/5502ea42265e181f1d3e9e3dd7324db7.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>进程的切换</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/6faba76ad3426c6ab878b39ee9f6cff8.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t16"></a><a id="_369"></a>进程通信</h3> 
<p><strong>什么是进程通信？</strong></p> 
<p>是指进程之间的信息交换，进程是分配系统资源的单位（包括内存地址空间），因此各进程拥有的内存地址空间相互独立。</p> 
<p>为了保证安全，一个进程不能直接访问另外一个进程的地址空间。但是进程之间的信息交换又是必须实现的，为了保证进程间的安全通信，操作系统提供了一些方法。</p> 
<p><strong>共享存储</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/0481b1ad30c25e1c864044c4000f05bc.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>管道通信</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/d5a836b2f488f7ea1fd8b029fc8e74fa.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>消息传递</strong></p> 
<p>进程间的数据交换以格式化的消息为单位，进程通过操作系统提供的“发送消息/接收消息”两个原语进行数据交换。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/aa6788a7e5794445eb5492ed70c5395f.png#pic_center" alt="在这里插入图片描述"></p> 
<h2><a name="t17"></a><a id="_394"></a><strong>线程的概念和多线程模型</strong></h2> 
<p><strong>什么是线程？为什么要进入线程</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/9076af2d60f3aec6ae0c1a817a994c46.png#pic_center" alt="在这里插入图片描述"></p> 
<p>可以把线程理解为一种“轻量级的进程”，线程是一个基本的CPU执行单元，也是程序执行流的最小单位。</p> 
<p>引入线程之后，不仅是进程之间可以并发，进程之间的各线程之间也可以并发，从而进一步提升了系统的并发度，使得一个进程内可以并发处理各种任务。</p> 
<p><strong>引入线程机制后，有什么变化？？</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/322644869b2c8ff6509ab134f1652cec.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t18"></a><a id="_410"></a><strong>线程的属性</strong></h3> 
<ul><li>线程是处理机调度的单位</li><li>多CPU计算机中，各个线程可占用不同的CPU</li><li>每个线程都有一个线程ID，线程控制块(TCB)</li><li>线程也有就绪、阻塞、运行三种基本状态</li><li>线程几乎不拥有系统资源</li><li>同一进程的不同线程之间可以共享进程的资源</li><li>由于共享内存地址空间，同一进程中的线程间通信甚至不需要系统干预</li><li>同一进程的线程切换，不会引起进程切换</li><li>不同进程的线程切换会引起进程切换</li><li>切换同进程内的线程，系统开销很小</li><li>切换进程系统开销很大</li></ul> 
<h3><a name="t19"></a><a id="_424"></a><strong>线程的实现方式</strong></h3> 
<p><strong>用户级线程(ULT)</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/dfd82639f29f86fceaf4808638b97284.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>内核级线程（KLT）</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/92f84f8122f0877fdf127bad88c0c5aa.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>操作系统只看得见内核级线程，因此只有内核级线程才是处理机分配的单位！</strong></p> 
<h3><a name="t20"></a><a id="_438"></a><strong>多线程模型</strong></h3> 
<p>在同时支持用户级线程和内核级线程的系统中，由几个用户级线程映射到几个内核级线程的问题引出了“多线程模型”</p> 
<p><strong>多对一模型</strong>：多个用户及线程映射到一个内核级线程。每个用户进程只对应一个内核级线程。</p> 
<p>优点：用户级线程的切换在用户空间即可完成，不需要切换到核心态，线程管理的系统开销小，效率高。</p> 
<p>缺点：当一个用户级线程被阻塞后，整个进程都会被阻塞，并发度不高。多个线程不可以在多核处理机上并行运行·。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/54e1f2c6412a7020ede62eafa79c1354.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>一对一模型</strong>：一个用户级线程映射到一个内核级线程。每个用户进程有与用户级线程相同数量的内核级线程</p> 
<p>优点：当一个线程被阻塞后，别的线程还可以继续执行，并发能力强。多线程可在多核处理机上并行运行。</p> 
<p>缺点：一个用户进程会占用多个内核级线程，线程切换由操作系统内核完成，需要切换到核心态，因此线程管理成本高开销大。</p> 
<p><strong>多对多模型</strong>：在同时支持用户级线程和内核级线程的系统中，由几个用户级线程映射到几个内核级线程的问题引发了“多对多模型”</p> 
<p>n用户级线程映射到m个内核级线程（n&gt;m）。每个用户进程对应m个内核级线程。</p> 
<h2><a name="t21"></a><a id="_461"></a>处理机调度</h2> 
<h3><a name="t22"></a><a id="_463"></a>处理机调度的概念和层次</h3> 
<p>当有一堆任务要处理，但是由于资源有限，这些事情没有办法同时处理。这就需要确定某种规则来决定处理这些任务的顺序，这就是调度研究的问题。</p> 
<p>在多道程序程序中，进程的数量往往是多于处理机个数的，这样不可能同时并发地处理各个进程。处理机调度，就是从就绪队列中按照一定的算法选择一个进程并将处理机分配给它运行，以实现进程的并发执行。</p> 
<p><strong>调度的三个层次</strong></p> 
<p><strong>高级调度</strong></p> 
<p>由于内存空间有限，有时无法将用户提交的作业全部放入内存，因此就需要确定某种规则来决定将作业调入内存的顺序。</p> 
<p><strong>高级调度(作业调度)<strong>按</strong>一定的原则</strong>从外存上处于后备队列的作业中挑选一个(或多个)作业，给他们分配内存等必要资源，并建立<strong>相应的进程(建立PCB)</strong> ，以使它(们)获得竞争处理机的权利。</p> 
<p>高级调度是<strong>辅存(外存)与内存之间</strong>的调度。每个作业只调入一次，调出一次。作业调入时会建立相应的PCB，作业调出时才撤销PCB。高级调度主要是指<strong>调入的问题</strong>，因为只有调入的时机需要操作系统来确定，但调出的时机必然是作业运行结束才调出。</p> 
<p><strong>中级调度</strong></p> 
<p>引入了虚拟存储技术之后，可将暂时不能运行的进程<strong>调至外存等待</strong>。等它重新具备了运行条件且内存又稍有空闲时，再重新调入内存。这么做的目的是为了<strong>提高内存利用率</strong>和<strong>系统吞吐量</strong>。</p> 
<p>暂时调到外存等待的进程状态为<strong>挂起状态</strong>。值得注意的是，<strong>PCB并不会一起调到外存， 而是会常驻内存</strong>。PCB中会记录进程数据在外存中的存放位置，进程状态等信息，操作系统通过内存中的PCB来保持对各个进程的监控、管理。被挂起的进程PCB会被放到的挂起队列中。</p> 
<p>中级调度(内存调度)，就是要决定将哪个处于挂起状态的进程重新调入内存。</p> 
<p>一个进程可能会被多次调出、调入内存，因此<strong>中级调度发生的频率要比高级调度更高</strong>。</p> 
<p>扩展：进程的挂起状态和七状态模型</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/ce4548b54e2b239be7df946ad06d3233.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>低级调度</strong></p> 
<p><strong>低级调度(进程调度)</strong>，其主要任务是按照某种方法和策略从就绪队列中选取一个进程，将处理机分配给它。<br> 进程调度是操作系统中最基本的一种调度，在一般的操作系统中都必须配置进程调度。进程调度的频率很高，一般几十毫秒一次。</p> 
<p><strong>总结</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/cd1ba8a7f1ffc7a142d02724bbe9a14a.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t23"></a><a id="_504"></a><strong>进程调度的时机</strong></h3> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/44a7a52299714b5fb6deb3aa43a2e26e.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>进程调度的方式</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/74ea1086ecbbe9b3f9e707ecbe39701a.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>进程的切换与过程</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/4fd7e9fd24dc8af4ae29dc2c5caa5664.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t24"></a><a id="_519"></a><strong>调度算法的评价指标</strong></h3> 
<p><strong>CPU利用率</strong>：忙碌时间/总时间</p> 
<p><strong>系统吞吐量</strong>：单位时间内完成作业的数量</p> 
<p><strong>周转时间</strong>（个人更在乎）：作业被提交给系统开始，到作业完成为止的这段时间间隔</p> 
<p>它包括四个部分:作业在外存后备队列.上等待作业调度( 高级调度)的时间、进程在就绪队列上等待进程调度(低级调度)的时间、进程在CPU上执行的时间、进程等待I/O操作完成的时间。后三项在一个作业的整个处理过程中，可能发生多次。</p> 
<p><strong>平均周转时间</strong>（操作系统更在乎）：各作业周转时间/作业数量</p> 
<p><strong>带权周转时间</strong>：（作业完成时间-作业提交时间）/作业实际运行的时间</p> 
<p><strong>平均带权周转时间</strong>：各作业带权周转时间之和/作业量</p> 
<p><strong>等待时间</strong>：指进程/作业出于等待处理机状态时间之和，等待时间越长用户满意度越低。</p> 
<p>一个作业总共需要被CPU服务多久，被I/O设备服务多久一般是确定不变的，因此调度算法其实只会影响作业/进程的等待时间。</p> 
<p><strong>响应时间</strong>：从用户提交请求到首次产生响应所用的时间</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/df6a89682004914227951257c6e7345b.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t25"></a><a id="_546"></a>调度算法</h3> 
<p><strong>先来先服务(FCFS)</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/7f69449b3809e2f42f090e450771c0cb.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/e43f3c3b219c6119492bcd45396cff3d.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>最短作业优先(SJF)</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/b83455c72c5272bffdb00800b9003bf6.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>最高响应比优先(HRRN)</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/b6b38d0661af8f2154baa3c429199fad.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/ac06947ef8064ec8ddb8f82ff8a8c491.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>批处理系统处理调度算法</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/c86e50cf1f430ce8e400e9dd20a0c6f1.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t26"></a><a id="_576"></a><strong>调度算法</strong></h3> 
<p><strong>时间片轮转(RR)</strong></p> 
<p>如果时间片<strong>太大</strong>，使得每个进程都可以在一个时间片内就完成，则时间片轮转调度算法退化为<strong>先来先服务调度算法</strong>，并且会增大进程响应时间，因此<strong>时间片不能太大</strong>。</p> 
<p>另一方面，进程调度、切换是有时间代价的(保存、恢复运行环境)，因此如果时间片太小，<strong>会导致进程切换过于频繁</strong>，系统会花大量的时间来处理进程切换，从而导致实际用于进程执行的时间比例减少。<strong>可见时间片也不能太小</strong>。</p> 
<p>一般来说，设计时间片时让切换进程的开销占比不超过1%</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/b5eda0e9e50391b6cee187e7dd153cfb.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>优先级调度</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/7000e1a77ada2dc506aac51a7e33c76c.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>多级反馈队列</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/a490c0eecbcc8580bf72cd5ffeac77c5.png#pic_center" alt="在这里插入图片描述"></p> 
<p>总结</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/b39befef15c36b53ec485bf9ba7affef.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t27"></a><a id="_604"></a>进程同步和进程互斥</h3> 
<p><strong>进程同步</strong></p> 
<p>同步亦称<strong>直接制约关系</strong>，它是指为完成某种任务而建立的两个或多个进程，这些进程因为需要在某些位置上协调它们的工作次序而产生的制约关系。进程间的直接制约关系就是源于它们之间的相互合作。</p> 
<p><strong>进程互斥</strong></p> 
<p>我们把一个时间段内只允许一个进程使用的资源称为<strong>临界资源</strong>。许多物理设备(比如摄像头、打印机)都属于临界资源。此外还有许多变量、数据、内存缓冲区等都属于临界资源。</p> 
<p>对临界资源的访问，必须<strong>互斥地进行</strong>。互斥，亦称间接制约关系。进程互斥指当一个进程访问某临界资源时，另一个想要访问该临界资源的进程必须等待。当前访问临界资源的进程访问结束，释放该资源之后，另一个进程才能去访问临界资源。</p> 
<p><strong>对临界资源的互斥访问可以在逻辑上分为以下四个部分：</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/0ad81f82f981cc3de32d094d5c7f9c87.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>为了实现对临界资源的互斥访问，同时保证系统整体性能，需要遵循以下原则</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/8aff4308d771c7852b1b206904785ca8.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t28"></a><a id="_626"></a>进程互斥的软件实现方法</h3> 
<p><strong>单标志法</strong></p> 
<p>算法思想:两个进程在访问完临界区后会把使用临界区的权限转交给另一个进程。也就是说每个进程进入临界区的权限只能被另一个进程赋予。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/a232b8c19682809e18c960aff9bb0045.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>双标志先检查法</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/7586fb13e0b092cbf8fc44b714f38d6d.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>双标志后检查法</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/89bc62912fb852e3bb75b250eae77381.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>Peterson算法</strong></p> 
<hr> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/27043e0522489390e8f8ad08ec09964e.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t29"></a><a id="_652"></a>进程互斥的硬件实现方法</h3> 
<p><strong>中断屏蔽方法</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/6c125f4482e6104ccddb19b3e2378253.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>TestAndSet（TS指令/TSL指令）</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/ecdb5575e8a63d713f3ec19101d2f56e.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>Swap指令（XCHG指令）</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/c19e594cd4a80a6beaf3321efa7678f6.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t30"></a><a id="_669"></a>信号量机制</h3> 
<p><strong>信号量</strong>其实就是一个变量(可以是一个整数，也可以是更复杂的记录型变量)，可以用一个信号量来表示系统中某种资源的数量，比如:系统中只有一台打印机，就可以设置一个初值为1的信号量。</p> 
<p><strong>原语</strong>是一种特殊的程序段，其执行只能<strong>一气呵成，不可被中断</strong>。原语是由<strong>关中断/开中断指令</strong>实现的。软件解决方案的主要问题是由“进入区的各种操作无法一气呵成”，因此如果能把进入区、退，出区的操作都用“原语”实现，使这些操作能“一气呵成”就能避免问题。</p> 
<p><strong>一对原语</strong>:wait(S)原语和signal(S)原语，可以把原语理解为我们自己写的函数，函数名分别为wait和signal,括号里的信号量S其实就是函数调用时传入的一个参数。wait、signal原语常简称为<strong>P、V操作</strong>(来自荷兰语proberen和verhogen)。因此，做题的时候常把wait(S)、signal(S) 两个操作分别写为P(S)、V(S)。</p> 
<p><strong>整型信号量</strong></p> 
<p>用一个整数型的变量作为信号量，用来表示系统中某种资源的数量。（与普通整数变量的区别，对信号量的操作只有三种，即初始化，P操作，V操作）</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/ed84b6f87d527edad7d7a741afae7290.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>记录型信号量</strong></p> 
<p>整型信号量的缺陷是存在<strong>忙等</strong>问题，因此人们又提出了“记录型信号量”，即用记录型数据结构表示的信号量。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/aabcfa9a19a5ffd472b2d85316abcc8f.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/b714820c4127a78efd9bf57311267560.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t31"></a><a id="_694"></a><strong>用信号量机制实现进程互斥、同步、前驱关系</strong></h3> 
<p><strong>用信号量机制实现进程互斥</strong></p> 
<p>1.分析并发进程的关键活动，划分临界区（如：对临界资源打印机的访问就应该放在临界区）</p> 
<p>2.设置互斥信号量mutex，初值为1</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/69bfdf1fc9d7cc5392ed41d05b2a63d8.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>用信号量机制实现进程同步</strong></p> 
<p>进程同步：要让各并发进程按要求有序地推进。</p> 
<p>用信号量机制实现进程同步：</p> 
<p>1.分析什么地方需要实现“同步关系”，即必须保证“一前一后“执行的两个操作（或两句代码）</p> 
<p>2.设置同步信号量S，初始为0。</p> 
<p>3.在”前操作“之后执行一个V(S)</p> 
<p>4.在”后操作“之前执行一个P(S)</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/d1fafa96d9164540671d9ce26fb84128.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>信号量机制实现前驱关系</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/09efdea88b2f7a5ad43b39735a3cfc3d.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t32"></a><a id="_727"></a>生产者消费者问题</h3> 
<p>系统中有一组生产者和一组消费者进程，生产者进程每次生产一个产品放入缓冲区，消费者进程每次从缓冲区中取出一个产品并使用（这里的产品可以理解为某种数据）</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/b2590c57bea2bdc76f5887663e583bbb.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>实现互斥的P操作一定要在实现同步的P操作之后</strong></p> 
<p><strong>V操作不会导致进程阻塞，因此v操作顺序可以交换</strong></p> 
<p><strong>生产者消费者问题就是一个进程互斥和进程同步的综合问题</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/1d640197ed1c7482e692947efbb88891.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t33"></a><a id="_743"></a>多生产者多消费者问题</h3> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/12f8986c46b544ca9f87df077384ecd2.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/bcc2f2ab8d55aa83554116bb997c8aeb.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>总结</strong>:在生产者-消费者问题中，如果缓冲区大小为1，那么有可能不需要设置互斥信号量就可以实现，互斥访问缓冲区的功能。当然，这不是绝对的，要具体问题具体分析。</p> 
<p><strong>建议</strong>:在考试中如果来不及仔细分析，可以加上互斥信号量，保证各进程一定会互斥地访问缓冲区。但需要注意的是，实现互斥的P操作一定要在实现同步的P操作之后，否则可能引起“死锁”。</p> 
<p><strong>PV操作题目的解题思路:</strong><br> 1.关系分析。找出题目中描述的各个进程，分析它们之间的同步、互斥关系。<br> 2.整理思路。根据各进程的操作流程确定P、V操作的大致顺序。<br> 3.设置信号量。设置需要的信号量，并根据题目条件确定信号量初值。( 互斥信号量初值一般为1，同步信号量的初始值要看对应资源的初始值是多少)</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/deb529fba96d27e6fcf6efe7b78c3a21.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t34"></a><a id="_763"></a>吸烟者问题</h3> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/f363e7fd415584e3d5fdb63693fdada0.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/1faad6c7984e03797c71ed61beefeef5.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t35"></a><a id="_771"></a>读者-写者问题</h3> 
<p><strong>问题描述</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/b02378664e6c70b5ab4031f9cfbd1e5d.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>问题分析</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/305159e3510e76a41d45083dafa24dc1.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>解决方法</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/767ba1cbe4fcf6efc06867c24d10b374.png#pic_center" alt="在这里插入图片描述"></p> 
<p>读者-写者问题为我们解决复杂的互斥问题提供了一个参考思路。其核心思想在于设置了一个<strong>计数器count</strong>用来记录当前正在访问共享文件的读进程数。我们可以用count的值来判断当前进入的进程是否是第一个/最后一个读进程，从而做出不同的处理。</p> 
<p>另外，对count变量的检查和赋值不能一气呵成导致了一些错误，如果需要实现“一气呵成”，自然应该想到用<strong>互斥信号量</strong>。<br> 最后，还要认真体会我们是如何解决“写进程饥饿”问题的。</p> 
<p>绝大多数的考研PV操作大题都可以用之前介绍的几种生产者-消费者问题的思想来解决，如果遇到更复杂的问题，可以想想能否用读者写者问题的这几个思想来解决。</p> 
<h3><a name="t36"></a><a id="_797"></a>哲学家进餐问题</h3> 
<p><strong>问题描述</strong></p> 
<p>一张圆桌上坐着5名哲学家，每两个哲学家之间的桌上摆一根筷子，桌子的中间是一碗米饭。哲学家们倾注毕生的精力用于思考和进餐，哲学家在思考时，并不影响他人。只有当哲学家饥饿时，才试图拿起左、右两根筷子(一根一根地拿起)。如果筷子已在他人手上，则需等待。饥饿的哲学家只有同时拿起两根筷子才可以开始进餐，当进餐完毕后，放下筷子继续思考。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/1adde2e209ecf2d2b585607575fef5ee.png#pic_center" alt="在这里插入图片描述"></p> 
<p>哲学家进餐问题的关键在于<strong>解决进程死锁。</strong></p> 
<p>这些进程之间只存在互斥关系，但是与之前接触到的互斥关系不同的是，每个进程都需要同时持有两个临界资源，因此就有“死锁”问题的隐患。如果在考试中遇到了一个进程需要同时持有多个临界资源的情况，应该参考哲学家问题的思想，分析题中给出的进程之间是否会发生循环等待，是否会发生死锁。</p> 
<h3><a name="t37"></a><a id="_810"></a>管程</h3> 
<p><strong>为什么要引入管程</strong></p> 
<p>信号量机制存在的问题：编写程序困难，易出错</p> 
<p>能不能设计一种机制，让程序员写代码的时候不在关注复杂的pv操作，让写代码更加轻松呢？</p> 
<p><strong>管程的定义和基本特征</strong></p> 
<p><strong>管程是一种特殊的软件模块，有这些部分组成:</strong><br> 1.局部于管程的共享数据结构说明;<br> 2.对该数据结构进行操作的一组过程;<br> 3.对局部于管程的共享数据设置初始值的语句;<br> 4.管程有一个名字。</p> 
<p><strong>管程的基本特征:</strong><br> 1.局部于管程的数据只能被局部于管程的过程所访问;<br> 2.一个进程只有通过调用管程内的过程才能进入管程访问共享数据;<br> 3.每次仅允许一个进程在管程内执行某个内部过程。</p> 
<p><strong>用管程解决生产者消费者问题</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/d5732077dfce3cabfd20aa644072fc0d.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>引入管程的目的无非就是要更方便地实现进程互斥和同步。（封装思想）</strong><br> 1.需要在管程中定义共享数据(如生产者消费者问题的缓冲区)</p> 
<p>2.需要在管程中定义用于访问这些共享数据的“入口”——其实就是一些函数(如生产者消费者问题中，可以定义一一个函数用于将产品放入缓冲区，再定义一个函数用于从缓冲区取出产品)。</p> 
<p>3.只有通过这些特定的“入口”才能访问共享数据</p> 
<p>4.管程中有很多“入口”，但是每次只能开放其中一个“入口”，并且只能让一个进程或线程进入(如生产者消费者问题中，各进程需要互斥地访问共享缓冲区。管程的这种特性即可保证一个时间段内最多只会有一个进程在访问缓冲区。注意:这种，互斥特性是由编译器负责实现的，程序员不用关心)。</p> 
<p>5.可在管程中设置条件变量及等待/唤醒操作以解决同步问题。可以让一个进程或线程在条件变量上等待(此时，该进程应先释放管程的使用权，也就是让出“入口”) ;可以通过唤醒操作将等待在条件变量上的进程或线程唤醒。</p> 
<p><strong>Java中类似于管程的机制</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/8894727ae138fbe2a26d7f7bf54c48f2.png#pic_center" alt="在这里插入图片描述"></p> 
<h2><a name="t38"></a><a id="_854"></a>死锁</h2> 
<h3><a name="t39"></a><a id="_856"></a>死锁的概念</h3> 
<p><strong>什么是死锁？</strong></p> 
<p>每个人都占有一个资源，同时又在等待另一个人手里的资源，发生死锁</p> 
<p>在并发环境下，各进程因竞争资源而造成的一种互相等待对方手里的资源，导致各进程都阻塞，都无法向前推进的现象，就是“死锁”，发生死锁后若无外力干涉，这些进程都将无法向前推进。</p> 
<p><strong>进程死锁、饥饿、死循环的区别</strong></p> 
<p><strong>饥饿:</strong> 由于长期得不到想要的资源，某进程无法向前推进的现象。比如:在短进程优先(SPF) 算法中，若有源源不断的短进程到来，则长进程将一直得不到处理机，从而发生长进程“饥饿”。</p> 
<p><strong>死循环</strong>:某进程执行过程中-直跳不出某个循环的现象。有时是因为程序逻辑bug导致的，有时是程序员故意设计的。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/b78cf70e1b9ca30d1339ccd052723ca4.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>死锁产生的必要条件</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/b5fa0ad6524815f1b2368888fb292e53.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>什么时候会发生死锁？</strong></p> 
<p>1.对系统资源的竞争。各进程对不可剥夺的资源( 如打印机)的竞争可能引起死锁，对可剥夺的资源(CPU)的竞争是不会引起死锁的。</p> 
<p>2.进程推进顺序非法。请求和释放资源的顺序不当，也同样会导致死锁。例如，并发执行的进程P1、P2分别申请并占有了资源R1、R2，之后进程P1又紧接着申请资源R2，而进程P2又申请资源R1,两者会因为申请的资源被对方占有而阻塞，从而发生死锁。</p> 
<p>3.信号量的使用不当也会造成死锁。如生产者-消费者问题中，如果实现互斥的P操作在实现同步的P操作之前，就有可能导致死锁。(可以把互斥信号量、同步信号量也看做是-种抽象的系统资源)</p> 
<p><strong>总之，对不可剥夺资源的不合理分配可能导致死锁</strong></p> 
<p><strong>死锁的处理策略</strong></p> 
<p>1.预防死锁。破坏死锁产生的四个必要条件中的一个或几个。<br> 2.避免死锁。用某种方法防止系统进入不安全状态，从而避免死锁(银行家算法)<br> 3.死锁的检测和解除。允许死锁的发生，不过操作系统会负责检测出死锁的发生，然后采取某种措施解除死锁A。</p> 
<h3><a name="t40"></a><a id="_894"></a>死锁的处理策略——预防死锁</h3> 
<p><strong>破坏互斥条件</strong></p> 
<p>互斥条件：只有对必须互斥使用的资源的争抢才会导致死锁。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/acf55f409d893263554a032e08779ccb.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>破坏不剥夺条件</strong></p> 
<p>不剥夺条件：进程所获得的资源在未使用完之前，不能由其他进程强行夺走，只能主动释放。</p> 
<p>方案一:当某个进程请求新的资源得不到满足时，它必须立即释放保持的所有资源，待以后需要时再重新申请。也就是说，即使某些资源尚未使用完，也需要主动释放，从而破坏了不可剥夺条件。</p> 
<p>方案二:当某个进程需要的资源被其他进程所占有的时候，可以由操作系统协助，将想要的资源强行剥夺。这种方式一-般需要考虑各进程的优先级(比如:剥夺调度方式，就是将处理机资源强行剥夺给优先级更高的进程使用)</p> 
<p>该策略的<strong>缺点:</strong></p> 
<p>1.实现起来比较复杂。</p> 
<p>2.释放已获得的资源可能造成前一阶段工作的失效。因此这种方法一般只适用于易保存和恢复状态的资源，如CPU。</p> 
<p>3.反复地申请和释放资源会增加系统开销，降低系统吞吐量。</p> 
<p>4.若采用方案一，意味着只要暂时得不到某个资源，之前获得的那些资源就都需要放弃，以后再重新申请。如果一直发生这样的情况，就会导致进程饥饿。</p> 
<p><strong>破坏请求和保持条件</strong></p> 
<p>请求和保持条件：进程已经保持了至少一个资源，但又提出了新的资源请求，而该资源又被其他进程占有，此时请求进程被阻塞，但又对自己的资源保持不放。</p> 
<p>可以采用<strong>静态分配方法</strong>，即进程在运行前一次申请完它所需要的全部资源，在它的资源未满足前，不让它投入运行。一旦投入运行后，这些资源就一直归它所有，该进程就不会再请求别的任何资源了。</p> 
<p>该策略实现起来简单，但也有明显的缺点:<br> 有些资源可能只需要用很短的时间，因此如果进程的整个运行期间都一直保持着所有资源，就会造成<strong>严重的资源浪费，资源利用率极低</strong>。另外，该策略也有可能导致某些<strong>进程饥饿</strong>。</p> 
<p><strong>破坏循环等待条件</strong></p> 
<p><strong>循环等待条件</strong>:存在一种进程资源的循环等待链，链中的每一个进程已获得的资源同时被下一个进程所请求。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/3dc36b6a5ba0af52ff589faab554bd85.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t41"></a><a id="_937"></a>死锁的处理策略——避免死锁</h3> 
<p><strong>什么是安全序列</strong></p> 
<p>所谓的安全序列就是如果系统按照这种序列分配资源，则每个进程都能够顺利完成。只要你能找出一个安全序列，系统就是安全状态，当然，安全序列可能有多个。</p> 
<p><strong>什么是系统的不安全状态，与死锁有何联系</strong></p> 
<p>如果分配了资源之后，系统中找不出任何一个安全序列，系统就进入了不安全状态。这就意味着之后可能所有进程都无法顺利的执行下去。当然，如果有进程提前归还了一些资源，那系统也有可能重新回到安全状态，不过我们在分配资源之前总是要考虑到最坏的情况。</p> 
<p>如果系统处于安全状态，就一定不会发生死锁。如果系统进入不安全状态，就<strong>可能发生</strong>死锁(处于不安全状态未必就是发生了死锁，但发生死锁时一定是在不安全状态)。</p> 
<p>因此可以在资源分配之前预先判断这次分配是否会导致系统进入不安全的状态，以此决定是否答应资源分配请求，这也是银行家算法的核心思想。</p> 
<p><strong>如何避免系统进入不安全状态——银行家算法</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/28d8866e57e81b22aa7da1ad61d74b28.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t42"></a><a id="_956"></a>死锁的处理策略——检测和解除</h3> 
<p><strong>死锁的检测</strong></p> 
<p>为了能对系统是否已发生了死锁进行检测，必须:<br> ①用某种数据结构来保存资源的请求和分配信息;<br> ②提供一种算法，利用上述信息来检测系统是否已进入死锁状态。</p> 
<p><strong>检测死锁的算法:</strong><br> 1)在资源分配图中，找出既不阻塞又不是孤点的进程Pi(即找出一条有向边与它相连，且该有向边对应资源的申请数量小于等于系统中已有空闲资源数量。如下图中，R1没有空闲资源，R2有一个空闲资源。若所有的连接该进程的边均满足上述条件，则这个进程能继续运行直至完成，然后释放它所占有的所有资源)。消去它所有的请求边和分配变，使之称为孤立的结点。</p> 
<p>2)进程Pi所释放的资源，可以唤醒某些因等待这些资源而阻塞的进程，原来的阻塞进程可能变为非阻塞进程。根据1)中的方法进行一系列简化后，若能消去途中所有的边，则称该图是可完全简化的。</p> 
<p><strong>死锁定理</strong><br> 如果某时刻系统的资源分配图是不可完全简化的，那么此时系统死锁。</p> 
<p><strong>死锁的解除</strong></p> 
<p>一旦检测出死锁的发生，就应该立即解除死锁。</p> 
<p>补充：并不是系统中所有的进程都是死锁状态，用死锁检测算法简化资源分配图后，<strong>还连着边的那些进程是死锁进程。</strong></p> 
<p><strong>解除死锁的主要方法</strong></p> 
<p>1.<strong>资源剥夺法</strong>。挂起(暂时放到外存上)某些死锁进程，并抢占它的资源，将这些资源分配给其他的死锁进程。但是应防止被挂起的进程长时间得不到资源而饥饿。</p> 
<p>2.<strong>撤销进程法(或称终止进程法)</strong>。强制撤销部分、甚至全部死锁进程，并剥夺这些进程的资源。这种方式的优点是实现简单，但所付出的代价可能会很大。因为有些进程可能已经运行了很长时间，已经接近结束了，一旦被终止可谓功亏一篑，以后还得从头再来。</p> 
<p>3.<strong>进程回退法</strong>。让一个或多个死锁进程回退到足以避免死锁的地步。这就要求系统要记录进程的历史信息，设置还原点。</p> 
<p><strong>如何决定对谁“动手”</strong></p> 
<p>1.进程优先级<br> 2.已执行多长时间<br> 3.还要多久能完成<br> 4.进程已经使用了多少资源<br> 5.进程是交互式的还是批处理式的</p> 
<h2><a name="t43"></a><a id="_994"></a>内存</h2> 
<h3><a name="t44"></a><a id="_996"></a>内存的基础知识</h3> 
<p><strong>什么是内存？，有何作用</strong></p> 
<p>内存是用于存放数据的硬件，程序执行前需要先放到内存中才能被CPU处理。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/cfe54fe6636e9ecac0b1b60e3722e765.png#pic_center" alt="在这里插入图片描述"></p> 
<p>补充知识：</p> 
<p><strong>几个常用的数量单位</strong></p> 
<p>一台电脑有4G内存是什么意思？</p> 
<p>是指该内存中可以存放4*2的30次方个字节，如果是按字节编址的计算机，也就是2的32次方个小房子。这么多小房间，需要2的32次方个地址才能一一标识，所以地址需要用32个二进制来表示（0-2的32次方-1）</p> 
<p>2的10次方=1K、2的20次方=1M、2的30次方=1G</p> 
<p><strong>进程运行的基本原理</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/840e3ef45b75bea1bc119122e9ef51e9.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>从写程序到程序运行</strong></p> 
<p>编译：由编译程序将用户源代码编译成若干个目标模块（编译就是把高级语言翻译为机器语言）</p> 
<p>链接：由链接程序将编译后形成的一组目标模块，以及所需要的库函数链接在一起，形成一个完整的装入模块</p> 
<p>装入（装载）：由装入程序将装入模块装入内存运行。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/a273940a1ed3475f6f1efb297343abb0.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>装入模块装入内存</strong></p> 
<p>装入的三种方式（用三种不同的方式完成逻辑地址到物理地址的转换）</p> 
<p><strong>1.绝对装入方式</strong></p> 
<p>绝对装入:在编译时，如果知道程序将放到内存中的哪个位置，编译程序将产生绝对地址的目标代码。装入程序按照装入模块中的地址，将程序和数据装入内存。</p> 
<p><strong>绝对装入只适用于单道程序环境</strong></p> 
<p>程序中使用的绝对地址，可在编译或汇编时给出，也可由程序员直接赋予。通常情况下都是编译或汇编时再转换为绝对地址。</p> 
<p><strong>2.静态重定位</strong></p> 
<p>静态重定位:又称**可重定位装入。**编译、链接后的装入模块的地址都是从0开始的，指令中使用的地址、数据存放的地址都是相对于起始地址而言的逻辑地址。可根据内存的当前情况，将装入模块装入到内存的适当位置。装入时对地址进行“重定位”，将逻辑地址变换为物理地址( 地址变换是在装入时一次完成的)。</p> 
<p>静态重定位的特点是在一个作业装入内存时，必须分配其要求的全部内存空间，如果没有足够的内存，就不能装入该作业。作业一旦进入内存后，在<strong>运行期间就不能再移动</strong>，<strong>也不能再申请内存空间</strong>。</p> 
<p><strong>3.动态重定位</strong></p> 
<p>动态重定位:又称<strong>动态运行时装入</strong>。编译、链接后的装入模块的地址都是从0开始的。装入程序把装入模块装入内存后，并不会立即把逻辑地址转换为物理地址，而是<strong>把地址转换推迟到程序真正要执行时才进行</strong>。因此装入内存后所有的地址依然是逻辑地址。这种方式需要-一个<strong>重定位寄存器</strong>的支持。</p> 
<p>采用动态重定位时允许程序在内存中发生移动。</p> 
<p><strong>链接的三种方式</strong><br> 1.<strong>静态链接</strong>:在程序运行之前，先将各目标模块及它们所需的库函数连接成一个完整的可执行文件(装入模块)，之后不再拆开。</p> 
<p><strong>2.装入时动态链接:</strong> 将各目标模块装入内存时，边装入边链接的链接方式。</p> 
<p>3.<strong>运行时动态链接</strong>:在程序执行中需要该目标模块时，才对它进行链接。其优点是便于修改和更新，便于实现对目标模块的共享。</p> 
<h3><a name="t45"></a><a id="_1062"></a>内存管理的概念</h3> 
<p><strong>内存空间的分配和回收</strong></p> 
<p>操作系统负责内存空间分配与回收</p> 
<p><strong>内存空间的扩充</strong></p> 
<p>操作系统需要提供某种技术从逻辑上对内存空间进行扩充（操作系统的虚拟性）</p> 
<p><strong>地址转换</strong></p> 
<p>为了使编程更方便，程序员写程序时应该只需要关注指令、数据的逻辑地址。而<strong>逻辑地址到物理地址的转换</strong>(这个过程称为<strong>地址重定位</strong>)应该由<strong>操作系统负责</strong>，这样就保证了程序员写程序时不需要关注物理内存的实际情况。</p> 
<p><strong>存储保护</strong></p> 
<p>操作系统需要提供内存保护功能，保证各进程在各自存储空间内运行，互不干扰。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/2c7a7b21d5d09acdb7e153ccfbcd90d1.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/130e0a860b7326fa467126fb5e09fc2d.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t46"></a><a id="_1086"></a>覆盖与交换</h3> 
<p><strong>覆盖技术</strong></p> 
<p>解决“程序大小超过物理内存总和”的问题</p> 
<p>覆盖技术的思想核心：将程序分为多个段（多个模块）常用的段（模块）常驻内存，不常用的段在需要的时候调入内存。</p> 
<p>内存中分为<strong>一个“固定区”和若干个“覆盖区”</strong>。需要常驻内存的段放入在“固定区”，调入后就不再调出（除非运行结束）</p> 
<p>不常用的段存放在“覆盖区”，需要的时候调入内存，不需要的时候调出内存。</p> 
<p>例子:</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/804314a88d174eba284bac5a8d4d8b9f.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>交换技术</strong></p> 
<p>交换(对换)技术的设计思想:内存空间紧张时，系统将内存中某些进程暂时换出外存，把外存中某些己具备运行条件的进程<strong>换入</strong>内存(进程在内存与磁盘间动态调度)</p> 
<p>暂时换出外存等待的进程状态成为挂起状态（挂起态，suspend）</p> 
<p>挂起态又可以进一步分为就绪挂起和阻塞挂起两种状态</p> 
<p>PCB会常驻内存，不会被换出外存</p> 
<p><strong>1.应该在外存（磁盘）的什么位置保存被换出的进程呢？</strong></p> 
<p>具有对换功能的操作系统中，通常把磁盘空间分为文件区和对换区两部分。文件区主要用于存放文件，主要追求存储空间的利用率，因此对文件区空间的管理采用离散分配方式;对换区空间只占磁盘空间的小部分，被换出的进程数据就存放在对换区。由于对换的速度直接影响到系统的整体速度，因此对换区空间的管理主要追求换入换出速度，因此通常对换区采用连续分配方式(学过文件管理章节后即可理解)。总之，对换区的I/0速度比文件区的更快。</p> 
<p><strong>2.什么时候应该交换？</strong></p> 
<p>交换通常在许多进程运行且内存吃紧时进行，而系统负荷降低就暂停。例如:在发现许多进程运行时经常发生缺页，就说明内存紧张，此时可以换出一些进程;如果缺页率明显下降，就可以暂停换出。</p> 
<p><strong>3.应该换出哪些进程？</strong></p> 
<p>可优先换出阻塞进程;可换出优先级低的进程;为了防止优先级低的进程在被调入内存后很快又被换出，有的系统还会考虑进程在内存的驻留时间。</p> 
<h3><a name="t47"></a><a id="_1125"></a>连续分配管理方式</h3> 
<p><strong>连续分配</strong>： 指为用户进程分配的必须是一个<strong>连续的内存空间</strong>。</p> 
<p><strong>单一连续分配</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/1f4b4fc3474565e7abedb854bddb9e4c.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>固定连续分配</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/93a058a2915037fc0d28244d7c5dae6a.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/1aa4743c4b31da09f4038c9a7792551f.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>动态连续分配</strong></p> 
<p>动态分区分配又称为<strong>可变分区分配</strong>。这种分配方式不会预先划分内存分区，而是在进程装入内存时，根据进程的大小动态地建立分区，并使分区的大小正好适合进程的需要。因此系统分区的大小和数目是可变的。(eg: 假设某计算机内存大小为64MB，系统区8MB，用户区共56 M…)</p> 
<p><strong>1.系统要用什么样的数据结构记录内存的使用情况？</strong></p> 
<p><strong>空闲分区表</strong></p> 
<p>空闲分区表:每个空闲分区对应一个表项。表项中包含分区号、分区大小、分区起始地址等信息。</p> 
<p><strong>空闲分区链</strong></p> 
<p>空闲分区链:每个分区的起始部分和末尾部分分别设置前向指针和后向指针。起始部分处还可记录分区大小等信息</p> 
<p><strong>2.当很多个空闲分区都能得到满足时，应该选择哪个分区进行分配？</strong></p> 
<p>把一个新作业装入内存时，须按照一定的<strong>动态分区分配算法</strong>，从空闲分区表(或空闲分区链)中选出一个分区分配给该作业。由于分配算法算法对系统性能有很大的影响，因此人们对它进行了广泛的研究。</p> 
<p><strong>补充：</strong></p> 
<p>动态分区分配没有内部碎片，但是有外部碎片。</p> 
<p><strong>内部碎片</strong>，分配给某进程的内存区域中，如果有些部分没有用上。<br> <strong>外部碎片</strong>，是指内存中的某些空闲分区由于太小而难以利用。</p> 
<p>如果内存中空闲空间的总和本来可以满足某进程的要求,但由于进程需要的是一整块连续的内存空间，因此这些“碎片”不能满足进程的需求。可以通过紧凑（拼凑）技术来解决外部碎片</p> 
<h3><a name="t48"></a><a id="_1169"></a>动态分区分配算法</h3> 
<p>在动态分配分区中，当有很多个空前分区都能满足要求时，应该选择哪个分区呢？</p> 
<p><strong>首次适应算法</strong></p> 
<p><strong>算法思想</strong>:每次都从低地址开始查找，找到第一个能满足大小的空闲分区。<br> <strong>如何实现:</strong> 空闲分区以地址递增的次序排列。每次分配内存时顺序查找空闲分区链或空闲分区表,找到大小能满足要求的第一个空闲分区。</p> 
<p><strong>最佳适应算法</strong></p> 
<p><strong>算法思想:</strong> 由于动态分区分配是-种连续分配方式，为各进程分配的空间必须是连续的一整片区域。因此为了保证当“大进程”到来时能有连续的大片空间，可以尽可能多地留下大片的空闲区，即，优先使用更小的空闲区。<br> <strong>如何实现</strong>:空闲分区按容量递增次序链接。每次分配内存时顺序查找空闲分区链(或空闲分区表)，找到大小能满足要求的第一个空闲分区。</p> 
<p><strong>缺点</strong>:每次都选最小的分区进行分配，会留下越来越多的、很小的、难以利用的内存块。因此这种方法会产生很多的外部碎片。</p> 
<p><strong>最坏适应算法</strong></p> 
<p>又称<strong>最大适应算法</strong>(Largest Fit)<br> <strong>算法思想:</strong> 为了解决最佳适应算法的问题——即留下太多难以利用的小碎片，可以在每次分配时优先使用最大的连续空闲区，这样分配后剩余的空闲区就不会太小，更方便使用。<br> <strong>如何实现</strong>: 空闲分区按容量递减次序链接。每次分配内存时顺序查找空闲分区链(或空闲分区表)，找到大小能满足要求的第一个空闲分区。</p> 
<p><strong>缺点</strong>:每次都选最大的分区进行分配，虽然可以让分配后留下的空闲区更大，更可用，但是这种方式会导致较大的连续空闲区被迅速用完。如果之后有“大进程”到达，就没有内存分区可用了。</p> 
<p><strong>邻近适应算法</strong></p> 
<p><strong>算法思想</strong>:首次适应算法每次都从链头开始查找的。这可能会导致低地址部分出现很多小的空闲分区，而每次分配查找时，都要经过这些分区，因此也增加了查找的开销。如果每次都从上次查找结束的位置开始检索，就能解决上述问题。<br> <strong>如何实现</strong>:空闲分区以地址递增的顺序排列(可排成一个 循环链表)。每次分配内存时从上次查找结束的位置开始查找空闲分区链(或空闲分区表)，找到大小能满足要求的第一个空闲分区。</p> 
<p>首次适应算法每次都要从头查找，每次都需要检索低地址的小分区。但是这种规则也决定了当低地址部分有更小的分区可以满足需求时，<br> 会更有可能用到低地址部分的小分区，也会更有可能把高地址部分的大分区保留下来(最佳适应算法的优点)</p> 
<p>邻近适应算法的规则可能会导致无论低地址、高地址部分的空闲分区都有相同的概率被使用，也就导致了高地址部分的大分区更可能被使<br> 用，划分为小分区，最后导致无大分区可用(最大适应算法的缺点)。</p> 
<p><strong>首次算法效果是四个里面最好的</strong></p> 
<p>总结：</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/d9b68df6eb299339575dd704ae7e48f8.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t49"></a><a id="_1211"></a>基本分页存储管理的基本概念</h3> 
<p>连续分配：为用户进程分配的必须是一个连续的内存空间。</p> 
<p>非连续分配：为用户分配的可以是一些分散的内存空间。</p> 
<p><strong>基本分页存储管理的思想——把内存分为一个个相等的小分区，再按照分区大小把进程拆分成一个个小部分</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/9aadc08b6014d5cbba817d0d02b007ca.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>如何实现地址的转换</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/83d67e9f665dab6a6619c8d3c671ad82.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>基本地址变换机构</strong></p> 
<p>基本地址变换机构可以借助进程的页表将逻辑地址转换为物理地址。</p> 
<p>通常会在系统中设置一个页表寄存器(PTR)，存放页表在内存中的起始地址F和页表长度M。</p> 
<p>进程未执行时，页表的始址和页表长度放在进程控制块(PCB)中，当进程被调度时，操作系统内核会把它们放到页表寄存器中。</p> 
<p><strong>局部性原理</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/82686cc23e50ef41deeb317b3a473aaa.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>什么是快表（TLB）</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/c7df58c35077f566f043b296ba35800c.png#pic_center" alt="在这里插入图片描述"></p> 
<p>如果查询快表命中了就不会查询内存了（最近使用过的页表项会放在快表中）</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/85de5ebcf7af38f686081a65cc48490e.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/62c84663bd9a0f8d2c588cb1ea63e998.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t50"></a><a id="_1253"></a>两级页表</h3> 
<p><strong>单级页表存在什么问题？如何解决</strong></p> 
<p>问题一:页表必须连续存放，因此当页表很大时，需要占用很多个连续的页框。<br> 问题二:没有必要让整个页表常驻内存，因为进程在一段时间内可能只需要访问某几个特定的页面。</p> 
<p>如何解决单级分页问题：</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/7f6a94b38ed4d4432b32508cb84eff6e.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>两级页表的原理、逻辑地址结构</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/46fb49172f38b9c6f7342f683308fc1b.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/9b70430f3a8713d5cf087827331bc5ff.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>如何实现地址变换</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/1aca6e9ef17e474525538ddfaebde15a.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>两级页表问题需要注意的几个细节</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/cb5a7f8d1856210c225158ebc3444cbd.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>n级页表访问逻辑地址访存次数为n+1</strong></p> 
<h3><a name="t51"></a><a id="_1285"></a>基本分段存储管理方式</h3> 
<p><strong>什么是分段</strong></p> 
<p><strong>进程的地址空间</strong>:按照程序自身的逻辑关系划分为若干个段，每个段都有一个段名(在低级语言中，程序员使用段名来编程)，每段从0开始编址<br> <strong>内存分配规则</strong>:以段为单位进行分配，每个段在内存中占据连续空间，但各段之间可以不相邻。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/1234fb6238602bce5aedefd16ef415a5.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/40f8b62b36ac9b743298827d423a8507.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>段号的位数决定了每个进程最多可以分几个段</strong></p> 
<p><strong>段内地址位数决定了每个段的最大长度是多少</strong></p> 
<p><strong>什么是段表</strong></p> 
<p>问题:程序分多个段，各段离散地装入内存，为了保证程序能正常运行，就必须能从物理内存中找到各个逻辑段的存放位置。为此，需为每个进程建立一张段映射表，简称“段表”。</p> 
<p>1.每个段对应一个段表项，其中记录了该段在内存中的起始位置（又称基址）和段的长度。</p> 
<p>2.各个段表项的长度是相同的。</p> 
<p><strong>如何实现地址变换</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/eafe3d7bab7fe3ab965743650526bd6f.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>分段、分页管理的对比</strong></p> 
<p><strong>页是信息的物理单位</strong>。分页的主要目的是为了实现离散分配，提高内存利用率。分页仅仅是系统管理上的需要，完全是系统行为，对用户是不可见的。<br> <strong>段是信息的逻辑单位</strong>。分段的主要目的是更好地满足用户需求。一个段通常包含着一组属于一个逻辑模块的信息。分段对用户是可见的，用户编程时需要显式地给出段名。</p> 
<p>页的大小是固定且由系统决定的。段的长度却不固定，决定于用户编写的程序。</p> 
<p>分页的用户进程地址空间是一维的，程序员只需要给出一个记忆符即可表示一个地址。</p> 
<p>分段的用户进程地址空间是二维的，程序员在标识一个地址时，既要给出段名，也要给出段内地址。</p> 
<p><strong>分段比分页更容易实现信息的共享和保护</strong></p> 
<p>不能被修改的代码称为纯代码或可重入代码(不属于临界资源)，这样的代码是可以共享的。可修改的代码是不能共享的(比如，有一个代码段中有很多变量，各进程并发地同时访问可能造成数据不一致)</p> 
<p><strong>访问一个逻辑地址需要几次访存?</strong><br> 分页(单级页表) :第一次访存——查内存中的页表，第二次访存——访问目标内存单元。总共两次访存。</p> 
<p>分段:第一次访存——查内存中的段表，第二次访存——访问目标内存单元。总共两次访存与分页系统类似，分段系统中也可以引入快表机构，将近期访问过的段表项放到<strong>快表</strong>中，这样可以少一次访问，加快地址变换速度。</p> 
<h3><a name="t52"></a><a id="_1335"></a>段页式管理方式</h3> 
<p><strong>分页和分段管理方式中最大的优缺点</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/075cb224571b36add8f4f67cacdc29f1.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>分段+分页的结合——段页式管理方式</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/483367d1c2034c0acfcf609c54e6b9d8.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/04266d6215deee8995ce1206eeb38eb6.png#pic_center" alt="在这里插入图片描述"></p> 
<p>段号的位数决定了每个进程最多可以分为几个段</p> 
<p>页号位数决定了每个段最大有多少页</p> 
<p>页内偏移量决定了页面的大小、内存块的大小是多少</p> 
<p>“分段” 对用户是可见的，程序员编程时需要显式地给出段号、段内地址。而将各段“分页”对用户是不可见的。系统会根据段内地址自动划分页号和页内偏移量。因此段页式管理的地址结构是二维的。</p> 
<p><strong>段表、页表</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/0459fc80cabe7988356dda213247dd10.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>如何实现地址变换</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/7ca9f3bda745e05391ac6df47e5f3fd7.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t53"></a><a id="_1369"></a>虚拟内存</h3> 
<p><strong>传统存储管理的缺点</strong></p> 
<p><strong>一次性</strong>:作业必须一次性全部装入内存后才能开始运行。这会造成两个问题:</p> 
<p>①作业很大时，不能全部装入内存，导致大作业无法运行;</p> 
<p>②当大量作业要求运行时，由于内存无法容纳所有作业，因此只有少量作业能运行，导致多道程序并发度下降。</p> 
<p><strong>驻留性</strong>: 一旦作业被装入内存，就会一直驻留在内存中，直至作业运行结束。事实上，在一个时间段内，只需要访问作业的一小部分数据即可正常运行，这就导致了内存中会驻留大量的、暂时用不到的数据，浪费了宝贵的内存资源。</p> 
<p><strong>虚拟内存主要用到了局部性原理</strong></p> 
<p><strong>时间局部性</strong>:如果执行了程序中的某条指令，那么不久后这条指令很有可能再次执行;如果某个数据被访问过，不久之后该数据很可能再次被访问。(因为程序中存 在大量的循环)<br> <strong>空间局部性</strong>:一旦程序访问了某个存储单元，在不久之后，其附近的存储单元也很有可能被访问。(因为很多数据在内存中都是连续存放的，并且程序的指令也是顺序地在内存中存放的)</p> 
<p><strong>如何运用局部性原理？</strong></p> 
<p>高速缓冲技术的思想:将近期会频繁访问到的数据放到更高速的存储器中，暂时用不到的数据放在更低速存储器中。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/71a0175d80d8d630c8085f9e94a51cf0.png#pic_center" alt="在这里插入图片描述"></p> 
<p>基于局部性的原理。在程序装入时，可以将程序中很快会用到的部分装入到内存中，暂不用的部分放到外存中，就可以让程序开始执行。</p> 
<p>在程序执行过程中，当所访问的信息不在内存时，由操作系统负责将所需信息从外存调入内存，然后继续执行程序。</p> 
<p>若内存空间不够，由操作系统负责将内存中暂时用不到的信息换出到外存。</p> 
<p><strong>在操作系统的管理下，在用户看来似乎有一个比实际内存大得多的内存，这就是虚拟内存</strong></p> 
<p>操作系统虚拟性的一个体现，实际的物理内存大小没有变，只是在逻辑上进行了扩充。</p> 
<p>易混知识点：<br> 虚拟内存的最大容量是由计算机的地址结构(CPU寻址范围)确定的<br> 虛拟内存的实际容量= min (内存和外存容量之和，CPU寻址范围)<br> 如:某计算机地址结构为32位，按字节编址，内存大小为512MB，外存大小为2GB。则虚拟内存的最大容量为232B= 4GB<br> 虚拟内存的实际容量= min (232B, 512MB+2GB) = 2GB+512MB</p> 
<p><strong>虚拟内存的三个特征：</strong></p> 
<p><strong>多次性</strong>:无需在作业运行时一次性全部装入内存，而是允许被分成多次调入内存。<br> <strong>对换性</strong>: 在作业运行时无需一直常驻内存，而是允许在作业运行过程中，将作业换入、换出。<br> <strong>虚拟性</strong>:从逻辑上扩充了内存的容量，使用户看到的内存容量，远大于实际的容量。</p> 
<p><strong>如何实现虚拟内存技术</strong></p> 
<p>虚拟内存技术，允许一个作业分多次调入内存。如果采用连续分配方式，会不方便实现。因此，虚拟内存的实现需要建立在<strong>离散分配</strong>的内存管理方式基础上。</p> 
<h3><a name="t54"></a><a id="_1419"></a>请求分页管理方式</h3> 
<p><strong>请求分页存储管理与基本分页存储管理的主要区别:</strong><br> 在程序执行过程中，当所访问的信息不在内存时，由<strong>操作系统负责将所需信息从外存调入内存</strong>，然后继续执行程序。<br> 若内存空间不够，由<strong>操作系统负责将内存中暂时用不到的信息换出到外存</strong>。</p> 
<p><strong>页表机制</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/e633a51e2ae9cd1ac708c9351be0b805.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>缺页中断机构</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/d6126012eb410c1bffeb3ec9123326ee.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>缺页中断是因为当前执行的指令想要访问的目标页面未调入内存而产生的，因此属于内中断</strong></p> 
<p><strong>一条指令在执行期间，可能会产生多次缺页中断</strong></p> 
<h3><a name="t55"></a><a id="_1439"></a><strong>页面置换算法</strong></h3> 
<p>页面的换入和换出需要磁盘I/O,会有较大的开销，因此好的页面置换算法应该追求更少的缺页率</p> 
<p><strong>最佳置换算法OPT</strong></p> 
<p>最佳置换算法：每次选择淘汰的页面将是以后永不使用，或者在最长时间内不再被访问的页面，这样可以保证最低的缺页率。</p> 
<p>缺页时未必发生页面置换。若还有可用的空闲内存块，就不用进行页面置换。</p> 
<p>最佳置换算法可以保证最低的缺页率，但实际上，只有在进程执行的过程中才能知道接下来会访问到的是哪个页面。操作系统无法提前预判页面访问序列。因此，最佳置换算法是无法实现的。</p> 
<p><strong>先进先出置换算法FIFO</strong></p> 
<p>先进先出置换算法(FIFO) :每次选择淘汰的页面是<strong>最早进入内存</strong>的页面<br> 实现方法:把调入内存的页面根据调入的先后顺序排成一个队列，需要换出页面时选择队头页面即可。<br> 队列的最大长度取决于系统为进程分配了多少个内存块。</p> 
<p><strong>Belady异常</strong>：当为进程分配的物理块数增大时，缺页次数不减反增的异常现象。<br> 只有FIFO算法会产生Belady异常。另外，FIFO算法虽然实现简单，但是该算法与进程实际运行时的规律不适应，因为先进入的页面也有可能最经常被访问。因此，算法性能差。</p> 
<p><strong>最近最久未使用置换算法LRU</strong></p> 
<p>最近最久未使用置换算法(LRU，leastrecentlyused):每次淘汰的页面是最近最久未使用的页面。<br> 实现方法:赋予每个页面对应的页表项中，用访间字段记录该页面自，上次被访问以来所经历的时间t。<br> 当需要淘汰一个页面时，选择现有页面中t值最大的，即最近最久未使用的页面。</p> 
<p><strong>在手动做题时，若需要淘汰页面，可以逆向检查此时在内存中的几个页面号。在逆向扫描过程中最后一个出现的页号就是要淘汰的页面。</strong></p> 
<p>该算法的实现需要专门的硬件支持，虽然算法性能好，但是实现困难，开销大。</p> 
<p><strong>时钟置换算法CLOCK</strong><br> 时钟置换算法是一种性能和开销较均衡的算法，又称CLOCK算法，或最近未用算法(NRU， Not Recently Used )</p> 
<p>简单的CLOCK算法实现方法:为每个页面设置一个访问位，再将内存中的页面都通过链接指针链接成一个循环队列。当某页被访问时，其访问位置为1。当需要淘汰一个页面时，只需检查页的访问位。如果是0，就选择该页换出;如果是1，则将它置为0，暂不换出，继续检查下一个页面，若第一轮扫描中所有页面都是1，则将这些页面的访问位依次置为0后，再进行第二轮扫描(第二轮扫描中一定会有访问位为0的页面，因此简单的CLOCK算法选择–个淘汰页面最多会经过两轮扫描)。</p> 
<p><strong>改进型的时钟置换算法</strong></p> 
<p>简单的时钟置换算法仅考虑到一个页面最近是否被访问过。事实上，如果被淘汰的页面没有被修改过,就不需要执行I/O操作写回外存。只有被淘汰的页面被修改过时，才需要写回外存。</p> 
<p>因此，除了考虑一个页面最近有没有被访问过之外，操作系统还应考虑页面有没有被修改过。在其他条件都相同时，应优先淘汰没有修改过的页面，避免I/O操作。这就是改进型的时钟置换算法的思想。</p> 
<p>修改位=0，表示页面没有被修改过;修改位=1， 表示页面被修改过。</p> 
<p><strong>算法规则</strong>:将所有可能被置换的页面排成一个循环队列<br> 第一轮:从当前位置开始扫描到第-一个(0, 0)的帧用于替换。本轮扫描不修改任何标志位</p> 
<p>第二轮:若第一轮扫描失败，则重新扫描，查找第一个(0, 1)的帧用于替换。本轮将所有扫描过的帧访问位设为0</p> 
<p>第三轮:若第二轮扫描失败，则重新扫描，查找第一个(0,0)的帧用于替换。本轮扫描不修改任何标志位</p> 
<p>第四轮:若第三轮扫描失败，则重新扫描，查找第一个(0,1) 的帧用于替换。</p> 
<p>由于第二轮已将所有帧的访问位设为0，因此经过第三轮、第四轮扫描一定会有一个帧被选中，因此改进型CLOCK置换算法选择一个淘汰页面最多会进行四轮扫描</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/9d74a7dc5f193c494548bc14a0d1a026.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>总结上述算法</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/e9329655f8b4c1db3bf218526c94b247.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t56"></a><a id="_1502"></a>页面分配策略</h3> 
<p><strong>驻留集</strong>：指请求分页存储管理中给进程分配的物理块的集合。</p> 
<p>在采用了虚拟存储技术的系统中，驻留集大小一般小于进程的总大小。<br> 若驻留集太小，会导致缺页频繁，系统要花大量的时间来处理缺页，实际用于进程推进的时间很少;<br> 驻留集太大，又会导致多道程序并发度下降，资源利用率降低。所以应该选择一个合适的驻留集大小。</p> 
<p><strong>固定分配</strong>:操作系统为每个进程分配一组固定数目的物理块，在进程运行期间不再改变。即，驻留集小不变<br> <strong>可变分配</strong>:先为每个进程分配一定数目的物理块，在进程运行期间，可根据情况做适当的增加或减少。即，驻留集大小可变</p> 
<p><strong>局部置换:</strong> 发生缺页时只能选进程自己的物理块进行置换。<br> <strong>全局置换</strong>:可以将操作系统保留的空闲物理块分配给缺页进程，也可以将别的进程持有的物理块置换到外存，再分配给缺页进程。</p> 
<p><strong>固定分配局部置换</strong>:系统为每个进程分配一定数量的物理块，在整个运行期间都不改变。若进程在运行中发生缺页，则只能从该进程在内存中的页面中选出一页换出，然后再调入需要的页面。这种策略的缺点是:很难在刚开始就确定应为每个进程分配多少个物理块才算合理。(采用这种策略的系统可以根据进程大小、优先级、或是根据程序员给出的参数来确定为一个进程分配的内存块数)</p> 
<p><strong>可变分配全局置换</strong>:刚开始会为每个进程分配一定数量的物理块。操作系统会保持一个 空闲物理块队列。当某进程发生缺页时，从空闲物理块中取出一块分配给该进程;若已无空闲物理块，则可选择一个未锁定的页面换出外存，再将该物理块分配给缺页的进程。采用这种策略时，只要某进程发生缺页,都将获得新的物理块，仅当空闲物理块用完时，系统才选择一个未锁定的页面调出。被选择调出的页可能是系统中任何一个进程中的页，因此这个被选中的进程拥有的物理块会减少，缺页率会增加。</p> 
<p><strong>可变分配局部置换:</strong> 刚开始会为每个进程分配一定数量的物理块。当某进程发生缺页时，只允许从该进程自己的物理块中选出一个进行换出外存。如果进程在运行中频繁地缺页，系统会为该进程多分配几个物理块，直至该进程缺页率趋势适当程度;反之，如果进程在运行中缺页率特别低，则可适当减少分配给该进程的物理块。</p> 
<p><strong>可变分配全局置换:只要缺页就给分配新物理块</strong><br> <strong>可变分配局部置换:要根据发生缺页的频率来动态地增加或减少进程的物理块</strong></p> 
<p><strong>何时调入页面</strong></p> 
<p>1.<strong>预调页策略</strong>:根据局部性原理，一次调入若干个相邻的页面可能比一次调入一个页面更高效。但如果提前调入的页面中大多数都没被访问过，则又是低效的。因此可以预测不久之后可能访问到的页面，将它们预先调入内存，但目前预测成功率只有50%左右。故这种策略主要用于进程的首次调入，由程序员指出应该先调入哪些部分。</p> 
<p><strong>2.请求调页策略</strong> :进程在运行期间发现缺页时才将所缺页面调入内存。由这种策略调入的页面一定会被访问到，但由于每次只能调入一页，而每次调页都要磁盘I/O操作，因此I/0开销较大。</p> 
<p><strong>从何处调入页面</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/cfb1dc7be066bb3523f98c22314f05d6.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>抖动（颠簸）现象</strong></p> 
<p>刚刚换出的页面马上又要换入内存，刚刚换入的页面马上又要换出外存，这种频繁的页面调度行为称为抖动，或颠簸。产生抖动的主要原因是进程频繁访问的页面数目高于可用的物理块数(分配给进程的物理块不够)</p> 
<p>为进程分配的物理块太少，会使进程发生抖动现象。为进程分配的物理块太多，又会降低系统整体的并发度，降低某些资源的利用率</p> 
<p>为了研究为应该为每个进程分配多少个物理块，Denning 提出了进程‘<strong>工作集</strong>” 的概念</p> 
<p><strong>工作集</strong></p> 
<p><strong>驻留集</strong>:指请求分页存储管理中给进程分配的内存块的集合。<br> <strong>工作集</strong>:指在某段时间间隔里，进程实际访问页面的集合。</p> 
<p>一般来说驻留集大小不能小于工作集的大小，否则进程运行过程中会频繁缺页</p> 
<h2><a name="t57"></a><a id="_1552"></a>文件管理</h2> 
<h3><a name="t58"></a><a id="_1554"></a><strong>文件的属性</strong></h3> 
<p><strong>文件名</strong>:由创建文件的用户决定文件名，主要是为了方便用户找到文件，同一目录下不允许有重名文件。<br> <strong>标识符</strong>:一个系统内的各文件标识符唯一，对用户来说毫无可读性，因此标识符只是操作系统用于区分各个文件的一种内部名称。<br> <strong>类型</strong>:指明文件的类型<br> <strong>位置</strong>:文件存放的路径(让用户使用)、在外存中的地址(操作系统使用，对用户不可见)<br> <strong>大小</strong>:指明文件大小<br> <strong>创建时间、上次修改时间</strong><br> <strong>文件所有者信息</strong></p> 
<p><strong>保护信息</strong>：对文件进行保护的访问<br> <strong>控制信息</strong></p> 
<h3><a name="t59"></a><a id="_1567"></a>文件的逻辑结构</h3> 
<p>所谓的“逻辑结构”，就是指在用户看来，文件内部的数据应该是如何组织起来的。而物理结构”指的是在操作系统看来，文件的数据是如何存放在外存中的。</p> 
<p><strong>无结构文件</strong></p> 
<p>无结构文件:文件内部的数据就是一系列二进制流或字符流组成。又称“流式文件”。如:Windows操作系统中的.txt 文件。</p> 
<p>文件内部的数据其实就是一系列字符流，没有明显的结构特性。因此也不用探讨无结构文件的“逻辑结构”问题。</p> 
<p><strong>有结构文件</strong></p> 
<p>有结构文件:由一组相似的记录组成，又称“记录式文件”。每条记录又若干个数据项组成。如:数据库表文件。一般来说，每条记录有一个数据项可作为关键字(作为识别不同记录的ID )。有根据记录的长度是否相等，分为定长记录和可变长记录。</p> 
<p>有结构文件分为：<strong>顺序文件、索引文件、索引顺序文件</strong></p> 
<p><strong>顺序文件</strong></p> 
<p>顺序文件:文件中的记录一个接一个地顺序排列(逻辑上)，记录可以是定长的或可变长的。各个记录在物理上可以<strong>顺序存储</strong>（逻辑物理都相邻）或<strong>链式存储</strong>（逻辑相邻物理不相邻）。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/4ac0d73dd20cd045da85ef677d816c28.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>索引文件</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/ea00830c6f708ffe505ca76bf478c433.png#pic_center" alt="在这里插入图片描述"></p> 
<p>索引表本身是<strong>定长记录的顺序文件</strong>。因此可以快速找到第i个记录对应的索引项。</p> 
<p>可将关键字作为索引号内容，若按关键字顺序排列，则还可以支持按照关键字折半查找。每当要增加/删除- 一个记录时，需要对索引表进行修改。由于索引文件有很快的检索速度，因此主要<strong>用于对信息处理的及时性要求比较高的场合</strong>。</p> 
<p><strong>索引顺序文件</strong></p> 
<p>索引顺序文件是索引文件和顺序文件思想的结合。索引顺序文件中，同样会为文件建立一-张索引表，但不同的是:并不是每个记录对应一个索引表项，而是一组记录对应一索引表项。</p> 
<h3><a name="t60"></a><a id="_1603"></a>文件目录</h3> 
<p><strong>文件控制块（实现文件目录的关键数据结构）</strong></p> 
<p>目录本身就是一种有结构文件，由一条条记录组成。每条记录对应一个放在该目录下的文件</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/f5b70c945cac1054ebf4a19d8243f508.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>需要对目录进行哪些操作?</strong><br> <strong>搜索</strong>:当用户要使用一个文件时，系统要根据文件名搜索目录，找到该文件对应的目录项<br> <strong>创建文件: 创建一 一个 新文件时，需要在其所属的目录中增加一个目录项<br> <strong>删除文件</strong></strong>:当删除一一个文件时，需要在目录中删除相应的目录项<br> <strong>显示目录</strong>:用户可以请求显示目录的内容，如显示该目录中的所有文件及相应属性<br> <strong>修改目录</strong> 某些文件属性保存在目录中，因此这些属性变化时需要修改相应的目录项(如:文件重命名)</p> 
<p><strong>目录结构</strong></p> 
<p><strong>单级目录结构</strong></p> 
<p>早期操作系统并不支持多级目录，整个系统中只建立一张目录表。每个文件占一个目录项。单级目录实现了按名存取，但不允许文件重名</p> 
<p><strong>两极目录结构</strong></p> 
<p>早期的多用户操作系统，采用两级目录结构。分为<strong>主文件目录</strong>(MFD, Master File Directory)和<strong>用户文件目录</strong>(UFD， User Flie Directory)。</p> 
<p><strong>多级目录结构（树形目录结构）</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/debb6e32c03f8a958602bdd8e58027cb.png#pic_center" alt="在这里插入图片描述"></p> 
<p>树形目录结构可以很方便地对文件进行分类，层次结构清晰，也能够更有效地进行文件的管理和保护。但是，树形结构不便于实现文件的共享。为此，提出了“<strong>无环图目录结构</strong>”。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/ed5ca90e43f51192744de75e852b5c48.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>索引结点（对文件控制块的优化）</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/8fcbec38f19fc9cf23d52a5c2fdc0176.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t61"></a><a id="_1644"></a>文件的物理结构（文件分配方式）</h3> 
<p>文件数据应该怎样存放在外存？</p> 
<p>连续分配、链接分配（又分为显式链接和隐式链接）、索引分配。</p> 
<p>补充知识点：文件快、磁盘块。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/2d8519a55bc6f4f715786d40c2e538dc.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/409c6fd42ecdbde7a5aab1dbb1f7648c.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>连续分配</strong></p> 
<p>连续分配方式要求每个文件在磁盘上占有一组连续的块。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/c52214cb634080ac0b2cf1149d861ec3.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>优点</strong>：</p> 
<p>支持顺序访问和直接访问（随机访问），<strong>连续分配方式在顺序读写的时候速度最快。</strong></p> 
<p><strong>缺点:</strong></p> 
<p>1.物理上采用连续分配的文件<strong>不方便拓展</strong>。</p> 
<p>2.物理上采用连续分配，存储<strong>空间利用率低</strong>，会产生难以利用的磁盘碎片可以用紧凑来处理碎片，但是需要耗费很大的时间代价。</p> 
<p><strong>链接分配</strong></p> 
<p>链接分配采取离散分配的方式，可以为文件分配离散的磁盘块。分为<strong>隐式链接</strong>和<strong>显式链接</strong>两种。</p> 
<p><strong>隐式链接</strong></p> 
<p><strong>缺点</strong>：采用链式分配(隐式链接)方式的文件，只支持顺序访问，不支持随机访问，查找效率低。另外，指向下一个盘块的指针也需要耗费少量的存储空间。</p> 
<p><strong>优点</strong>：采用隐式链接的链接分配方式，很方便文件拓展。另外，所有的空闲磁盘块都可以被利用，不会有碎片问题，外存利用率高。</p> 
<p><strong>显式链接</strong></p> 
<p>把用于链接文件各物理块的指针显式地存放在一张表中。即文件分配表(FAT，File Allocation Table )</p> 
<p>优点：采用链式分配(显式链接)方式的文件，支持顺序访问，也支持随机访问(想访问i号逻辑块时，并不需要依次访问之前的0~i1号逻辑块)，由于块号转换的过程不需要访问磁盘，因此相比于隐式链接来说，访问速度快很多。不会产生外部碎片，也可以很方便的对文件实现扩展。</p> 
<p>缺点：文件分配表需要占用一定的存储空间。</p> 
<p><strong>索引分配</strong></p> 
<p><strong>索引分配</strong>允许文件离散地分配在各个磁盘块中，系统会<strong>为每个文件建立一张索引表</strong>，索引表中<strong>记录了文件的各个逻辑块对应的物理块</strong>(索引表的功能类似于内存管理中的页表——建立逻辑页面到物理页之间的映射关系)。索引表存放的磁盘块称为<strong>索引块</strong>。文件数据存放的磁盘块称为<strong>数据块</strong>。</p> 
<p>索引分配方式可以支持<strong>随机访问</strong>。文件拓展也很容易实现(只需要给文件分配一个空闲块，并增加一个索引表项即可)</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/e12a2a3733a4b432f76c553f8b95cf30.png#pic_center" alt="在这里插入图片描述"></p> 
<p>若文件很大，索引表项太多，可以采用以下三种方法解决：</p> 
<p>①<strong>链接方案</strong>:如果索引表太大，一个索引块装不下，那么可以将多个索引块链接起来存放。缺点:若文件很大，索引表很长，就需要将很多个索引块链接起来。想要找到i号索引块，必须先依次读入0~i-1号索引块，这就导致磁盘I/O次数过多，查找效率低下。<br> ②<strong>多层索引</strong>:建立多层索引(原理类似于多级页表)。使第一层索引块指向第二层的索引块。还可根据文件大小的要求再建立第三层、第四层索引块。采用K层索引结构，且顶级索引表未调入内存，则访问一个数据块只需要K+ 1次读磁盘操作。缺点:即使是小文件，访问一个数据块依然需要K+1次读磁盘。<br> ③<strong>混合索引</strong>:多种索引分配方式的结合。例如，一个文件的顶级索引表中，既包含直接地址索引(直接指向数据块)，又包含一级间接索引(指向单层索引表)、还包含两级间接索引( 指向两层索引表)。优点:对于小文件来说，访问一个数据块所需的读磁盘次数更少。</p> 
<p><strong>总结</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/b37aadc60456002ee79c4dfb9c8c5f6b.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t62"></a><a id="_1713"></a>文件存储空间管理</h3> 
<p><strong>存储空间的划分与初始化</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/75281bdd3d211cc3b1345ef14412dc52.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>存储空间管理——空闲表法</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/d9328a30608231d57deb86f498067a1b.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>存储空间管理——空闲链表法</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/f0059275576f8ecd3b500ede68284746.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>存储空间管理——位示图法</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/c454d77fc30a5839e4e479d0ff8e34b6.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>存储空间管理——成组链接法</strong></p> 
<p> 空闲表法、空闲链表法不适用于大型文件系统，因为空闲表或空闲链表可能过大。UNIX系统中采用了<strong>成组链接法</strong>对磁盘空闲块进行管理。</p> 
<p>文件卷的目录区中专门用一个磁盘块作为“超级块”，当系统启动时需要将超级块读入内存。并且要保证内存与外存中的“超级块”数据一致</p> 
<h3><a name="t63"></a><a id="_1741"></a>文件共享</h3> 
<p>多个用户共享同一个文件，意味着系统中只有“一份”文件数据。并且只要某个用户修改了该文件的数据，其他用户也可以看到文件数据的变化。<br> 如果是多个用户都“复制”了同一个文件，那么系统中会有“好几份”文件数据。其中一个用户修改了自己的那份文件数据，对其他用户的文件数据并没有影响。</p> 
<p><strong>基于索引结点的共享方式（硬链接）</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/7107b11b8e4eaac9ae0100c3689f08a3.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>基于符号链的共享方式（软链接）</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/d197c38cad5379edc8775aa5251f8dac.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t64"></a><a id="_1756"></a>文件保护</h3> 
<p>保护文件数据的安全性</p> 
<p><strong>口令保护</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/7820427f8acee906dea2deeb7b80a8af.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>加密保护</strong></p> 
<p>使用某个“密码”对文件进行加密，在访问文件时需要提供正确的“密码”才能对文件进行正确的解密。</p> 
<p>优点：保密性强，不需要在系统中存储“密码”</p> 
<p>缺点：编码/译码，或者说加密解密需要花费一定的时间。</p> 
<p><strong>访问控制</strong></p> 
<p>在每个文件的FCB (或索引结点)中增加一个访问控制列表(Access-Control List, ACL)，该表中记录了各个用户可以对该文件执行哪些操作。</p> 
<h3><a name="t65"></a><a id="_1777"></a>文件系统的层次结构</h3> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/706fdb2b05247f5b38216e3b7c67d422.png#pic_center" alt="在这里插入图片描述"></p> 
<p>1.用户需要通过操作系统提供的接口发出上述请求——用户接口<br> 2.由于用户提供的是文件的存放路径，因此需要操作系统一层一层地查找目录，找到对应的目录项——文件目录系统<br> 3.不同的用户对文件有不同的操作权限，因此为了保证安全，需要检查用户是否有访问权限——存取控制模块(存取控制验证层)<br> 4.验证了用户的访问权限之后，需要把用户提供的“记录号”转变为对应的逻辑地址——逻辑文件系统与文件信息缓冲区<br> 5.知道了目标记录对应的逻辑地址后，还需要转换成实际的物理地址——物理文件系统<br> 6.要删除这条记录，必定要对磁盘设备发出请求——设备管理程序模块<br> 7.删除这些记录后，会有一些盘块空闲，因此要将这些空闲盘块回收——辅助分配模块</p> 
<h3><a name="t66"></a><a id="_1790"></a>磁盘的结构</h3> 
<p><strong>磁盘</strong>：磁盘的表面由一些磁性物质组成，可以用这些磁性物质来记录二进制数据。</p> 
<p>磁盘的盘面被划分为一个个<strong>磁道</strong>，这样的一个圆就是一个磁道。</p> 
<p>一个磁道又会被划分为一个个的<strong>扇区</strong>，每个扇区就是一个磁盘块，各个扇区存放的数据量相同。最内侧磁道上的扇区面积是最小的，因此数据密度最大。</p> 
<p><strong>如何从磁盘中读/写数据</strong></p> 
<p>需要把磁头移动到想要读或写的扇区所在的磁道。磁盘会转起来，让目标扇区从磁头下面划过，才能完成对扇区的读写操作。</p> 
<p><strong>盘面和柱面</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/180cd1fa4457613e894488d66b187270.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>磁盘的分类</strong></p> 
<p>磁头可以移动的成为<strong>活动头磁盘</strong>，磁臂可以来回伸缩来带动磁头定位磁道</p> 
<p>磁头不可移动的称为<strong>固定头磁盘</strong>。这种磁盘:中每个磁道有一个磁头</p> 
<p>盘片可以更换的称为<strong>可换盘磁盘</strong><br> 盘片不可更换的称为<strong>固定盘磁盘</strong></p> 
<h3><a name="t67"></a><a id="_1816"></a>磁盘调度算法</h3> 
<p><strong>一次磁盘读写操作需要的时间</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/53e15d5da1deeec0d68dcfa82bb6f4ba.png#pic_center" alt="在这里插入图片描述"></p> 
<p>操作系统的磁盘调度算法会直接影响寻道时间。以下算法可以考虑</p> 
<p><strong>先来先服务算法（FCFS）</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/df6c4e5b0a1d3e27df656ff647a04691.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>最短寻找时间优先（SSTF）</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/f47279380398bf89e7856a6a8bdfe7ad.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>扫描算法（SCAM）</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/e32569569846f34a7b8b09f3837935a0.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>LOOK调度算法</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/828e6061b0548c4656f7566b57fefcde.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>循环扫描算法（C-SCAN）</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/fe3bd784b7da7dc7ba733e0d6584c4eb.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>C-LOOK调度算法</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/cbaa303ecf2de8a82786564a837ba53b.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t68"></a><a id="_1855"></a><strong>减少磁盘延迟时间的方法</strong></h3> 
<p><strong>交替编号</strong></p> 
<p>若采用交替编号的策略，即让逻辑上相邻的扇区在物理上有一定的间隔，可以使读取连续的逻辑扇区所需要的延迟时间更小。</p> 
<p><strong>错位命名</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/6a9dc3be3bc29e6dc4d72ab513c31050.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>磁盘地址结构的设计</strong></p> 
<p>为什么磁盘的物理地址是(柱面号，盘面号，扇区号)，而不是( 盘面号，柱面号，扇区号)<br> 答:读取地址连续的磁盘块时，采用(柱面号，盘面号，扇区号)的地址结构可以减少磁头移动消耗的时间</p> 
<h3><a name="t69"></a><a id="_1871"></a>磁盘的管理</h3> 
<p><strong>磁盘初始化</strong></p> 
<p>磁盘初始化:<br> Step1:进行<strong>低级格式化(物理格式化)</strong>，将磁盘的各个磁道<strong>划分为扇区</strong>。一个扇区通常可分为头、数据区域(如512B大小)、尾三个部分组成。管理扇区所需要的各种数据结构一般存放在头、尾两个部分，包括扇区校验码(如奇偶校验、CRC循环冗余校验码等，校验码用于校验扇区中的数据是否发生错误)。</p> 
<p>Step2:将磁盘<strong>分区</strong>，每个分区由若干柱面组成(即分为我们熟悉的C盘、D盘、E盘)</p> 
<p>Step3:进行<strong>逻辑格式化</strong>，创建文件系统。包括创建文件系统的根目录、初始化存储空间管理所用的数据结构(如位示图、空闲分区表)</p> 
<p><strong>引导块</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/8e62edc2a78bf6d03bd29cb61638b45e.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>坏块的管理</strong></p> 
<p>坏了、无法正常使用的扇区就是**“坏块”**。这属于硬件故障，操作系统是无法修复的。应该将坏块标记出来，以免错误地使用到它。</p> 
<p>对于简单的磁盘，可以在逻辑格式化时(建立文件系统时)对整个磁盘进行坏块检查，标明哪些扇区是坏扇区，比如:在FAT表上标明。( 在这种方式中，<strong>坏块对操作系统不透明</strong>)</p> 
<p>对于复杂的磁盘，磁盘控制器(磁盘设备内部的一个硬件部件)会维护一个坏块链表。</p> 
<p>在磁盘出厂前进行低级格式化(物理格式化)时就将坏块链进行初始化。</p> 
<p>会保留一些“备用扇区”，用于替换坏块。这种方案称为扇区备用。且这种处理方式中，坏块对操作系统透明。</p> 
<h2><a name="t70"></a><a id="IO_1899"></a>I/O设备的基本概念和分类</h2> 
<h3><a name="t71"></a><a id="IO_1901"></a><strong>什么是I/O设备</strong></h3> 
<p>“I/O”就是“输入/输出”(Input/Output)，I/O设备就是可以将数据输入到计算机，或者可以接收计算机输出数据的外部设备，属于计算机中的硬件部件。</p> 
<p>UNIX系统将外部设备抽象为一种特殊的文件，用户可以使用与文件操作相同的方式对外部设备进行操作。</p> 
<p><strong>I/O设备的分类——按使用特性</strong></p> 
<p><strong>人机交互类外部设备（数据传输速度慢）</strong></p> 
<p>键盘鼠标打印机</p> 
<p><strong>存储设备（数据传输快）</strong></p> 
<p>移动硬盘光盘</p> 
<p><strong>网络通信设备（数据传输速度介于上述之间）</strong></p> 
<p>路由器</p> 
<p><strong>I/O设备的分类——按传输速率</strong></p> 
<p><strong>低速设备、中速设备、高速设备</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/38e50e12a02c91edfaff6a66217ae0bb.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>I/O设备的分类——按信息交换的单位分类</strong></p> 
<p><strong>块设备</strong></p> 
<p>块设备:如磁盘等数据传输的基本单位是“块”。</p> 
<p>传输速率较高，可寻址，即对它可随机地读/写任一块。</p> 
<p><strong>字符设备</strong></p> 
<p>字符设备:鼠标、键盘等数据传输的基本单位是字符</p> 
<p>传输速率较慢，不可寻址，在输入/输出时常采用中断驱动方式</p> 
<h3><a name="t72"></a><a id="IO_1942"></a>I/O控制器</h3> 
<p><strong>机械部件</strong></p> 
<p>I/O设备的机械部件主要用来执行具体I/0操作。如我们看得见摸得着的鼠标/键盘的按钮;显示器的LED屏;移动硬盘的磁臂、磁盘盘面。</p> 
<p><strong>电子部件（I/O控制器、设备控制器）</strong></p> 
<p>I/O设备的电子部件通常是一块插入主板扩充槽的印刷电路板。</p> 
<p>CPU无法直接控制I/O设备的机械部件，因此I/O设 备还要有一个电子部件作为CPU和I/0设备机械部件之间的“中介”，用于实现CPU对设备的控制。</p> 
<p>这个电子部件就是<strong>I/O控制器</strong>，又称<strong>设备控制器</strong>。CPU可控制I/O控制器，又由I/0控制器来控制设备的机械部件。</p> 
<p><strong>I/O控制器的功能</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/08e59923903241726b5de6f72422841f.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>I/O控制器的组成</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/1264e3a7979cff52c4661d481208b61a.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/7d55f1a5534b0fe964d80b807ae06f8a.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t73"></a><a id="IO_1969"></a><strong>I/O控制方式</strong></h3> 
<p>用什么样的方式来控制I/O设备的数据读写。</p> 
<p><strong>程序直接控制方式</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/8b45376bc2cca408a3f1dccd7fe3791e.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>轮询：</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/1712e5a4c9bf5514e2a363638d4b7c89.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>CPU干预的频率：</strong></p> 
<p>很频繁，I/O操作开始之前、完成之后需要CPU介入，并且在等待I/0完成的过程中CPU需要不断地轮询检查。</p> 
<p>**数据传送的单位：**每次读入/写一个字</p> 
<p><strong>数据的流向</strong></p> 
<p>读操作( 数据输入) : I/0设备 →CPU的寄存器→内存<br> 写操作(数据输出) :: 内存&gt;CPU的寄存器→I/O设备<br> 每个字的读/写都需要CPU的帮助</p> 
<p><strong>主要优点和缺点：</strong></p> 
<p>优点:实现简单。在读/写指令之后，加上实现循环检查的一系列指令即可( 因此才称为“程序直接控制方式”)<br> 缺点: CPU和I/O设备只能串行工作，CPU需要一直轮询检查,长期处于“忙等”状态，CPU利用率低。</p> 
<p><strong>中断驱动方式</strong></p> 
<p>引入<strong>中断机制</strong>。由于I/0设备速度很慢，因此在CPU发出读/写命令后，可<strong>将等待I/O的进程阻塞</strong>，先切换到别的进程执行。当I/0完成后，控制器会向CPU发出一个中断信号，CPU<strong>检测到中断信号后</strong>，会保存当前进程的运行环境信息，转去执行中断处理程序处理该中断。处理中断的过程中，CPU从I/0控制器读一个字的数据传送到CPU寄存器，再写入主存。接着，<strong>CPU恢复等待I/O的进程(或其他进程)的运行环境然后继续执行</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/58015774d6fd4f872c26d066ce5f6a9b.png#pic_center" alt="在这里插入图片描述"></p> 
<p>注意：</p> 
<p>①CPU会在每个指令周期的末尾检查中断;<br> ②中断处理过程中需要保存、恢复进程的运行环境,这个过程是需要一定时间开销的。可见，如果中断发生的频率太高，也会降低系统性能。</p> 
<p><strong>CPU的干预频率</strong>：每次I/O操作开始之前、完成之后需要CPU介入。等待I/0完成的过程中CPU可以切换到别的进程执行。</p> 
<p><strong>数据传送的单位</strong> 每次读入/写一个字</p> 
<p><strong>数据的流向</strong></p> 
<p>读操作( 数据输入) : I/0设备 →CPU的寄存器→内存<br> 写操作(数据输出) :: 内存&gt;CPU的寄存器→I/O设备<br> 每个字的读/写都需要CPU的帮助</p> 
<p><strong>主要优点和缺点</strong></p> 
<p><strong>优点</strong> 与“程序直接控制方式”相比，在“中断驱动方式”中，I/0控制器会通过中断信号主动报告1/0已完成，CPU不再需要不停地轮询。<strong>CPU和I/O设备可并行工作</strong>，CPU利用率得到明显提升。<br> <strong>缺点:<strong>每个字在I/O设备与内存之间的传输，都需要经过CPU。而</strong>频繁的中断处理会消耗较多的CPU时间。</strong></p> 
<p><strong>DMA方式</strong></p> 
<p>与“中断驱动方式”相比，DMA方式( Direct Memory Access,<strong>直接存储器存取</strong>。主要用于<strong>块设备的I/0控制</strong>)有这样几个改进:<br> ①数据的传送单位是“<strong>块”</strong>。不再是一个字、一个字的传送;<br> ②数据的流向是从设备直接放入内存，或者从内存直接到设备。不再需要CPU作为“快递小哥”。<br> ③仅在传送一个或多个数据块的开始和结束时，才需要CPU干预。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/5a10b765c8fb0b889d58753d005b2bd8.png#pic_center" alt="在这里插入图片描述"></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/3863629030abea652f9df9ed04dd2492.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>CPU的干预频率</strong>：仅在传送一个或多个数据块的开始和结束时，才需要CPU干预。</p> 
<p><strong>数据传送的单位</strong>：每次读/写一个或多个块(注意:每次读写的只能是连续的多个块，且这些块读入内存后在内存中也必须是连续的)</p> 
<p><strong>数据的流向（不经过CPU）</strong>：</p> 
<p>读操作(数据输入)I/O设备→内存<br> 写操作(数据输出) :内存&gt;I/0设备</p> 
<p><strong>主要优缺点</strong></p> 
<p><strong>优点</strong>:数据传输以“块”为单位，CPU介入频率进一步降低。 数据的传输不再需要先经过CPU再写入内存，数据传输效率进一步增加。CPU和I/O设备的并行性得到提升。<br> <strong>缺点</strong>: CPU每发出一条I/O指令，只能读/写一个或多个连续的数据块。如果要读/写多个离散存储的数据块，或者要将数据分别写到不同的内存区域时，CPU要分别发出多条I/O指令，进行多次中断处理才能完成。</p> 
<p><strong>通道控制方式</strong></p> 
<p>通道: 一种硬件，可以理解为是“弱鸡版的CPU”。通道可以识别并执行一系列通道指令</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/12b997605019ff1b355ddcfdc87a1717.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>CPU的干预频率</strong></p> 
<p>极低，通道会根据CPU的指示执行相应的通道程序，只有完成一组数据块的读/写后才需要发出中断信号，请求CPU干预。</p> 
<p><strong>数据传送的单位</strong>：每次读写一组数据块</p> 
<p><strong>数据的流向(在通道的控制下进行)</strong><br> 读操作( 数据输入) : I/O设备&gt;内存<br> 写操作(数据输出) :内存&gt;I/O设备<br> <strong>主要缺点和主要优点</strong><br> **缺点:**实现复杂，需要专门的通道硬件支持<br> <strong>优点</strong>: CPU、通道、I/O设 备可并行工作，资源利用率很高。</p> 
<p><strong>IO控制方式总结</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/2a55426219567d17135cfd6b4136fd73.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t74"></a><a id="IO_2079"></a>I/O软件层次结构</h3> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/616565d2b2876a970eaf93f8b5e549dd.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>用户层软件</strong></p> 
<p>用户层软件实现了与用户交互的接口，用户可直接使用该层提供的、与I/0操作相关的库函数对设备进行操作。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/f9f4435eb17650f1a9797f64b9014b6a.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>设备独立性软件</strong></p> 
<p>设备独立性软件，又称设备无关性软件。与设备的硬件特性无关的功能几乎都在这一层实现。</p> 
<p><strong>主要实现了设备的保护、差错处理、设备的分配与回收、数据缓冲区管理、建立逻辑设备名到物理设备名的映射关系:根据设备类<br> 型选择调用相应的驱动程序</strong></p> 
<p><strong>设备驱动程序</strong></p> 
<p>主要负责对硬件设备的具体控制，将.上层发出的一系列命令(如read/write)转化成特定设备“能听得懂”的一系列操作。包括设置<br> 设备寄存器:检查设备状态等</p> 
<p>不同的I/O设备有不同的硬件特性，具体细节只有设备的厂家才知道。因此厂家需要根据设备的硬件特性设计并提供相应的驱动程序。</p> 
<p>驱动程序一般会以一个独立进程的方式存在。</p> 
<p><strong>中断处理程序</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/9d94c40232cb2ac6a7cbe2899b3c001d.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t75"></a><a id="IO_2112"></a>I/O核心子系统</h3> 
<p><strong>I/O调度</strong></p> 
<p>用某一种算法确定一个好的顺序来处理各个I/O请求。</p> 
<p><strong>设备保护</strong></p> 
<p>在UNIX系统中，设备被看做是一种特殊的文件，每个设备也会有对应的FCB。当用户请求访问某个设备时，系统根据FCB中记录的信息来判断该用户是否有相应的访问权限，以此实现“设备保护”的功能。</p> 
<h3><a name="t76"></a><a id="SPOOLing_2122"></a>假脱机技术（SPOOLing技术）</h3> 
<p><strong>什么是脱机技术，可以解决什么问题</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/346fc9cf1755f630fd74e77f814c7f36.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>假脱机技术</strong></p> 
<p>“假脱机技术”，又称“SPOOLing技术”是用<strong>软件的方式模拟脱机技术</strong>。</p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/a7ae02399c79786390d72c5aa9449744.png#pic_center" alt="在这里插入图片描述"></p> 
<h3><a name="t77"></a><a id="_2139"></a>设备的分配和回收</h3> 
<p><strong>设备分配时应该考虑的因素</strong>：设备的固有属性，设备分配算法，设备分配中的安全性。</p> 
<p>设备的固有属性可分为三种：独占设备、共享设备、虚拟设备。</p> 
<p>独占设备——一个时段只能分配给一个进程(如打印机)。<br> 共享设备——可同时分配给多个进程使用(如磁盘)，各进程往往是宏观上同时共享使用设备，而微观上交替使用。<br> 虚拟设备——采用SPOOLing技术将独占设备改造成虚拟的共享设备，可同时分配给多个进程使用( 如采用SPOOLing技术实现的共享打印机)</p> 
<p><strong>设备分配算法</strong>：先来先服务、优先级高者先服务、短任务优先等。。</p> 
<p><strong>设备分配中的安全性</strong></p> 
<p><strong>安全分配方式</strong> 为进程分配一一个设备后就将进程阻塞，本次I/0完成后才将进程唤醒。优点：破坏了请求和保持条件，不会死锁。缺点：对于一个进程来说，CPU和I/O设备只能串行工作</p> 
<p><strong>不安全分配方式</strong>：进程发出I/0请求后，系统为其分配I/0设备，进程可继续执行，之后还可以发出。新的I/O请求。只有某个i/0请求得不到满足时才将进程阻塞。优点：效率高。缺点：可能会发生死锁。</p> 
<p><strong>静态分配和动态分配</strong></p> 
<p>静态分配：进程运行前为其分配全部所需资源，运行结束后归还资源（破坏了“请求和保持”条件，不会发生死锁）</p> 
<p>动态分配：进程运行过程中动态申请设备资源</p> 
<p><strong>设备分配管理中的数据结构</strong></p> 
<p><strong>设备控制表(DCT)</strong> :系统为每个设备配置-张DCT，用于记录设备情况。</p> 
<p><strong>控制器控制表(COCT)</strong> :每个设备控制器都会对应一张COCT。操作系统根据COCT的信息对控制器进行操作和管理。</p> 
<p><strong>通道控制表(CHCT)</strong> 每个通道都会对应一张CHCT。 操作系统根据CHCT的信息对通道进行操作和管理。</p> 
<p><strong>系统设备表(SDT)</strong> :记录了系统中全部设备的情况，每个设备对应一个表目。</p> 
<p><strong>设备分配的步骤</strong></p> 
<p>①根据进程请求的物理设备名查找SDT(注:物理设备名是进程请求分配设备时提供的参数)<br> ②根据SDT找到DCT，若设备忙碌则将进程PCB挂到设备等待队列中，不忙碌则将设备分配给进程。<br> ③根据DCT找到COCT，若控制器忙碌则将进程PCB挂到控制器等待队列中，不忙碌则将控制器分配给进程。<br> ④根据COCT找到CHCT，若通道忙碌则将进程PCB挂到通道等待队列中，不忙碌则将通道分配给进程。</p> 
<p><strong>缺点</strong>：</p> 
<p>①用户编程时必须使用“物理设备名底层细节对用户不透明，不方便编程<br> ②若换了一个物理设备，则程序无法运行<br> ③若进程请求的物理设备正在忙碌，则即使系统中还有同类型的设备，进程也必须阻塞等待</p> 
<p><strong>设备分配步骤的改进</strong></p> 
<p>①根据进程请求的逻辑设备名查找SDT (注:用户编程时提供的逻辑设备名其实就是“设备类型”)<br> ②查找SDT，找到用户进程指定类型的、并且空闲的设备，将其分配给该进程。操作系统在逻辑设备表(LUT)中新增一个表项。<br> ③根据DCT找到COCT，若控制器忙碌则将进程PCB挂到控制器等待队列中，不忙碌则将控制器分配给进程。<br> ④根据COCT找到CHCT，若通道忙碌则将进程PCB挂到通道等待队列中，不忙碌则将通道分配给进程。</p> 
<h3><a name="t78"></a><a id="_2193"></a>缓冲区管理</h3> 
<p><strong>什么是缓冲区？有什么作用？</strong></p> 
<p>缓冲区是一个存储区域，可以由专门的硬件寄存器组成，也可利用内存作为缓冲区。<br> 使用<strong>硬件作为缓冲区的成本较高，容量也较小</strong>，一般仅用在对速度要求非常高的场合(如存储器管理中所用的联想寄存器，由于对页表的访问频率极高，因此使用速度很快的联想寄存器来存放页表项的副本)<br> 一般情况下，更多的是利用<strong>内存作为缓冲区</strong>，“设备独立性软件”的缓冲区管理就是要组织管理好这些缓冲区。</p> 
<p><strong>缓冲区的作用</strong></p> 
<p><img src="https://img-blog.csdnimg.cn/img_convert/515c71b170151c3ac54d113239733eb9.png#pic_center" alt="在这里插入图片描述"></p> 
<p><strong>单缓冲</strong></p> 
<p>假设某用户进程请求某种块设备读入若干块的数据。若采用单缓冲的策略，操作系统会在主存中为其分配一个缓冲区(若题目中没有特别说明，一个缓冲区的大小就是一个块)。</p> 
<p><strong>注意</strong>:当缓冲区数据非空时，不能往缓冲区冲入数据，只能从缓冲区把数据传出;当缓冲区为空时，可以往缓冲区冲入数据，但必须把缓冲区充满以后，才能从缓冲区把数据传出。</p> 
<p>采用单缓冲策略：处理一块数据平均耗时Max（C,T）+M</p> 
<p><strong>双缓冲</strong></p> 
<p>假设某用户进程请求某种块设备读入若干块的数据。若采用双缓冲的策略，操作系统会在主存中为其分配两个缓冲区(若题目中没有特别说明，一个缓冲区的大小就是个一块)</p> 
<p><strong>循环缓冲</strong></p> 
<p>将多个大小相筹的缓冲区链接成一个循环队列。</p> 
<p><strong>缓冲池</strong></p> 
<p>缓冲池由系统中共用的缓冲区组成。这些缓冲区按使用状况可以分为:空缓冲队列、装满输入数据的缓冲队列(输入队列)、装满输出数据的缓冲队列(输出队列)。</p> 
<p>另外，根据一个缓冲区在实际运算中扮演的功能不同，又设置了四种工作缓冲区:用于收容输入数据的工作缓冲区(hin) 、用于提取输入数据的工作缓冲区(sin) 、用于收容输出数据的工作缓冲区(hout) 、用于提取输出数据的工作缓冲区(sout)</p> 
<h3><a name="t79"></a><a id="_2230"></a>别忘了一键三连！！！</h3>
                </div>

