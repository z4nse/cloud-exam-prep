# COMP90024 Cluster & Cloud Computing — 200 Deep Practice MCQs

Weeks 1–10 · **scenario / diagnostic style** — symptom-to-cause, what-happens-if, best-fix, and two-plausible-answer traps. Some are multiple-answer (**Select all that apply**).

Options are parallel in length; the reasoning is only in the answer key, so phrasing won't give the answer away. Correct answers spread evenly across A–D.


---

## Contents

- [Week 1 - Big Picture & Course Drivers](#week-1) — 20 questions
- [Week 2 - Parallel & Distributed Systems, Flynn's Taxonomy, MPI](#week-2) — 20 questions
- [Week 3 - HPC, SPARTAN, SLURM, mpi4py](#week-3) — 20 questions
- [Week 4 - Cloud Computing, OpenStack, MRC/NeCTAR](#week-4) — 20 questions
- [Week 5 - Docker & Containerisation, CI/CD intro](#week-5) — 20 questions
- [Week 6 - Container Orchestration & Kubernetes](#week-6) — 20 questions
- [Week 7 - FaaS / Fission (Serverless)](#week-7) — 20 questions
- [Week 8 - Distributed DBMS, CAP, CouchDB/PostgreSQL/ElasticSearch](#week-8) — 20 questions
- [Week 9 - Virtualisation & Hypervisors](#week-9) — 20 questions
- [Week 10 - Security & Clouds](#week-10) — 20 questions


## Week 1 - Big Picture & Course Drivers

<a name="week-1"></a>

**1.** Your pipeline processes a 400GB log set comfortably on one 512GB-RAM server in 20 minutes. By the course's definition, this dataset is:

- A. big data, because logs are unstructured
- B. big data, because it exceeds 100GB
- C. not big only if it is under 1TB
- D. not really 'big', since a single server handles it

**2.** A colleague reruns last year's analysis code and gets different numbers. The most course-relevant explanation is:

- A. Python is non-deterministic by design
- B. the CPU is faster now
- C. the data doubled overnight
- D. software/compiler/option drift broke reproducibility

**3.** You move a working serial program onto SPARTAN expecting it to run faster automatically. It does not. Why?

- A. the scheduler does not parallelise your code for you
- B. the login node is faster
- C. serial code is banned
- D. SPARTAN throttles serial code

**4.** Which observations would each count as a distinct 'Big X' driver in the course framing? (Select all that apply) *(Select all that apply)*

- A. a faster single CPU clock (Big Speed)
- B. a dataset too large for one machine (Big Data)
- C. a simulation needing thousands of cores (Big Compute)
- D. cross-institution data sharing (Big Collaboration)

**5.** A volunteer-computing project (idle home PCs worldwide) versus a fast-interconnect HPC rack differ mainly in that the former is:

- A. tightly coupled with shared memory
- B. loosely coupled with pooled, intermittent resources
- C. a single SMP machine
- D. an MPI ring on one node

**6.** A distributed job intermittently produces wrong totals under load. The most course-relevant root cause is:

- A. using Python instead of Java
- B. too few CPU cores
- C. delayed or lost messages / shared-state issues
- D. disk fragmentation

**7.** Reading a 2GB file fully into a dict works for the small test file but the big file crashes the node. The fix that also scales horizontally is to:

- A. stream/process line-by-line without loading all into memory
- B. request a bigger login node
- C. compress the file first
- D. switch to a relational database

**8.** Which scenarios are explicitly within the course's stated outcomes? (Select all that apply) *(Select all that apply)*

- A. deploying a scalable app on the cloud
- B. submitting MPI jobs on an HPC system
- C. building a team software system end-to-end
- D. fabricating a custom GPU

**9.** Adding a second node to your HPC job gives almost no speedup over one node. The most plausible reason is:

- A. two nodes share one core
- B. nodes always halve performance
- C. inter-node communication overhead offsets the gains for this workload
- D. the data shrank automatically

**10.** You run heavy compute directly on the shared login node 'just this once'. The course's objection is that this:

- A. makes your code faster but is rude
- B. is the only correct way to submit
- C. uses no resources
- D. degrades the shared node for all other users

**11.** You benchmark on a busy HPC node Monday morning, then again Sunday night, and get very different times. The most defensible way to report performance is to:

- A. quote the slowest run only
- B. run multiple trials and acknowledge shared-system contention
- C. assume timing is deterministic
- D. quote the single fastest run

**12.** A startup says 'we have big data - it's 50GB'. By the course's lens, the better question to ask is:

- A. is it on the cloud?
- B. is it encrypted?
- C. can a single server still process it comfortably?
- D. is it in JSON?

**13.** Which is the clearest example of 'Big Distribution' rather than 'Big Compute'?

- A. a single huge matrix multiply on one supercomputer
- B. one server with 128 cores
- C. a faster CPU clock
- D. data and services spread across many geographic sites

**14.** Your reproducibility breaks because a library minor-version bump changed a default. The course framing calls this:

- A. a network partition
- B. software/version drift undermining reproducibility
- C. a scheduling bug
- D. a hardware fault

**15.** A loosely coupled system's defining weakness compared to a tightly coupled HPC rack is:

- A. it must use one OS image
- B. it cannot pool resources
- C. it has no CPUs
- D. higher latency / unreliable interconnects between nodes

**16.** Which best distinguishes Big Compute from Big Data as drivers?

- A. Big Compute is about FLOPs/cores; Big Data is about volume/distribution of data
- B. Big Compute needs no CPU
- C. they are the same thing
- D. Big Data needs no storage

**17.** A program is embarrassingly parallel but you still see poor speedup. A likely non-algorithmic cause on a shared cluster is:

- A. the data is too small to matter
- B. resource contention/IO bottlenecks rather than the parallel logic
- C. Python cannot parallelise
- D. MPI is broken

**18.** Which would you classify as a hybrid setup?

- A. loosely coupled volunteer nodes feeding a tightly coupled HPC backend
- B. a single laptop
- C. one SMP server
- D. a single VM

**19.** The strongest reason the course pairs teamwork with technical content is that real systems are:

- A. always built solo
- B. built without version control
- C. built collaboratively by teams, like industry
- D. never deployed

**20.** A dataset fits in RAM today but is projected to 10x next year. The forward-looking design choice is to:

- A. store it in a single file only
- B. stream/partition so the same code scales out later
- C. buy one giant server forever
- D. hard-code the in-memory approach


## Week 2 - Parallel & Distributed Systems, Flynn's Taxonomy, MPI

<a name="week-2"></a>

**21.** A teammate flags as a 'bug' that your 4-process MPI HelloWorld prints ranks in the order 2,0,3,1. Your best response:

- A. explain that asynchronous independent processes interleave I/O non-deterministically
- B. switch to single-process mode
- C. add a sleep to fix the bug
- D. agree - output must be ordered by rank

**22.** A safety system runs several independent verification algorithms over the same incoming sensor stream and votes on results. In Flynn's taxonomy this is closest to:

- A. SIMD
- B. SISD
- C. MISD
- D. MIMD

**23.** You call MPI_COMM_RANK before MPI_Init in a C program. The most likely outcome is:

- A. it finalises the program
- B. undefined/erroneous behaviour because MPI isn't initialised
- C. it auto-initialises MPI
- D. it returns rank 0 safely

**24.** On a single shared-memory multicore server you need fine-grained threads sharing one address space. The better fit is:

- A. openMP multithreading
- B. a Docker SWARM
- C. openMPI message passing
- D. a distributed-memory MPI cluster

**25.** Two MPI ranks on different nodes must exchange a value. Choosing 'just read each other's variable' fails because:

- A. the ranks are identical
- B. MPI forbids integers
- C. distributed-memory nodes share no address space; you must send/recv
- D. variables are read-only in MPI

**26.** Which would correctly classify under MIMD? (Select all that apply) *(Select all that apply)*

- A. a single vector unit applying one op to many elements
- B. a multi-node simulation with per-rank workloads
- C. a modern HPC cluster running different processes on different data
- D. an SMP server with independent threads on shared memory

**27.** Your SMP program is correct but slower than expected. A characteristic SMP cost you may have overlooked is:

- A. the lack of any shared memory
- B. inter-processor communication/coordination over the bus
- C. the inability to run an OS
- D. a missing hypervisor

**28.** MPI_COMM_SIZE returns 1 even though you expected 4 processes. The most likely cause:

- A. the cluster has one core total
- B. MPI_COMM_SIZE always returns 1
- C. you launched without 'mpirun -np 4' (so only one process exists)
- D. rank 0 hides the others

**29.** You need one process to send the same configuration to all others at start-up. The most appropriate MPI pattern is:

- A. shared-memory write
- B. point-to-point only, in a loop you write
- C. a broadcast (one-to-many) collective
- D. MPI_Finalize

**30.** A program decomposes a problem into sub-tasks that split, run, then join results on one node. This pattern is most aligned with:

- A. disk sharding
- B. network routing
- C. shared-memory task decomposition (openMP-style)
- D. distributed message passing across nodes

**31.** Your MPI code deadlocks: every rank calls MPI_Recv before any MPI_Send. The root cause is:

- A. a classic send/recv ordering deadlock (all blocked waiting to receive)
- B. too few cores
- C. MPI_Init was skipped
- D. the data is too large

**32.** A vectorised image filter applies the same operation to every pixel simultaneously. This is best classified as:

- A. MIMD
- B. MISD
- C. SISD
- D. SIMD

**33.** You scale an openMP program from 4 to 32 threads on one node but gains plateau. A likely cause is:

- A. memory-bandwidth/contention limits on the shared-memory node
- B. qcow2 overhead
- C. the network is slow
- D. MPI overhead

**34.** Choosing between openMP and MPI for a job that spans 10 separate servers, you pick MPI because:

- A. MPI is multithreaded
- B. openMP needs Docker
- C. openMP threads can't span separate machines' memory; MPI passes messages between them
- D. openMP is slower in general

**35.** MPI_COMM_WORLD represents:

- A. rank 0
- B. the master node only
- C. the default communicator containing all launched processes
- D. the finalize handle

**36.** Which pair of MPI calls is essential to bracket any MPI program? (Select all that apply) *(Select all that apply)*

- A. MPI_Init at the start
- B. MPI_Comm_rank to get an ID
- C. MPI_Sleep between sends
- D. MPI_Finalize at the end

**37.** A reviewer insists MISD is common in everyday computing. The accurate correction:

- A. MISD is the default for laptops
- B. MISD is rare; its niche is fault-tolerant redundant checking
- C. MISD cannot exist
- D. MISD equals MIMD

**38.** Why is SMP described as 'more complex to program' than a uniprocessor despite a single OS?

- A. it cannot run threads
- B. it has no memory
- C. it needs a hypervisor
- D. you must reason about inter-processor coordination/communication, not just CPU logic

**39.** A distributed-memory job's correctness depends on message ordering. The course warns this is risky because:

- A. ranks share one address space
- B. messages are always instant
- C. MPI guarantees global locks
- D. messages can be delayed or lost, and state isn't shared

**40.** Data parallelism vs task parallelism: splitting one dataset across workers doing the same op is:

- A. MISD
- B. task parallelism
- C. SISD
- D. data parallelism


## Week 3 - HPC, SPARTAN, SLURM, mpi4py

<a name="week-3"></a>

**41.** Your sbatch script sets '--ntasks=4' but the program still uses only one core. The most likely cause:

- A. SLURM ignores ntasks
- B. the node has one core
- C. ntasks must be 1
- D. you ran 'python script.py' instead of launching it under mpirun/srun

**42.** Two identical runs of your benchmark on SPARTAN give noticeably different wall times. The best explanation:

- A. the binary changed between runs
- B. wall time is random in Linux
- C. contention from other users' jobs on the shared system perturbs timing
- D. your timer is broken

**43.** A job sits in the queue, then fails instantly with a module error. The most likely fix is to:

- A. increase --time
- B. reduce --ntasks to 0
- C. submit from the login node directly
- D. load the required modules (compiler/MPI/mpi4py) in the script

**44.** You set '--nodes=2 --ntasks=8' and your byte-partitioned MPI app runs no faster than '--nodes=1 --ntasks=8'. The most plausible reason:

- A. the file got smaller
- B. SLURM caps at one node
- C. 8 cores is the hardware ceiling
- D. inter-node communication overhead cancels the extra node's benefit here

**45.** Rank 0 computes byte boundaries and scatters them; ranks process and return counts. If a chunk boundary lands mid-record, the correct handling is to:

- A. ignore partial records silently
- B. discard the whole chunk
- C. have each rank adjust to the nearest newline before processing
- D. merge all chunks on rank 1

**46.** Which SLURM directives would you legitimately combine in one A1 script? (Select all that apply) *(Select all that apply)*

- A. --ntasks and --cpus-per-task
- B. --job-name and --time
- C. --nodes for multi-node runs
- D. --docker-image to pull a container

**47.** You want 100 near-identical parameter runs without writing 100 scripts. The cleanest SLURM mechanism is:

- A. running them on the login node
- B. one giant sequential job
- C. a job array
- D. a Docker Compose stack

**48.** Your A1 report shows 1->8 cores gave ~10x speedup but optimised JSON parsing then cut times further. This illustrates that:

- A. speedup is fixed by node count
- B. adding cores is the only lever
- C. optimisation never helps
- D. algorithmic/library choices (e.g. faster JSON) also drive performance

**49.** Job B must run only after Job A succeeds. The SLURM feature to use is:

- A. a job array
- B. a job dependency
- C. a higher --time on A
- D. running both on the login node

**50.** On a shared HPC facility, the A1 instructions say to measure runtime as:

- A. the fastest single rank
- B. only rank 0's time
- C. first-job start to last-job finish, queue time ignored
- D. including queue time

**51.** Your A1 app reads the whole file into a list on rank 0 then scatters strings; it OOMs on the big file. The better design:

- A. use a bigger flavor
- B. have each rank stream its own byte range from disk, aligning to newlines
- C. run on the login node
- D. convert to CSV

**52.** A job dies after exactly 10 minutes though the work needs 30. The most likely cause:

- A. the '--time' limit was set too low and SLURM killed it
- B. missing module load
- C. too many cores
- D. wrong availability zone

**53.** You request '--ntasks=8' on one node but the node only has 4 cores. The likely effect:

- A. the job is rejected as illegal syntax
- B. SLURM adds cores
- C. oversubscription/contention as 8 tasks share 4 cores
- D. it runs 8 fully parallel cores

**54.** Two ranks must combine partial language counts into a global total. The natural MPI step is:

- A. MPI_Finalize
- B. a gather/reduce of local counts to rank 0
- C. broadcast from every rank
- D. each rank writes its own file and you merge by hand

**55.** Your speedup from 1 to 8 cores is ~6x, not 8x. The most principled explanation:

- A. Amdahl-style serial fractions/overhead limit ideal linear speedup
- B. the cluster is broken
- C. JSON is unparseable
- D. you used too few nodes

**56.** You see the job running on the login node by mistake. The correct remedy:

- A. cancel it and resubmit via sbatch to compute nodes
- B. switch to Docker
- C. add more --time
- D. leave it - login nodes are for compute

**57.** Which combination correctly scales a single MPI program across two servers? (Select all that apply) *(Select all that apply)*

- A. launching via mpirun/srun
- B. --nodes=2
- C. adding --network host
- D. --ntasks set to span both nodes

**58.** orjson replaced json and cut parse time substantially. This demonstrates that on HPC:

- A. per-task library/algorithm efficiency also drives wall time
- B. parsing is free
- C. optimisation is pointless
- D. only core count matters

**59.** A job array of 100 tasks each processes one input shard. The benefit over a manual loop is:

- A. the scheduler manages and parallelises the many similar tasks
- B. it needs no SLURM
- C. it runs on the login node
- D. it serialises everything

**60.** Reporting A1 timing, you exclude queue wait because the assignment focuses on:

- A. queue optimisation
- B. network latency
- C. the application's run time and HPC benchmarking lessons
- D. billing


## Week 4 - Cloud Computing, OpenStack, MRC/NeCTAR

<a name="week-4"></a>

**61.** You launch an MRC VM with the default network and try to SSH from home but it times out. The most likely cause:

- A. the image has no SSH server by default
- B. the flavor is too small
- C. Nova is down
- D. the private IP needs the UniMelb VPN from off-campus

**62.** Your 'openstack server create' command fails with an authentication error before doing anything. The first thing to check:

- A. whether you sourced the OpenRC file (auth env vars)
- B. the availability zone
- C. the flavor name
- D. the security group

**63.** You created a 10GB volume but the VM still shows the original disk size. The missing step is most likely:

- A. attaching (and then mounting) the volume to the instance
- B. creating a new security group
- C. resizing the flavor
- D. rebooting Nova

**64.** Web traffic to your instance on port 80 is refused, though the app is running. The most likely fix:

- A. switch image format to qcow2
- B. change the flavor
- C. add a security-group rule allowing inbound TCP/80
- D. source a different OpenRC

**65.** Which of these correctly attribute an OpenStack responsibility? (Select all that apply) *(Select all that apply)*

- A. Keystone handles identity
- B. Cinder provides object storage
- C. Nova spawns/schedules VMs
- D. Glance serves disk images

**66.** You need thin-provisioned VM disks that only consume space as data is written. The image format to prefer:

- A. csv
- B. qcow2
- C. vhd-fixed
- D. raw

**67.** Two students both 'openstack server create' but one says object-action feels backwards. The correct convention is:

- A. action-object, like kubectl
- B. object-action (e.g. 'server create')
- C. verb-only
- D. there is no convention

**68.** Your project can't launch the large flavor you want. The most likely reason:

- A. the volume is detached
- B. the image is missing
- C. your project quota caps compute/memory/storage
- D. the VPN is off

**69.** A teammate claims PaaS gives you raw VMs to administer. The accurate correction:

- A. that's IaaS; PaaS abstracts the platform so you deploy apps without managing the OS
- B. they're identical
- C. PaaS manages your application logic for you
- D. PaaS gives bare metal only

**70.** You want repeatable, reviewable cloud provisioning instead of clicking the Horizon UI. The right category of tool:

- A. a container registry
- B. a hypervisor
- C. Infrastructure-as-Code (Terraform/Ansible)
- D. a word processor

**71.** Your instance has a public-looking task but only a private IP. A teammate off-campus can't reach it. Besides VPN, a valid alternative the course notes is constrained by:

- A. limited resource allocation may prevent assigning externally-accessible IPs
- B. unlimited public IPs for all
- C. Glance image formats
- D. the flavor's RAM

**72.** You attached a volume but 'df -h' shows no extra space. The remaining step is to:

- A. resize the flavor
- B. restart Keystone
- C. create another volume
- D. format and mount the attached volume in the guest

**73.** 'openstack server create' succeeds but the VM is unreachable on SSH (port 22). Most likely:

- A. the flavor is too big
- B. no security-group rule allows inbound TCP/22
- C. the image lacks a kernel
- D. OpenRC wasn't sourced (it would have failed earlier)

**74.** Mapping OpenStack services: which assignment is wrong?

- A. Glance = identity/auth
- B. Neutron = networking
- C. Cinder = block storage
- D. Swift = object storage

**75.** You want repeatable cloud provisioning that a reviewer can diff in Git. The friends report used:

- A. Ansible (Infrastructure as Code) for bootstrapping
- B. a single shell command run once
- C. manual Horizon clicks
- D. no automation

**76.** A thin-provisioned image grows as data is written; a colleague picks 'raw' and wastes space. Better choice and why:

- A. raw, because it's compressed
- B. qcow2, because copy-on-write allocates lazily
- C. csv, because it's small
- D. vhd-fixed, because it pre-allocates

**77.** Which steps belong to provisioning a usable VM with extra disk? (Select all that apply) *(Select all that apply)*

- A. add a security-group rule for needed ports
- B. create the instance
- C. create and attach a volume
- D. push a Docker image to Hub

**78.** Your CLI commands suddenly fail with 'Missing value auth-url' mid-session. The cause:

- A. the volume detached
- B. the AZ is wrong
- C. the flavor expired
- D. the OpenStack auth env vars (OpenRC) aren't sourced in this shell

**79.** Magnum's relationship to your Week 6 k8s cluster is that it:

- A. provisions the cluster's VMs/resources from a template
- B. runs your containers directly
- C. replaces kubectl
- D. stores images

**80.** You need block storage that persists if the VM is deleted. The service:

- A. Neutron networks
- B. Swift object storage only
- C. Glance images
- D. Cinder block volumes


## Week 5 - Docker & Containerisation, CI/CD intro

<a name="week-5"></a>

**81.** You start two containers each with '-p 8080:80' on the same host; the second fails to bind. The reason:

- A. host port 8080 is already taken by the first container
- B. Docker forbids two containers
- C. port 80 is illegal
- D. images can't be reused

**82.** 'curl localhost:80' reaches your nginx container with '--network host' on an Ubuntu server, but the same trick fails on Docker Desktop for Mac. Why?

- A. nginx is Linux-only
- B. Macs block port 80
- C. host mode needs a SHA
- D. Docker Desktop runs in a hidden Linux VM, so 'host' is the VM's network, not the laptop's

**83.** Your image runs locally but a teammate's 'docker pull yourname/app' fails. The most likely omission:

- A. you never tagged and pushed the image to the registry
- B. you didn't run the container
- C. you used the wrong CPU
- D. the Dockerfile lacked EXPOSE

**84.** After editing only the last line of a long Dockerfile, the rebuild is fast and reuses earlier steps. This is because Docker:

- A. always rebuilds everything
- B. caches unchanged layers and rebuilds from the first changed instruction
- C. compresses the image
- D. skips the build

**85.** You want each container to have its own IP yet still expose ports to the host on a single machine. The default driver that fits:

- A. none
- B. overlay
- C. host
- D. bridge

**86.** Which statements about containers vs VMs hold in a troubleshooting context? (Select all that apply) *(Select all that apply)*

- A. a container sharing the host kernel explains its small footprint
- B. a container starting in seconds vs a VM in minutes is expected
- C. needing stronger isolation may justify a VM over a container
- D. a container can boot a different OS kernel than the host

**87.** You need to manage cooperating containers (nginx + app + db) on a single host for local dev. The right tool:

- A. Docker Compose
- B. Kubernetes Ingress
- C. Docker SWARM
- D. Magnum

**88.** A reviewer says SWARM and Kubernetes are interchangeable. The fair correction:

- A. SWARM is a database
- B. both manage containers across nodes, but K8s adds far richer abstractions/tooling
- C. SWARM has more abstractions than K8s
- D. K8s only runs on one host

**89.** Your CI passes tests but nothing reaches production automatically. To get auto-deploy after CI you need:

- A. a bigger VM
- B. a new registry
- C. a Continuous Delivery (CD) stage
- D. more unit tests

**90.** 'docker ps' shows nothing though you just 'docker create'd a container. Why?

- A. create also starts it
- B. the image was deleted
- C. ps is broken
- D. create makes the container but doesn't start it; use 'docker ps -a' or 'docker start'

**91.** Your Dockerfile installs deps in an early layer, then copies code last. After a code-only change, rebuild is fast because:

- A. the image is recompressed
- B. Docker rebuilds everything anyway
- C. the dependency layer is cached; only the changed code layer rebuilds
- D. layers are ignored

**92.** Two containers must both serve on port 80 of the host. The clean solution is to:

- A. delete one image
- B. use --network host for both
- C. run them in the same container
- D. map them to different host ports (e.g. 8080:80 and 8081:80) or use a reverse proxy

**93.** A CI build passes but the deployed container behaves differently from local. A common Docker cause is:

- A. the registry is down
- B. an unpinned base image tag (':latest') pulled a different version
- C. ports are illegal
- D. Compose is required

**94.** Choosing an orchestrator: you only need several cooperating containers on one dev laptop. Overkill would be:

- A. a full Kubernetes cluster
- B. Docker Compose
- C. docker run with -p
- D. a single Dockerfile

**95.** Which are accurate about Docker isolation? (Select all that apply) *(Select all that apply)*

- A. isolation is process-level, lighter than a VM
- B. it uses kernel namespaces and cgroups
- C. containers share the host kernel
- D. each container boots its own kernel

**96.** A teammate can build your image but can't run it because a needed env var is missing. The fix in the run command is:

- A. docker ps -a
- B. docker rm
- C. docker tag
- D. docker run -e VAR=value (or set it in the image/compose)

**97.** 'docker run' on Docker Desktop (Mac) with '-p 8080:80' works to reach the app, but '--network host' doesn't expose to the laptop. Why the difference?

- A. port-mapping (-p) is bridged out of the VM, while 'host' refers to the hidden VM's network
- B. -p is illegal on Mac
- C. host mode is faster
- D. both should behave identically

**98.** You want the smallest possible footprint and fastest start for a stateless microservice. Prefer:

- A. a full VM per service
- B. a hypervisor per service
- C. a container sharing the host kernel
- D. bare metal install

**99.** CI vs CD in one line:

- A. CI deploys; CD tests
- B. CD is manual only
- C. they are identical
- D. CI integrates/tests changes; CD auto-releases after CI passes

**100.** A repository on Docker Hub holds many tagged builds of one app. 'app:1.2' vs 'app:latest' differ in that:

- A. they are always identical
- B. tags are random
- C. ':latest' is the oldest
- D. tags label specific versions; ':latest' is a moving pointer


## Week 6 - Container Orchestration & Kubernetes

<a name="week-6"></a>

**101.** You updated a ConfigMap but pods still serve the old value. The correct way to apply it without downtime:

- A. delete the namespace
- B. scale replicas to 0 permanently
- C. edit etcd directly
- D. kubectl rollout restart the deployment (rolling, one pod at a time)

**102.** A pod's Service exists, but an external browser can't reach it. The most likely missing piece:

- A. an Ingress (or a port-forward) for external access
- B. a second replica
- C. a Secret
- D. a ConfigMap

**103.** 'kubectl apply -f app.yaml' reports success but 'kubectl get pods' shows nothing. The likely cause:

- A. you're looking in the wrong namespace (forgot -n)
- B. pods take days to appear
- C. apply doesn't create pods
- D. the manifest was empty

**104.** 'kubectl top pods' shows a pod using '480Mi' and '7m'. This means:

- A. 480 mebibytes RAM and 7 millicores CPU
- B. 480 cores and 7 GB
- C. 480 MB disk and 7 MB RAM
- D. 480 megabits and 7 milliseconds

**105.** You need to reach a pod's port from your laptop for a quick test but have no Ingress set up. The simplest tool:

- A. create a public LoadBalancer
- B. edit the firewall
- C. kubectl port-forward to localhost
- D. redeploy as a DaemonSet

**106.** A Deployment with 'replicas: 3' loses a pod to a node crash. Kubernetes will:

- A. schedule a replacement to restore three
- B. scale to zero
- C. leave two pods running
- D. delete the deployment

**107.** You want to preview the YAML a command would create, without changing the cluster. The flag:

- A. --dry-run=client -o yaml
- B. --force
- C. --wait
- D. --all-namespaces

**108.** Which objects can you legitimately place inside a namespace? (Select all that apply) *(Select all that apply)*

- A. a ConfigMap
- B. a Node
- C. a Deployment
- D. a Service

**109.** You provisioned a k8s cluster on MRC and now want to add worker nodes. The right command family:

- A. fission specs apply
- B. docker swarm join
- C. kubectl scale deployment
- D. openstack coe cluster resize (Magnum)

**110.** An external request to your app traverses which order?

- A. client -> node -> configmap -> pod
- B. client -> ingress -> service -> pod
- C. client -> secret -> service -> pod
- D. client -> pod -> service -> ingress

**111.** Your app pods read a DB password from a Secret. After rotating the Secret, pods still use the old value because:

- A. kubectl apply deletes them
- B. Secrets are write-only
- C. Secrets can't change
- D. mounted/injected values are read at pod start; pods need a restart to pick up changes

**112.** A Service of type ClusterIP works inside the cluster but a browser on your laptop can't reach it. The two valid ways to reach it are: (Select all that apply) *(Select all that apply)*

- A. use kubectl port-forward
- B. change it to a public hostname via Ingress routing
- C. add an Ingress
- D. delete the namespace

**113.** 'kubectl get pods' shows nothing right after a successful apply. Before assuming failure, check:

- A. that pods take hours
- B. that apply doesn't make pods
- C. whether you specified the correct namespace (-n)
- D. the cluster is deleted

**114.** A node reports 'cpu 1315m (16%)'. The '1315m' means:

- A. 1315 MB
- B. 1315 watts
- C. 1315 MHz
- D. 1315 millicores (~1.3 vCPU)

**115.** You need to keep three replicas of a stateless web pod healthy and self-healing. The right object:

- A. an Ingress
- B. a Deployment with replicas: 3
- C. a bare Pod
- D. a Secret

**116.** Rolling restart proceeds pod-by-pod 'only if the restart is successful' so that:

- A. the deployment is deleted
- B. all pods die at once
- C. config is ignored
- D. the service stays available during the restart

**117.** To generate a YAML manifest from an imperative command without applying it, you add:

- A. --wait
- B. --force
- C. -A
- D. --dry-run=client -o yaml

**118.** Which are cluster-scoped (NOT namespaced) in Kubernetes? (Select all that apply) *(Select all that apply)*

- A. Nodes
- B. the cluster itself
- C. Persistent Volumes
- D. Deployments

**119.** Magnum 'openstack coe cluster resize' versus 'kubectl scale': the former changes:

- A. container ports
- B. the number of cluster nodes (infrastructure)
- C. ConfigMap values
- D. pod replica counts

**120.** An Ingress routing '/api' to one Service and '/web' to another demonstrates:

- A. volume mounting
- B. external host/path-based routing into the cluster
- C. internal-only ClusterIP behaviour
- D. Secret injection


## Week 7 - FaaS / Fission (Serverless)

<a name="week-7"></a>

**121.** A function works in 'fission fn test' but a route to it returns nothing from outside the cluster. The most likely cause:

- A. the function code is broken
- B. no port-forward/ingress has been set up to reach the Router externally
- C. the executor must be NewDeploy
- D. the package is a source archive

**122.** A NewDeploy function with minscale=0 loads a 2GB model. The first morning request times out; later ones succeed. Best single fix:

- A. convert to a source archive so it loads at build time
- B. switch to PoolManager so the warm pool loads the model
- C. set minscale>=1 to keep a warm, pre-initialised pod
- D. shrink the model under fntimeout

**123.** A timer fires every 30s; the function usually takes 10s but spikes to 50s under load. Over a busy period you will most likely see:

- A. concurrent runs accumulating pods until resources are exhausted
- B. occasional harmless dropped runs
- C. the cron auto-throttling to 50s
- D. Fission serialising the runs automatically

**124.** You deleted a route from your specs files and ran plain 'fission specs apply'. On the cluster the old route:

- A. is converted to a function
- B. triggers an error
- C. still exists (plain apply never deletes)
- D. is removed

**125.** A teammate hand-created a function via CLI (not in specs). You run 'fission specs apply --delete'. That function:

- A. is imported into specs
- B. is preserved because CLI-made
- C. blocks the apply
- D. is deleted because it isn't declared in specs

**126.** You set '--requestsperpod 10' on a PoolManager function. Under 40 concurrent requests, you should expect roughly:

- A. exactly 10 pods pre-warmed
- B. 40 pods (one per request)
- C. 1 pod handling all 40 serially
- D. about 4 pods (10 concurrent each)

**127.** A function packaged with --sourcearchive but no build command fails at runtime with missing dependencies. Why?

- A. source archives ignore dependencies
- B. without a build command the install step never runs
- C. deploy archives are required for deps
- D. the Router strips imports

**128.** Which are genuine FaaS anti-patterns the lecturer admitted to? (Select all that apply) *(Select all that apply)*

- A. validating request JSON against a schema
- B. storing the ES password in a plain ConfigMap
- C. exposing /wipedatabase to the public internet
- D. returning the raw ElasticSearch response to clients

**129.** You need a function to run automatically whenever pods are created or deleted (e.g. to log scaling). The right trigger:

- A. a watch trigger on pods
- B. a route (HTTP) trigger
- C. the async WebSocket pattern
- D. a timer trigger

**130.** Choosing an executor: a function is rarely called and must respond instantly when it is. The best fit:

- A. PoolManager (warm generic pool)
- B. NewDeploy with minscale=0
- C. NewDeploy with maxscale=0
- D. no executor

**131.** In the async long-job pattern, returning HTTP 202 immediately (instead of holding the request) is needed because:

- A. WebSockets are simply faster
- B. 202 is mandatory for POSTs
- C. a long-held HTTP request risks timeouts; results are pushed later via WebSocket
- D. HTTP can't carry JSON

**132.** PoolManager copes poorly with one function under sustained heavy concurrency because its warm pods are:

- A. always cold
- B. generic and not designed for many concurrent instances of one function
- C. unable to read ConfigMaps
- D. dedicated per function

**133.** Route '/user/{id:[0-9]+}' is hit with '/user/bob'. The function:

- A. is not invoked because the regex requires digits
- B. runs with id=0
- C. crashes the Router
- D. runs with id='bob'

**134.** You want your cluster's Fission resources to be reproducible and reviewable in Git. The mechanism:

- A. a specs directory (declarative IaC) with apply/--delete
- B. manual CLI commands
- C. more routes
- D. a bigger environment image

**135.** A function adds a pre-built binary and a static data file that need no install. The correct archive:

- A. deploy archive (unzipped as-is)
- B. a ConfigMap
- C. source archive (it will build them)
- D. either, identical

**136.** With minscale=0, your NewDeploy function is fast all day but the first request each morning is slow. The cause:

- A. overnight idle scaled pods to zero, so the first request cold-starts
- B. the archive rebuilds each morning
- C. fntimeout resets daily
- D. the cron fires at night

**137.** Under the hood, when an external request hits a Fission route, the component that maps method/path to a function is the:

- A. Executor pool only
- B. Builder
- C. Router
- D. Kafka broker

**138.** You expect a function to scale with CPU load and tolerate cold starts. The executor/config that fits best:

- A. NewDeploy with the Kubernetes HPA
- B. a timer trigger
- C. a watch trigger
- D. PoolManager only

**139.** 'fission specs destroy' vs 'apply --delete' - you want a complete teardown of everything the specs define. Use:

- A. fn test
- B. specs destroy
- C. route delete
- D. apply --delete

**140.** A function returns thousands of records in one response and the client struggles. The relevant anti-pattern is:

- A. no schema checking
- B. raw DB leak
- C. missing pagination
- D. public test route


## Week 8 - Distributed DBMS, CAP, CouchDB/PostgreSQL/ElasticSearch

<a name="week-8"></a>

**141.** During a network partition, your ElasticSearch cluster stops accepting writes while a CouchDB cluster keeps serving. In CAP terms, they respectively favoured:

- A. both favoured availability
- B. both favoured partition-intolerance
- C. ES favoured availability; CouchDB consistency
- D. ES favoured consistency; CouchDB favoured availability

**142.** A 'healthy' node is briefly slow and the cluster declares it failed, triggering an election. This illustrates that:

- A. elections are random
- B. hard partitions are the only kind
- C. every partition is ultimately detected by a timeout (soft partitions)
- D. slow nodes are ignored

**143.** You write to what you think is a replica shard in ElasticSearch and it's redirected. Why?

- A. writes for an index go to the primary-shard node, then propagate to replicas
- B. CouchDB rules apply
- C. ES rejects all writes
- D. replicas accept writes too

**144.** Your ES query response includes a '_score' field you never requested. The reason:

- A. you enabled it in mappings
- B. search adds _score (relevancy) by default while omitting most metadata
- C. it's the shard number
- D. it's the document ID

**145.** You created an index with too few primary shards and now can't spread updates across more nodes. The lesson:

- A. primary-shard count caps the nodes that can update an index, so don't under-shard
- B. replicas fix this automatically
- C. shard count never matters
- D. you can split primaries live trivially

**146.** You need to combine fields from two different ES indexes in one query. The accurate expectation:

- A. joins are impossible entirely
- B. only limited one-to-many joins exist (parent-child, enrich, lookup)
- C. it behaves exactly like PostgreSQL JOIN
- D. full many-to-many SQL joins work

**147.** Querying three related indexes: doing 'GET /index1,index2,index3/_search' versus three separate queries is:

- A. identical in cost
- B. only valid for one index
- C. slower
- D. more efficient than sequential per-index queries

**148.** In a PostgreSQL foreign-data-wrapper federation, one remote node goes down and part of your data becomes unreachable. This reflects that FDW federation:

- A. replicates everything by default
- B. can have a failed node hinder the whole cluster
- C. never depends on remote nodes
- D. is fully partition-tolerant

**149.** Which correctly pair an ES term with its meaning? (Select all that apply) *(Select all that apply)*

- A. index = a single document
- B. mapping = schema (field types/indexing)
- C. replica = copy of a shard
- D. shard = horizontal partition of an index

**150.** You want even document distribution without specifying placement. ElasticSearch by default uses:

- A. round-robin by arrival
- B. hash sharding on the document ID
- C. alphabetical by a field
- D. range sharding on a date

**151.** You raise a CouchDB cluster from 3 to 5 nodes for an existing database and expect automatic rebalancing. Reality:

- A. it auto-reshards existing DBs instantly
- B. shards vanish
- C. for existing DBs, resharding is manual (moving/splitting shards)
- D. CouchDB refuses new nodes

**152.** During a partition you must keep accepting writes everywhere and reconcile later. Which system's default behaviour aligns?

- A. PostgreSQL FDW (node failure hinders cluster)
- B. CouchDB (every node accepts writes)
- C. none can
- D. ElasticSearch (quorum/elections)

**153.** A 0.5s delay from a master node triggers an ElasticSearch election. This shows that the cluster treats:

- A. all delays as success
- B. latency as irrelevant
- C. a timeout as evidence of a (soft) partition/failure
- D. elections as optional

**154.** You design an index expecting to scale updates across 10 nodes later, but create it with 1 primary shard. The problem:

- A. ES auto-splits primaries live
- B. replicas will fix it
- C. shards are irrelevant
- D. primary-shard count caps update parallelism, so 1 primary limits you to ~1 updating node

**155.** Which ES write/replication facts are correct? (Select all that apply) *(Select all that apply)*

- A. replicas serve reads in parallel
- B. any replica accepts direct writes
- C. changes propagate to replicas before the transaction completes
- D. writes go through the primary shard

**156.** You need a relational-style join across two ES indexes. The realistic option:

- A. limited mechanisms (parent-child, enrich, lookup) - one-to-many only
- B. no joins of any kind
- C. a full many-to-many JOIN like SQL
- D. joins identical to PostgreSQL

**157.** Sharding vs replication, applied: to survive a node failure without data loss you primarily rely on:

- A. range sharding
- B. replicas (copies of shards on other nodes)
- C. more shards
- D. fewer nodes

**158.** A query over 'logs-2025-*' treats many daily indexes as one. This grouping is called:

- A. a replica
- B. a data stream / index pattern
- C. a mapping
- D. a shard

**159.** ES assigns a document no explicit ID. What happens?

- A. the write is rejected
- B. the shard is deleted
- C. ES generates a unique _id automatically
- D. all docs share one ID

**160.** The CAP-based reason traditional single-site DBMSs ignored partitions is that they assumed:

- A. global geo-distribution
- B. a small co-located cluster of high-quality servers
- C. commodity servers across tenancies
- D. no network at all


## Week 9 - Virtualisation & Hypervisors

<a name="week-9"></a>

**161.** You try to run a Windows-kernel workload inside a Linux Docker container and it won't work. The fundamental reason:

- A. Docker forbids Windows apps
- B. containers share the host kernel, so a different OS kernel isn't possible
- C. the image is too large
- D. you need more RAM

**162.** A guest OS in a VM 'writes to its hard disk'. Physically, what happens?

- A. it writes to the network card
- B. the VMM translates the write to the virtual/host disk
- C. it writes straight to the bare disk
- D. the data is dropped

**163.** You need stronger isolation between two tenants than process-level namespaces provide. The better choice:

- A. one container with more CPU
- B. a single process
- C. two VMs, each with its own full OS
- D. two containers on one kernel

**164.** A cloud provider runs the VMM directly on the physical server with no underlying OS. This is a:

- A. hosted (Type 2) hypervisor
- B. bare-metal (Type 1) hypervisor
- C. container runtime
- D. guest OS

**165.** On your laptop you install VirtualBox on top of Windows to run Linux VMs. That hypervisor is:

- A. bare-metal (Type 1)
- B. hosted (Type 2)
- C. a container
- D. OS-level virtualisation

**166.** You want VM images that only consume disk as data is actually written. Choose:

- A. a fixed VHD
- B. raw (fully pre-allocated)
- C. JPEG
- D. qcow2 (copy-on-write)

**167.** Which Docker-vs-VM resource claims are correct? (Select all that apply) *(Select all that apply)*

- A. Docker uses MBs of disk; a VM GBs
- B. Docker boots in seconds; a VM in minutes
- C. Docker boots a full guest OS per container
- D. VMs give full-OS isolation; Docker process-level

**168.** Why might you deliberately run containers inside cloud VMs rather than on bare metal?

- A. to layer lightweight OS-level isolation on top of hardware virtualisation
- B. VMs require containers to boot
- C. containers can't run alone
- D. it's the only legal option

**169.** Your colleague expects 'docker run --network host' on Docker Desktop (Mac) to expose to the laptop's localhost, but it doesn't. Explain:

- A. nginx can't bind port 80
- B. host mode is disabled on Mac
- C. the engine runs in a hidden Linux VM, so host networking is the VM's, not the laptop's
- D. Macs have no localhost

**170.** A well-designed hypervisor imposes on the guest:

- A. zero overhead always
- B. a large, noticeable slowdown
- C. better-than-native speed
- D. only a minor performance decrease

**171.** You must run a legacy app that needs its own kernel and full OS isolation on shared hardware. The right virtualisation:

- A. an OS-level container
- B. a full virtual machine under a hypervisor
- C. a qcow2 file alone
- D. a Docker bridge network

**172.** A bare-metal (Type 1) hypervisor must itself handle device drivers and hardware management because it:

- A. runs on top of Windows
- B. is a container
- C. has no VMs
- D. boots and runs directly on the physical machine

**173.** You snapshot a VM and the image file is far smaller than the disk size shown inside the guest. This is consistent with:

- A. a JPEG
- B. a corrupted image
- C. a raw fully-allocated image
- D. a qcow2 copy-on-write image storing only written data

**174.** Containers boot in seconds and VMs in minutes mainly because containers:

- A. use raw images
- B. have faster CPUs
- C. share the host kernel instead of booting a full guest OS
- D. skip networking

**175.** Which correctly contrast Type 1 and Type 2 hypervisors? (Select all that apply) *(Select all that apply)*

- A. Type 1 runs directly on hardware
- B. Type 2 runs on a host OS
- C. Type 2 needs no host OS
- D. Type 1 typically offers better performance/closeness to hardware

**176.** You want to run Linux containers on a Windows laptop via Docker Desktop. Under the hood this works by:

- A. running them natively on the Windows kernel
- B. emulating each syscall
- C. running a hidden Linux VM whose kernel hosts the containers
- D. using a Type 1 hypervisor on bare metal

**177.** The performance penalty of a good hypervisor is described as minor because the guest:

- A. runs without any mediation
- B. shares the host kernel
- C. runs faster than native
- D. is given the perception of a whole machine with only small overhead

**178.** OS-level virtualisation can't run a Windows guest on a Linux host because:

- A. Windows is open source
- B. all containers share the single host kernel
- C. qcow2 is incompatible
- D. containers are too small

**179.** Combining a cloud hypervisor with containers (containers inside VMs) gives you:

- A. weaker isolation than either alone
- B. VM-level isolation plus container agility/density
- C. no isolation at all
- D. elimination of the kernel

**180.** Glance stores VM disk images; choosing a format matters because it affects:

- A. the guest's IP address
- B. the security group
- C. the SSH key
- D. storage efficiency and features (e.g. raw vs qcow2 thin provisioning)


## Week 10 - Security & Clouds

<a name="week-10"></a>

**181.** A verified user with valid credentials is blocked from installing a patch on certain VMs. This boundary is enforced by:

- A. encryption
- B. authentication
- C. authorisation
- D. a CA

**182.** You want users to log in once and then reach SPARTAN, MRC and other resources without re-entering credentials. The concept:

- A. single sign-on (prove identity once, access many)
- B. per-service accounts
- C. anonymous access
- D. a shared password file

**183.** Inter-operating across two clouds is hard partly because, unlike a single org, there is:

- A. one global identity provider
- B. no single ubiquitous CA - many exist with differing trust
- C. no use for identity
- D. one universal CA everyone trusts

**184.** Before deploying a downloaded VM image to production, a key security check is whether it is:

- A. high-resolution
- B. named correctly
- C. free of trojans/malware (provenance/integrity)
- D. the right colour

**185.** Your MRC and SPARTAN access were each granted on the basis of:

- A. anonymous public access
- B. a public API key
- C. an Amazon account
- D. proving your UoM/COMP90024 affiliation (entitlement)

**186.** A survey shows most orgs leave known vulnerabilities unpatched. The lecture's explanation:

- A. patching is illegal
- B. patches don't exist
- C. everything auto-patches
- D. side-effects, complexity and job disruption deter patching

**187.** Which underpin secure access to distributed cloud resources? (Select all that apply) *(Select all that apply)*

- A. vetting and patching of images/software
- B. established identity and graded trust
- C. ignoring security once deployed
- D. single sign-on across resources

**188.** A CA's role in PKI is to:

- A. run VMs
- B. vouch for the binding between an identity and a public key
- C. host container images
- D. store passwords in plaintext

**189.** IaaS access commonly relies on which PKI artefact rather than a typed password?

- A. a key pair
- B. a plaintext token in the URL
- C. a disk image
- D. a CAPTCHA

**190.** Two identity providers vouch for a user, but you trust one far less. The principle at work:

- A. trust is irrelevant
- B. degrees of trust must be weighed when granting access
- C. all providers are equally trustworthy
- D. only one provider can exist

**191.** A user authenticates successfully but is denied deleting a production database. This separation is the point of distinguishing:

- A. shards from replicas
- B. encryption from hashing
- C. Type 1 from Type 2
- D. authentication (who you are) from authorisation (what you may do)

**192.** Federating identity across MRC, SPARTAN and a partner cloud is hard because there is no single CA, so you must:

- A. trust everyone equally
- B. disable authentication
- C. use one global password
- D. weigh degrees of trust across multiple CAs/identity providers

**193.** Before running a community VM image in production, the security-minded step is to:

- A. verify it is free of malware/trojans (provenance/integrity)
- B. increase its resolution
- C. check its colour scheme
- D. shorten its name

**194.** Most organisations leave known CVEs unpatched. The lecture attributes this chiefly to:

- A. automatic patching everywhere
- B. patches not existing
- C. operational side-effects, complexity, and disruption to running jobs
- D. patches being illegal

**195.** Which artefacts/concepts directly support secure cloud access? (Select all that apply) *(Select all that apply)*

- A. leaving images unvetted
- B. a CA binding identities to public keys
- C. single sign-on across resources
- D. key pairs for IaaS access

**196.** Tools like Puppet/Cfengine/Pakiti help manage patching and config, but the lecture stresses they don't remove the need to:

- A. use containers
- B. authenticate users
- C. actually vet images and apply patches despite operational friction
- D. buy more VMs

**197.** SSO's security value is that a user proves identity once; the corresponding risk to manage is that:

- A. passwords multiply
- B. identity becomes irrelevant
- C. a compromised single credential can unlock many resources
- D. nobody can log in

**198.** A CA-signed certificate lets a relying party trust that a public key belongs to a claimed identity. Without a shared CA across clouds, the consequence is:

- A. all keys are public
- B. encryption becomes unnecessary
- C. trust must be brokered/negotiated, complicating interoperability
- D. instant interoperability

**199.** Authorisation also covers operational decisions, e.g.:

- A. the disk image format
- B. who may install a patch, when, and how many VMs it affects
- C. the VM's wallpaper
- D. the SSH banner text

**200.** Your access to shared HPC/cloud was entitlement-based. The general security principle this reflects:

- A. trust by default
- B. open access for all
- C. least privilege / access tied to verified entitlement
- D. no authentication needed


---

## Answer Key & Explanations


### Week 1 - Big Picture & Course Drivers

| # | Answer | Why |
|---|---|---|
| 1 | **D** | Course quip: if a single server can process it, it isn't big. |
| 2 | **D** | The Ten-Year Reproducibility Challenge: versions/compilers/options drift. |
| 3 | **A** | SLURM allocates resources; you must parallelise the code yourself. |
| 4 | **B, C, D** | There is no 'Big Speed' driver; the others map to the course's set. |
| 5 | **B** | Volunteer computing (SETI@home/BOINC) is loosely coupled resource pooling. |
| 6 | **C** | Distributed systems risk lost/delayed messages and shared-state problems. |
| 7 | **A** | Streaming avoids RAM exhaustion and scales out across nodes. |
| 8 | **A, B, C** | Chip fabrication is not an outcome; the others are. |
| 9 | **C** | Cross-node overhead can erase benefit when the workload doesn't need it. |
| 10 | **D** | The login node is shared; running jobs there harms everyone. |
| 11 | **B** | Contention means you report multiple trials and note variability. |
| 12 | **C** | The threshold is whether one server can handle it, not raw GB. |
| 13 | **D** | Big Distribution = geographically/organisationally spread resources. |
| 14 | **B** | Version/option drift is the classic reproducibility hazard. |
| 15 | **D** | Loosely coupled nodes lack the fast, reliable interconnects of HPC. |
| 16 | **A** | Compute-bound vs data-bound problems are different drivers. |
| 17 | **B** | On shared systems, contention/IO can dominate even ideal parallelism. |
| 18 | **A** | Mixing coupling styles is the 'hybrid combinations' case. |
| 19 | **C** | Team development mirrors professional practice. |
| 20 | **B** | Designing for streaming/partitioning future-proofs for growth. |


### Week 2 - Parallel & Distributed Systems, Flynn's Taxonomy, MPI

| # | Answer | Why |
|---|---|---|
| 21 | **A** | MIMD processes run asynchronously; print interleaving is expected, not a bug. |
| 22 | **C** | Multiple instruction streams over a single data stream = MISD (fault-tolerant niche). |
| 23 | **B** | MPI must be initialised (MPI_Init) before other MPI calls are valid. |
| 24 | **A** | Shared-memory threading = openMP; MPI suits distributed memory. |
| 25 | **C** | No shared memory across nodes; explicit message passing is required. |
| 26 | **B, C, D** | The vector unit is SIMD; the rest are MIMD. |
| 27 | **B** | SMP adds inter-processor communication complexity/overhead atop CPU work. |
| 28 | **C** | Without launching multiple processes, the communicator size is 1. |
| 29 | **C** | Broadcast is the natural one-to-many collective for this. |
| 30 | **C** | Split/join task decomposition fits shared-memory threading. |
| 31 | **A** | All-receive-first with blocking calls deadlocks; pair sends/recvs correctly. |
| 32 | **D** | One instruction over many data elements = SIMD. |
| 33 | **A** | Shared-memory bandwidth/contention often caps thread scaling on one node. |
| 34 | **C** | openMP is single-node shared memory; MPI handles inter-node communication. |
| 35 | **C** | COMM_WORLD is the default group of all processes. |
| 36 | **A, B, D** | Init/Finalize bracket the program; rank is needed to identify processes; there's no MPI_Sleep requirement. |
| 37 | **B** | MISD is uncommon; redundant fault-tolerance is its niche. |
| 38 | **D** | Coordinating multiple processors over the bus adds complexity. |
| 39 | **D** | Delayed/lost messages and no shared state are core distributed risks. |
| 40 | **D** | Same operation over data partitions = data parallelism. |


### Week 3 - HPC, SPARTAN, SLURM, mpi4py

| # | Answer | Why |
|---|---|---|
| 41 | **D** | ntasks allocates slots, but you must launch with mpirun/srun to use them. |
| 42 | **C** | Shared-system contention makes reproducible benchmarking hard. |
| 43 | **D** | Missing 'module load' lines cause runtime module errors. |
| 44 | **D** | For this workload, cross-node overhead offsets the second node. |
| 45 | **C** | Each rank aligns to a newline so records aren't split across ranks. |
| 46 | **A, B, C** | There is no --docker-image directive in SLURM. |
| 47 | **C** | Job arrays handle many similar tasks efficiently. |
| 48 | **D** | Both parallelism and per-task efficiency (orjson vs json) matter. |
| 49 | **B** | Dependencies sequence jobs (B after A). |
| 50 | **C** | First-start to last-finish; queue time may be ignored. |
| 51 | **B** | Per-rank streaming of byte ranges avoids loading the whole file. |
| 52 | **A** | Exceeding --time causes SLURM to terminate the job. |
| 53 | **C** | More tasks than cores leads to oversubscription/contention. |
| 54 | **B** | Gather/reduce aggregates per-rank results at the root. |
| 55 | **A** | Serial portions and overhead prevent perfect linear scaling. |
| 56 | **A** | Compute belongs on worker nodes via sbatch, not the login node. |
| 57 | **A, B, D** | --network host is Docker, not SLURM; the rest are needed. |
| 58 | **A** | Faster libraries improve performance alongside parallelism. |
| 59 | **A** | Job arrays let the scheduler handle many similar tasks efficiently. |
| 60 | **C** | Focus is run-time/benchmarking; queue time may be ignored. |


### Week 4 - Cloud Computing, OpenStack, MRC/NeCTAR

| # | Answer | Why |
|---|---|---|
| 61 | **D** | Default-network private IPs require the VPN when off-campus. |
| 62 | **A** | Without sourcing OpenRC, the CLI has no credentials. |
| 63 | **A** | A created volume must be attached and mounted to be usable. |
| 64 | **C** | Security groups gate traffic; TCP/80 must be allowed. |
| 65 | **A, C, D** | Cinder is block storage; Swift is object storage. |
| 66 | **B** | qcow2 uses copy-on-write lazy allocation (thin provisioning). |
| 67 | **B** | OpenStack uses object-action; kubectl uses action-object. |
| 68 | **C** | Quotas constrain which/how many flavors you can run. |
| 69 | **A** | IaaS = manage VMs/OS; PaaS = managed platform/runtime. |
| 70 | **C** | IaC tools give repeatable, version-controlled provisioning. |
| 71 | **A** | Resource limits can prevent public IPs, leaving VPN-only access (as in the friends report). |
| 72 | **D** | An attached block volume must be formatted/mounted to appear. |
| 73 | **B** | SSH needs an allowed inbound 22 rule in the security group. |
| 74 | **A** | Glance is the image service; Keystone is identity/auth. |
| 75 | **A** | Ansible IaC gives repeatable, reviewable provisioning. |
| 76 | **B** | qcow2 thin-provisions; raw/fixed pre-allocate. |
| 77 | **A, B, C** | Pushing to Docker Hub isn't part of OpenStack VM provisioning. |
| 78 | **D** | A new shell needs OpenRC sourced for credentials. |
| 79 | **A** | Magnum provisions k8s clusters via templates (openstack coe). |
| 80 | **D** | Cinder volumes provide persistent block storage. |


### Week 5 - Docker & Containerisation, CI/CD intro

| # | Answer | Why |
|---|---|---|
| 81 | **A** | A host port can map to only one container at a time. |
| 82 | **D** | Host networking refers to the hidden VM on Docker Desktop. |
| 83 | **A** | To share, you must tag and push to a registry. |
| 84 | **B** | Layer caching rebuilds only from the first changed instruction onward. |
| 85 | **D** | bridge gives per-container IPs with host port exposure; host shares one IP. |
| 86 | **A, B, C** | Containers share the host kernel, so no foreign kernel. |
| 87 | **A** | Compose manages multi-container apps on one host; SWARM spans hosts. |
| 88 | **B** | Same core role; K8s adds much more for complex systems. |
| 89 | **C** | CD automates deployment after CI passes. |
| 90 | **D** | create != start; ps shows only running containers. |
| 91 | **C** | Ordering stable steps first maximises layer-cache reuse. |
| 92 | **D** | Distinct host ports (or a proxy) avoid the host-port clash. |
| 93 | **B** | ':latest' drift causes 'works locally, breaks in CI/prod'. |
| 94 | **A** | Compose suffices on one host; K8s is overkill there. |
| 95 | **A, B, C** | Containers don't boot their own kernel. |
| 96 | **D** | Pass environment variables at run (or bake/compose them). |
| 97 | **A** | Published ports are forwarded from the VM; host networking is the VM's. |
| 98 | **C** | Containers start fast and are lightweight for stateless services. |
| 99 | **D** | CI = integrate/test; CD = automated release post-CI. |
| 100 | **D** | Tags identify versions; ':latest' floats to the newest pushed. |


### Week 6 - Container Orchestration & Kubernetes

| # | Answer | Why |
|---|---|---|
| 101 | **D** | Pods must restart to load new config; rollout restart is graceful. |
| 102 | **A** | ClusterIP Services are internal; external access needs Ingress/port-forward. |
| 103 | **A** | Resources land in a namespace; you may be querying a different one. |
| 104 | **A** | Memory in Mi (2^20 bytes); CPU in millicores. |
| 105 | **C** | port-forward tunnels a port to localhost without an Ingress. |
| 106 | **A** | A Deployment self-heals to the desired replica count. |
| 107 | **A** | Dry-run generates the manifest without applying it. |
| 108 | **A, C, D** | Nodes (and PVs) are cluster-scoped, not namespaced. |
| 109 | **D** | Magnum resizes the cluster's node count. |
| 110 | **B** | Ingress routes to a Service, which targets a Pod's containers. |
| 111 | **D** | Pods must restart (e.g. rollout restart) to load updated Secrets/ConfigMaps. |
| 112 | **A, B, C** | Ingress (incl. host/path routing) or port-forward expose it; deleting the namespace is wrong. |
| 113 | **C** | Resources are namespaced; you may be in the wrong namespace. |
| 114 | **D** | Millicores: 1000m = 1 vCPU. |
| 115 | **B** | Deployments maintain and self-heal the desired replica count. |
| 116 | **D** | One-at-a-time, success-gated restarts preserve availability. |
| 117 | **D** | Dry-run + -o yaml emits the manifest for later apply. |
| 118 | **A, B, C** | Deployments are namespaced; nodes/PVs/cluster are not. |
| 119 | **B** | Magnum resizes nodes; kubectl scale changes replicas. |
| 120 | **B** | Ingress provides external path-based routing to services. |


### Week 7 - FaaS / Fission (Serverless)

| # | Answer | Why |
|---|---|---|
| 121 | **B** | fn test runs in-cluster; external calls need port-forward/ingress to the Router. |
| 122 | **C** | minscale>=1 avoids the cold-start + model-load timeout on the first call. |
| 123 | **A** | Runtime exceeding the interval makes runs overlap and pile up. |
| 124 | **C** | Plain apply is additive; --delete is needed to prune. |
| 125 | **D** | --delete reconciles the cluster to specs, pruning anything not declared. |
| 126 | **D** | requestsperpod is per-pod concurrency; 40/10 ~ 4 pods. |
| 127 | **B** | Source archives need a build command to install/compile deps. |
| 128 | **B, C, D** | Schema validation is the GOOD practice; the rest are anti-patterns. |
| 129 | **A** | Watch triggers fire on K8s resource lifecycle events. |
| 130 | **A** | PoolManager's warm pool gives low latency for sporadic calls. |
| 131 | **C** | Decoupling avoids HTTP timeouts; the WebSocket delivers the result later. |
| 132 | **B** | Shared generic pool isn't built for sustained single-function concurrency; NewDeploy is. |
| 133 | **A** | The [0-9]+ constraint means non-numeric paths don't match the route. |
| 134 | **A** | Specs are Infrastructure-as-Code: versionable and reconcilable. |
| 135 | **A** | Deploy archive is unzipped without a build; source would needlessly try to build. |
| 136 | **A** | Scale-to-zero overnight forces a morning cold start. |
| 137 | **C** | The Router matches the route and dispatches to the function (via ingress). |
| 138 | **A** | NewDeploy autoscales via the K8s HPA on metrics like CPU. |
| 139 | **B** | destroy tears down all spec-defined resources; --delete only prunes extras while applying. |
| 140 | **C** | Returning huge result sets at once is the missing-pagination anti-pattern. |


### Week 8 - Distributed DBMS, CAP, CouchDB/PostgreSQL/ElasticSearch

| # | Answer | Why |
|---|---|---|
| 141 | **D** | ES holds elections/quorum (consistency-leaning); CouchDB keeps accepting writes (availability-leaning). |
| 142 | **C** | Soft partitions arise from latency; timeouts (e.g. ES 500ms) decide a node is down. |
| 143 | **A** | ES routes writes through the primary shard; replicas are read/propagation copies. |
| 144 | **B** | Default search omits most metadata but adds _score. |
| 145 | **A** | Primary-shard count limits update parallelism; under-sharding constrains scaling. |
| 146 | **B** | ES supports limited one-to-many joins only. |
| 147 | **D** | Multi-index queries beat sequential per-index queries. |
| 148 | **B** | A failed FDW node can break the cluster / make data inaccessible. |
| 149 | **B, C, D** | An index is like a database; a document is a record. |
| 150 | **B** | Default is hash sharding on _id; routing can override to range. |
| 151 | **C** | New DBs auto-balance; existing ones need manual resharding. |
| 152 | **B** | CouchDB leans availability; ES leans consistency. |
| 153 | **C** | ES interprets a 500ms delay as a crashed master, forcing an election. |
| 154 | **D** | Primary shards bound the nodes that can update an index. |
| 155 | **A, C, D** | Replicas don't accept direct writes; writes route via the primary. |
| 156 | **A** | ES joins are limited and one-to-many. |
| 157 | **B** | Replicas provide the redundancy for fault tolerance. |
| 158 | **B** | Pattern-named indexes queried together form a data stream. |
| 159 | **C** | ES auto-assigns a unique _id when none is given. |
| 160 | **B** | Classic DBMSs assumed co-located reliable servers, so partitions were rare. |


### Week 9 - Virtualisation & Hypervisors

| # | Answer | Why |
|---|---|---|
| 161 | **B** | OS-level virtualisation shares one kernel; a foreign kernel needs a full VM. |
| 162 | **B** | The hypervisor mediates and translates guest disk I/O. |
| 163 | **C** | VMs give full-OS isolation; containers share the kernel (weaker boundary). |
| 164 | **B** | Type 1 runs directly on hardware; Type 2 runs atop a host OS. |
| 165 | **B** | A hypervisor on top of a host OS is Type 2 (hosted). |
| 166 | **D** | qcow2 thin-provisions via copy-on-write. |
| 167 | **A, B, D** | Containers don't boot a full guest OS; they share the host kernel. |
| 168 | **A** | Containers-in-VMs combine container agility with VM isolation. |
| 169 | **C** | Docker Desktop's hidden VM changes what 'host' means. |
| 170 | **D** | The lecture notes only a minor performance decrease. |
| 171 | **B** | A foreign kernel + strong isolation needs a full VM, not a container. |
| 172 | **D** | Type 1 sits on hardware, so it manages devices directly. |
| 173 | **D** | qcow2 stores only allocated/written blocks, so files are smaller. |
| 174 | **C** | No full-OS boot per container -> fast startup. |
| 175 | **A, B, D** | Type 2 by definition runs on a host OS. |
| 176 | **C** | Docker Desktop runs a hidden Linux VM to provide the Linux kernel. |
| 177 | **D** | Hypervisors present a whole-machine illusion with minor overhead. |
| 178 | **B** | A shared kernel can't simultaneously be Linux and Windows. |
| 179 | **B** | You get VM isolation boundaries with container packaging benefits. |
| 180 | **D** | Format choice (raw/qcow2/vmdk) affects size/features. |


### Week 10 - Security & Clouds

| # | Answer | Why |
|---|---|---|
| 181 | **C** | Deciding what an authenticated user may DO is authorisation. |
| 182 | **A** | SSO = authenticate once, access distributed resources. |
| 183 | **B** | Federation must reconcile many CAs/identity sources with graded trust. |
| 184 | **C** | Image integrity/provenance must be verified. |
| 185 | **D** | Access is entitlement-based on verified affiliation. |
| 186 | **D** | Operational disruption causes chronic under-patching. |
| 187 | **A, B, D** | Security is continuous; ignoring it post-deploy is wrong. |
| 188 | **B** | A CA attests identity-to-public-key bindings. |
| 189 | **A** | IaaS instance access typically uses key pairs. |
| 190 | **B** | Federated identity requires grading trust across providers. |
| 191 | **D** | AuthN proves identity; authZ governs permitted actions. |
| 192 | **D** | Many CAs/providers -> graded trust is required. |
| 193 | **A** | Image integrity/provenance must be vetted. |
| 194 | **C** | Disruption/complexity drive chronic under-patching. |
| 195 | **B, C, D** | Leaving images unvetted is a risk, not a safeguard. |
| 196 | **C** | Tooling assists, but vetting/patching discipline is still required. |
| 197 | **C** | SSO concentrates risk on the single credential, so it must be protected. |
| 198 | **C** | No common CA means trust must be established across domains. |
| 199 | **B** | AuthZ extends to operational change control and blast radius. |
| 200 | **C** | Access tied to verified entitlement reflects least-privilege thinking. |
