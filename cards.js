// Cluster & Cloud Computing Flashcards Data
// Pre-generated from study notes

window.FLASHCARDS = [
  // WEEK 1: INTRODUCTION & FUNDAMENTALS
  {
    id: 1,
    week: 1,
    topic: "Cloud Computing",
    question: "What are the 5 essential characteristics of Cloud Computing?",
    answer: "1. **On-demand self-service**: Provision compute/storage automatically without human interaction with the provider.\n2. **Broad network access**: Access capabilities over standard network mechanisms from heterogeneous client platforms.\n3. **Resource pooling**: Provider's resources are pooled to serve multiple consumers in a multi-tenant model.\n4. **Rapid elasticity**: Capabilities scale elastically and automatically up/down to match demand.\n5. **Measured service**: Systems automatically control and optimize resources using metering at the appropriate level of abstraction."
  },
  {
    id: 2,
    week: 1,
    topic: "Cloud Types",
    question: "What are the three main types of cloud categorization by capability, and what is an example of each?",
    answer: "- **Compute Clouds**: Amazon Elastic Compute Cloud (EC2), Azure Virtual Machines.\n- **Data Clouds**: Amazon S3, iCloud, Dropbox.\n- **Application Clouds**: Virtual image factories, app stores, community-specific services."
  },
  {
    id: 3,
    week: 1,
    topic: "Distributed Systems",
    question: "Describe 'The fragility of distributed systems' as stated in the notes.",
    answer: "A distributed system's fragility means that **a system you didn't even know existed can kill your system** just by malfunctioning. Due to tight coupling or dependency chains, failures propagate easily across boundaries."
  },
  {
    id: 4,
    week: 1,
    topic: "Cloud Data Deletion",
    question: "Why is deleting large amounts of data in the cloud challenging?",
    answer: "It is structurally very difficult because data is replicated across multiple disks, regions, and backups for high availability. Ensuring absolute deletion requires coordinate sweeps and purging backup cycles, which can take time and resources."
  },

  // WEEK 2: SCALING & ARCHITECTURE
  {
    id: 5,
    week: 2,
    topic: "Scaling",
    question: "Compare Vertical and Horizontal computation scaling.",
    answer: "- **Vertical Scaling (Scaling Up)**: Switch to faster processors (e.g., n GHz to 2n GHz CPU). It is easy and requires no software changes, but is limited by physics (nanoCMOS limits) and costs rise exponentially.\n- **Horizontal Scaling (Scaling Out)**: Add more processors/nodes. It is cheaper to add nodes, but harder to design, develop, test, debug, deploy, manage, and understand distributed code."
  },
  {
    id: 6,
    week: 2,
    topic: "HPC vs HTC",
    question: "What is the difference between HPC and HTC?",
    answer: "- **HPC (High Performance Computing)**: Focuses on optimizing parallel code to run highly coupled calculations as fast as possible (focused on raw speed/low latency).\n- **HTC (High Throughput Computing)**: Focuses on running large numbers of independent or loosely coupled tasks over a long period (focused on volume/throughput, which is the main focus of this class)."
  },
  {
    id: 7,
    week: 2,
    topic: "Amdahl's Law",
    question: "What is Amdahl's Law, and what is its main implication?",
    answer: "Amdahl's Law states that as you add more processors, speedup plateaus because the **non-parallelizable (sequential/serial) part of the code becomes the bottleneck**.\n\nEven with infinite processors, the speedup is limited by the fraction of the program that must run sequentially (e.g. startup overhead, communications, data collection)."
  },
  {
    id: 8,
    week: 2,
    topic: "Loop Overhead",
    question: "How does loop overhead affect horizontal scaling?",
    answer: "If you divide a loop of 1000 iterations among 100 processors, each processor must compute bounds and test for loop completion. This overhead is replicated 100 times, acting as a serial overhead that limits theoretical speedup (contrary to simple Amdahl calculations)."
  },
  {
    id: 9,
    week: 2,
    topic: "Gustafson-Barsis's Law",
    question: "How does Gustafson-Barsis's Law counter Amdahl's Law?",
    answer: "Amdahl's Law assumes a fixed problem size. **Gustafson-Barsis's Law** states that as computation resources grow, problem sizes tend to scale as well. As long as there is no limit on how far you travel / how big the problem is, you can continue to achieve linear speedups on the parallel component."
  },
  {
    id: 10,
    week: 2,
    topic: "Parallel Architectures",
    question: "Define SISD, MISD, SIMD, and MIMD. Which is the solution nowadays?",
    answer: "- **SISD**: Single Instruction, Single Data (sequential CPU - Von Neumann, obsolete).\n- **MISD**: Multiple Instruction, Single Data (redundant fault-tolerant systems, e.g. space shuttles).\n- **SIMD**: Single Instruction, Multiple Data (graphics cards/GPU processing, multimedia instructions).\n- **MIMD**: Multiple Instruction, Multiple Data. Processors run asynchronously and independently on separate data. **This is the main solution nowadays**."
  },
  {
    id: 11,
    week: 2,
    topic: "Parallelisation",
    question: "What is the difference between Explicit and Implicit Parallelization?",
    answer: "- **Implicit**: The language/compiler automatically handles identifying parallelism, scheduling, and data placement. (Very hard to design/implement).\n- **Explicit**: The developer manually handles task decomposition, mapping tasks to processors, and inter-process communications (e.g. OpenMP, MPI). Assumes the programmer is the best judge of how to exploit parallelism."
  },
  {
    id: 12,
    week: 2,
    topic: "OpenMP vs MPI",
    question: "Compare OpenMP and MPI.",
    answer: "- **OpenMP**: An API for shared-memory parallel programming. Multiple threads execute code concurrently inside parallel regions on a single computer.\n- **MPI (Message Passing Interface)**: Designed for distributed memory systems. It provides a execution environment where independent processes run on separate nodes and communicate explicitly via messages."
  },
  {
    id: 13,
    week: 2,
    topic: "Cache Coherence",
    question: "What is the cache coherence problem?",
    answer: "In multi-core systems, it is the challenge of ensuring that changes made to a memory location by one core's local cache (L1/L2) are immediately visible or updated in the caches of all other cores that share that data."
  },
  {
    id: 14,
    week: 2,
    topic: "Concurrency Bugs",
    question: "Distinguish between Deadlock and Livelock.",
    answer: "- **Deadlock**: Two or more processes are blocked permanently because each is waiting for a resource held by another.\n- **Livelock**: Active processes constantly change states in response to each other without making any actual progress (like two people in a hallway repeatedly stepping to the same side to let the other pass)."
  },
  {
    id: 15,
    week: 2,
    topic: "CAP Theorem",
    question: "Briefly define the three properties of the CAP Theorem.",
    answer: "- **Consistency (C)**: Every client query returns the same state/non-error answer from all nodes of the cluster.\n- **Availability (A)**: Every client query receives a non-error answer from every running node (not necessarily matching).\n- **Partition Tolerance (P)**: The cluster continues to operate despite arbitrary message loss or system partitions."
  },
  {
    id: 16,
    week: 2,
    topic: "Distributed Systems Assumptions",
    question: "List 4 of the 8 erroneous assumptions of distributed systems.",
    answer: "Any 4 of the following:\n1. The network is reliable.\n2. Latency is zero.\n3. Bandwidth is infinite.\n4. Topology doesn't change.\n5. There is one administrator.\n6. Transport cost is zero.\n7. The network is homogeneous.\n8. Time is ubiquitous (clocks are perfectly synchronized)."
  },

  // WEEK 3: SPARTAN & BATCH SYSTEMS
  {
    id: 17,
    week: 3,
    topic: "Spartan HPC",
    question: "What is the number one rule of Spartan HPC clusters?",
    answer: "**Never run heavy calculations on the login/head node**! It will kill system performance for everyone and likely get your account disabled. Always submit jobs via the batch system (`sbatch`)."
  },
  {
    id: 18,
    week: 3,
    topic: "Supercomputer vs Cluster",
    question: "What is the difference between a Supercomputer and a Cluster?",
    answer: "- **Supercomputer**: A single computer system with exceptional processing power for its era, typically evaluated using FLOPS (floating-point operations per second) on the LINPACK benchmark.\n- **Cluster**: Two or more separate computers connected by a high-speed network, configured to function as a single resource (typically lacking a single address space)."
  },
  {
    id: 19,
    week: 3,
    topic: "Batch Job Scheduling",
    question: "What are PBS/Torque and SLURM?",
    answer: "They are **batch queue/resource managers** that match job resource requests (nodes, cores, wall time) with available resources on worker nodes and run jobs asynchronously. Spartan uses **SLURM** (Simple Linux Utility for Resource Management)."
  },
  {
    id: 20,
    week: 3,
    topic: "SLURM Commands",
    question: "What does the command `sbatch` do?",
    answer: "It submits a SLURM job script to the queue. The manager schedules it, runs it on worker nodes when resources are available, and outputs results/errors to files."
  },
  {
    id: 21,
    week: 3,
    topic: "SLURM Script",
    question: "What key directives are specified in a SLURM script?",
    answer: "- Shell interpreter definition (`#!/bin/sh`)\n- Queue/Partition name (e.g. `sapphire`)\n- Walltime limits (default is 15 mins)\n- Node, core, task allocations\n- Environment modules to load (`module load ...`)\n- Command to compile/run the program"
  },

  // WEEK 4: CLOUD & OPENSTACK
  {
    id: 22,
    week: 4,
    topic: "Cloud Elasticity",
    question: "What is the financial advantage of 'Rapid Elasticity' in Cloud computing?",
    answer: "It allows organizations to scale resources up or down on demand. This saves operational costs since they don't have to buy expensive infrastructure that sits idle 90% of the time, aligning expenses with current user loads."
  },
  {
    id: 23,
    week: 4,
    topic: "Networking Cost",
    question: "How do Cloud providers usually charge for network traffic?",
    answer: "They charge for **egress** (data leaving the cloud provider's network), while **ingress** (data entering the cloud) is usually free. Network costs typically average about 6% of total cloud bills."
  },
  {
    id: 24,
    week: 4,
    topic: "Cloud Delivery Models",
    question: "Define SaaS, PaaS, and IaaS.",
    answer: "- **SaaS (Software as a Service)**: Consumer uses application software over the internet (e.g., Office365, Gmail).\n- **PaaS (Platform as a Service)**: Provider hosts tools/runtimes for developers to run code without OS management (e.g., Heroku, Elastic Beanstalk).\n- **IaaS (Infrastructure as a Service)**: Provider rents virtual servers, networking, and storage (e.g., AWS EC2, NeCTAR, MRC)."
  },
  {
    id: 25,
    week: 4,
    topic: "Public vs Private Cloud",
    question: "What is the main trade-off between Public and Private Clouds?",
    answer: "- **Public Cloud**: High agility, low upfront cost, rapid scale. But risks include data security, vendor lock-in, and transport fees.\n- **Private Cloud**: High control/security, zero ongoing usage bills. But requires staff management, hardware maintenance, cooling, and handles peak overflow poorly."
  },
  {
    id: 26,
    week: 4,
    topic: "Hybrid Cloud & Cloud Bursting",
    question: "What is 'Cloud Bursting' in a Hybrid Cloud setup?",
    answer: "An application deployment model where private cloud infrastructure runs the baseline workload, and when capacity is exceeded, it 'bursts' automatically into a public cloud to handle spikes in traffic."
  },
  {
    id: 27,
    week: 4,
    topic: "OpenStack",
    question: "What is OpenStack?",
    answer: "An open-source (Apache Licensed) software platform to build and manage private and public clouds (IaaS). It coordinates compute, storage, and networking resources through a dashboard or API."
  },
  {
    id: 28,
    week: 4,
    topic: "OpenStack Components",
    question: "Match these OpenStack services with their functions: Keystone, Horizon, Nova, Neutron.",
    answer: "- **Keystone**: Authentication and Authorization service.\n- **Horizon**: Web Dashboard GUI.\n- **Nova**: Compute service (spawns and manages VMs).\n- **Neutron**: Networking service (manages ports, subnets, firewalls, and IPs)."
  },
  {
    id: 29,
    week: 4,
    topic: "OpenStack Storage",
    question: "Match these OpenStack storage services with their functions: Glance, Cinder, Swift.",
    answer: "- **Glance**: Image service (stores VM snapshots/OS templates).\n- **Cinder**: Block storage service (attaches persistent drives to VMs).\n- **Swift**: Object storage service (stores unstructured blobs of data over HTTP)."
  },
  {
    id: 30,
    week: 4,
    topic: "Decoupled Storage",
    question: "Why should data be kept on detached storage volumes (like Cinder) rather than local VM drives?",
    answer: "Cloud VMs are ephemeral. If a VM crashes or is deleted, all local disk data is lost. Storing data on detached volumes ensures persistence; the storage can easily be detached and re-attached to a new VM."
  },

  // WEEK 5: CONTAINERIZATION & CI/CD
  {
    id: 31,
    week: 5,
    topic: "Containers vs VMs",
    question: "What is the core architectural difference between VMs and Containers?",
    answer: "- **Virtual Machines**: Each VM runs a complete guest OS on top of a hypervisor. This causes duplicated OS files, high memory consumption, and slow boot times.\n- **Containers**: Share the host OS kernel and run isolated user spaces via a container engine (e.g. Docker). They are lightweight, smaller, and boot in seconds."
  },
  {
    id: 32,
    week: 5,
    topic: "Containers on VMs",
    question: "Is it common to deploy containers on top of VMs?",
    answer: "Yes. In public clouds, the base unit of hardware lease is typically a VM. Containers are deployed inside those VMs (sharing the VM's OS kernel) to ease application orchestration."
  },
  {
    id: 33,
    week: 5,
    topic: "Docker Nomenclature",
    question: "What is the difference between a Docker Image and a Docker Container?",
    answer: "- **Image**: An immutable, read-only blueprint/snapshot representing the software stack and its dependencies (no active state).\n- **Container**: A live, runnable instance of a Docker Image (has active runtime state)."
  },
  {
    id: 34,
    week: 5,
    topic: "Docker Volumes",
    question: "What are the two primary options to store persistent data on the host machine in Docker?",
    answer: "- **Docker Volumes**: Managed entirely by Docker (`/var/lib/docker/volumes/...`). Safer because Docker preserves them even if the container is terminated.\n- **Bind Mounts**: Maps a specific file path from the host user directory directly into the container (managed by the user)."
  },
  {
    id: 35,
    week: 5,
    topic: "Docker Network Modes",
    question: "Explain 'host' vs 'bridge' network modes in Docker.",
    answer: "- **Host Mode**: Container shares the host's network stack directly. Containers cannot bind to the same port because they share the same IP.\n- **Bridge Mode (Default)**: Containers get isolated internal IP addresses on a virtual bridge. They can reuse the same port internally, and traffic is mapped to host ports via port forwarding."
  },
  {
    id: 36,
    week: 5,
    topic: "Docker Hardening",
    question: "List 3 Docker hardening best practices.",
    answer: "Any 3 of the following:\n1. Use trusted/official base images.\n2. Run the container as a **non-root user** when possible.\n3. Minimize container size (smaller attack surface).\n4. Scan images for vulnerabilities (CVEs) using Docker Scout or Grype.\n5. Mount volumes as read-only where possible."
  },
  {
    id: 37,
    week: 5,
    topic: "CI/CD",
    question: "What is the difference between Continuous Integration (CI) and Continuous Delivery (CD)?",
    answer: "- **CI**: Developers integrate code frequently; every commit triggers automated builds and tests to detect errors early.\n- **CD**: Automates the release/deployment of the tested code to production/staging servers without manual intervention."
  },
  {
    id: 38,
    week: 5,
    topic: "CI/CD checks",
    question: "Explain the difference between a Security Hotspot and a Vulnerability check.",
    answer: "- **Vulnerability**: An identified, confirmed security weakness in code or dependencies that can be exploited.\n- **Security Hotspot**: Code patterns that are not definitely bugs, but need human inspection (e.g. hardcoded credentials or open API keys)."
  },
  {
    id: 39,
    week: 5,
    topic: "Testing Levels",
    question: "Define Unit tests, Integration tests, and End-to-End (E2E) tests.",
    answer: "- **Unit Tests**: Test individual components/functions in isolation (often mocking external dependencies).\n- **Integration Tests**: Verify interactions between connected components (e.g., app talking to a real DB).\n- **E2E/System Tests**: Emulate actual user flows to test the application logic end-to-end."
  },
  {
    id: 40,
    week: 5,
    topic: "Linux Utilities",
    question: "What is `jq` and how do you update a JSON file in place with it?",
    answer: "`jq` is a lightweight command-line JSON parser. To modify a file, you must stream the changes to a temporary file, then rename/move the temp file over the original:\n`jq '.field = value' data.json > tmp.json && mv tmp.json data.json`"
  },
  {
    id: 41,
    week: 5,
    topic: "Version Management",
    question: "What does `asdf local <tool> <version>` do?",
    answer: "Sets the version of a development tool (like Python, NodeJS, or kubectl) specifically for the current directory by writing a `.tool-versions` file. Whenever you navigate into that folder, `asdf` automatically loads that specific version."
  },
  {
    id: 42,
    week: 5,
    topic: "SSH Tunneling",
    question: "Explain Local SSH Port Forwarding (`ssh -L localport:remotehost:remoteport`).",
    answer: "It opens a secure tunnel from your local machine to a remote machine, mapping a port on your local laptop to a port running internally on the remote network without opening that remote port to the public internet."
  },
  {
    id: 43,
    week: 5,
    topic: "Bastion Host",
    question: "What is a Bastion Host (Jump Host)?",
    answer: "A heavily secured server positioned on the edge of a network to bridge external admins to private networks. It acts as a gateway; admins SSH to the Bastion host (often using a `-J` jump flag) to tunnel commands into secure internal instances."
  },

  // WEEK 6: CONTAINER ORCHESTRATION & APIs
  {
    id: 44,
    week: 6,
    topic: "Container Orchestration",
    question: "What is Container Orchestration and why is it needed?",
    answer: "It is the process of automating the lifecycle, deployment, networking, scaling, and load-balancing of containers across clusters of multiple compute nodes. Tools include Kubernetes and Docker Swarm."
  },
  {
    id: 45,
    week: 6,
    topic: "Declarative App Management",
    question: "Define 'Declarative Application Management' and 'Idempotency'.",
    answer: "- **Declarative Management**: You declare the *desired state* of infrastructure via files (YAML/JSON), and the orchestration system reconciles the system to match it (self-healing).\n- **Idempotency**: Running the same operation multiple times yields the exact same final state without side effects."
  },
  {
    id: 46,
    week: 6,
    topic: "Kubernetes Planes",
    question: "Distinguish between the Control Plane and the Data Plane in Kubernetes.",
    answer: "- **Control Plane**: Manages cluster state, schedules pods, stores configurations, and exposes the Kubernetes API.\n- **Data Plane (Workload Plane)**: The set of worker nodes that execute the actual containerized applications."
  },
  {
    id: 47,
    week: 6,
    topic: "K8s Pod",
    question: "What is a Pod in Kubernetes?",
    answer: "The smallest deployable unit in Kubernetes. It represents a single runtime instance containing one or more tightly coupled containers that share the same IP address, network namespace, and storage volumes."
  },
  {
    id: 48,
    week: 6,
    topic: "K8s Service & Ingress",
    question: "Compare a Kubernetes Service and Ingress.",
    answer: "- **Service**: An internal networking abstraction that provides a stable IP address and port to access a set of pods.\n- **Ingress**: An API object that manages external HTTP/S access to services, routing traffic based on hostnames or paths."
  },
  {
    id: 49,
    week: 6,
    topic: "K8s Storage",
    question: "What are PV and PVC, and why are they separated?",
    answer: "- **PV (Persistent Volume)**: Actual storage provisioned by the admin.\n- **PVC (Persistent Volume Claim)**: A request for storage by a user/app.\n\nSeparation makes applications portable: they request storage abstractly (PVC) without needing to know physical vendor endpoints."
  },
  {
    id: 50,
    week: 6,
    topic: "Storage Architecture",
    question: "What is the difference between Block Storage and Object Storage?",
    answer: "- **Block Storage**: Mimics raw hard drives (volumes). It is fast, optimized for high read/write cycles, and attached directly to a node (often restricted to single-node mounting, `ReadWriteOnce`).\n- **Object Storage**: Files stored as unstructured blobs accessed via HTTP APIs (higher latency, high capacity, immutable files)."
  },
  {
    id: 51,
    week: 6,
    topic: "REST vs RPC",
    question: "What is the main conceptual difference between REST and RPC APIs?",
    answer: "- **RPC (Remote Procedure Call)**: Focuses on **Actions** and verbs. Clients call remote functions directly (e.g. `getUser()`, `deleteItem()`).\n- **REST (Representational State Transfer)**: Focuses on **Resources** (nouns) represented by stable URLs. Clients navigate states by performing standard HTTP verbs (GET, POST, PUT, DELETE) on these URLs."
  },
  {
    id: 52,
    week: 6,
    topic: "REST Verbs",
    question: "When should you use PUT vs POST in REST?",
    answer: "- **PUT**: Used when the target resource URL is **known** and defined by the client (creates or overwrites a resource at a specific ID, idempotent).\n- **POST**: Used when the target resource URL is **generated by the server** (creates a child resource under a collection, not idempotent)."
  },

  // WEEK 7: SERVERLESS & TESTING
  {
    id: 53,
    week: 7,
    topic: "Serverless Computing",
    question: "What is Serverless / FaaS (Function as a Service)?",
    answer: "A development model where infrastructure management is outsourced. Cloud providers handle scaling, server patching, and execution. Developers write independent, ephemeral functions and are billed strictly for compute time consumed (often described as 'server-unseen')."
  },
  {
    id: 54,
    week: 7,
    topic: "FaaS Functions",
    question: "How does a FaaS function differ from a standard Python function?",
    answer: "A standard function runs inside the same system process. A FaaS function is a standalone execution unit—often packaged inside an ephemeral container—that communicates via JSON over HTTP and runs in its own isolated environment."
  },
  {
    id: 55,
    week: 7,
    topic: "Pure Functions",
    question: "Define a Pure Function in FaaS.",
    answer: "A function that is both **stateless** (does not store data internally between calls) and **side-effect-free** (does not modify external systems or databases). Its output depends strictly and only on its inputs."
  },
  {
    id: 56,
    week: 7,
    topic: "Sync vs Async FaaS",
    question: "How should you handle long-running operations in a FaaS architecture?",
    answer: "FaaS connections have strict timeouts. For long tasks, use **asynchronous functions**: immediately return an HTTP 202 (Accepted) code, and process the task in the background using a **message queue** to buffer data and trigger a completion event when done."
  },
  {
    id: 57,
    week: 7,
    topic: "Fission Execution",
    question: "In Fission (FaaS on K8s), compare PoolManager and NewDeploy.",
    answer: "- **PoolManager**: Keeps a pool of generic warm pods. It loads function packages instantly upon request. Minimizes latency ('cold starts') but handles high concurrent scaling poorly.\n- **NewDeploy**: Spawns dedicated pods for functions. It handles high concurrent loads and scales using autoscalers, but incurs a startup delay ('cold start')."
  },
  {
    id: 58,
    week: 7,
    topic: "Autoscaling",
    question: "Why does autoscaling work best with stateless pods?",
    answer: "Autoscalers (like K8s HPA) rapidly scale pods up or down. If a pod holds internal state, termination destroys data, and scaling up causes state synchronization conflicts. Stateful databases require orchestrators like K8s `StatefulSets`."
  },

  // WEEK 8: BIG DATA & ELASTICSEARCH
  {
    id: 59,
    week: 8,
    topic: "Big Data",
    question: "What are the Four V's of Big Data?",
    answer: "1. **Volume**: Total scale/size of the data.\n2. **Velocity**: Frequency/speed at which new data is generated and processed.\n3. **Variety**: Diversity and structural formats of data (structured vs unstructured).\n4. **Veracity**: Trustworthiness/accuracy of data sources (provenance)."
  },
  {
    id: 60,
    week: 8,
    topic: "NoSQL Models",
    question: "List three common NoSQL data models and an example database for each.",
    answer: "1. **Key-Value Store**: Redis, RocksDB.\n2. **Column Family (BigTable)**: Apache Cassandra, Accumulo.\n3. **Document-Oriented**: MongoDB, ElasticSearch, CouchDB."
  },
  {
    id: 61,
    week: 8,
    topic: "Sharding",
    question: "What is Sharding in database clusters?",
    answer: "Horizontal partitioning of database tables. It splits data rows across multiple server instances (nodes). This allows databases to exceed the physical disk storage limit of any single machine."
  },
  {
    id: 62,
    week: 8,
    topic: "CouchDB Clusters",
    question: "What are the CAP properties of a CouchDB cluster?",
    answer: "CouchDB is an **AP** system (Availability and Partition Tolerance). It has a leaderless multi-master setup; any node can write, and changes sync asynchronously. In a network partition, nodes accept writes, sacrificing consistency."
  },
  {
    id: 63,
    week: 8,
    topic: "PostgreSQL Federation",
    question: "What are the CAP properties of a Federated PostgreSQL setup using Foreign Data Wrappers?",
    answer: "It is a **CA** system (Consistency and Availability). A single master node handles queries and coordinates writes across nodes using a **two-phase commit (2PC)**. It **cannot** tolerate a network partition; if any node splits off, operations fail."
  },
  {
    id: 64,
    week: 8,
    topic: "ElasticSearch Clusters",
    question: "What are the CAP properties of ElasticSearch?",
    answer: "It is a mix of **CP** and **AP** designs. It uses Paxos-like consensus to elect master nodes and a two-phase commit to sync primary shards to replicas. It **does not** fully tolerate network partitions while maintaining availability, prioritizing structural consistency."
  },
  {
    id: 65,
    week: 8,
    topic: "CAP Trade-offs",
    question: "Explain the two-phase commit (2PC) approach to consistency.",
    answer: "2PC locks transaction data across all nodes, writes transaction logs, commits only when **all** nodes acknowledge readiness, and rolls back (aborts) if any node fails or partitions. Enforces Consistency but kills Availability and speed."
  },
  {
    id: 66,
    week: 8,
    topic: "CAP Trade-offs",
    question: "Explain the Paxos consensus model.",
    answer: "Paxos (and Raft) relies on a quorum. Proposers query Acceptors. Once a **majority (quorum)** accepts a value, it is committed. It maintains consistency and recovers from partitions, but isolated nodes cannot reach a quorum, reducing availability."
  },
  {
    id: 67,
    week: 8,
    topic: "CAP Trade-offs",
    question: "Explain Multi-Version Concurrency Control (MVCC).",
    answer: "An optimistic locking model (used by CouchDB). Every update creates a new revision version. If concurrent updates conflict during a partition, they are stored, and resolution is delegated to the application layer. Prioritizes Availability and Partition Tolerance."
  },
  {
    id: 68,
    week: 8,
    topic: "Sharding Methods",
    question: "Compare Hash Sharding and Range Sharding.",
    answer: "- **Hash Sharding**: Distributes database rows evenly across shards using a mathematical hash of the row key. Prevents hot nodes but complicates range queries.\n- **Range Sharding**: Stores contiguous keys (e.g. timestamps or locations) on the same node. Optimizes queries for specific ranges, but can create high-traffic hot nodes."
  },
  {
    id: 69,
    week: 8,
    topic: "ElasticSearch",
    question: "What is ElasticSearch good and bad at?",
    answer: "- **Good**: Full-text indexing, vector search (HNSW), logs/time-series data, read-heavy queries.\n- **Bad**: Highly relational data (no joins), multiple-record transactional operations (all-or-nothing writes; only supports single-document safe transactions)."
  },
  {
    id: 70,
    week: 8,
    topic: "ElasticSearch Stack",
    question: "Name the components of the ELK Stack (ES, FileBeat, MetricBeat, LogStash, Kibana).",
    answer: "- **ElasticSearch**: Storage and search engine.\n- **FileBeat**: Monitors file updates (e.g. log lines) and ships them.\n- **MetricBeat**: Collects OS and container health metrics.\n- **LogStash**: Receives, parses, transforms, and indexes data.\n- **Kibana**: Admin UI dashboard."
  },
  {
    id: 71,
    week: 8,
    topic: "ElasticSearch Sizing",
    question: "What is the recommended size range for an ElasticSearch shard?",
    answer: "An optimal ElasticSearch shard should hold between **10 to 50 GB** of data. Shards that are too large slow down queries and node rebalancing; shards that are too small increase cluster index overhead."
  },
  {
    id: 72,
    week: 8,
    topic: "ElasticSearch Images",
    question: "Why should you never store images in ElasticSearch?",
    answer: "Images require Base64 encoding (increasing size by ~33%), bloating index sizes. This causes memory pressure, slows replication and backups, and degrades search performance. **Solution**: Store images in cloud object storage (S3) and save URLs/metadata in ElasticSearch."
  },
  {
    id: 73,
    week: 8,
    topic: "Database Pagination",
    question: "What is cursor-based pagination and why is it used?",
    answer: "A method where the server returns a cursor (bookmark/pointer token) indicating where the page ended. The client passes this cursor to fetch the next set of rows. Used in big databases because limit/offset queries get progressively slower as offsets increase."
  },
  {
    id: 74,
    week: 8,
    topic: "Vector Search",
    question: "What is the vector search algorithm used by ElasticSearch, and how does it relate to RAG?",
    answer: "ElasticSearch uses the **HNSW (Hierarchical Navigable Small World)** algorithm. In Retrieval-Augmented Generation (RAG), a question is vectorized, vector search retrieves relevant text context, and both are sent to an LLM to generate an answer."
  },

  // WEEK 9: VIRTUALIZATION & AWS
  {
    id: 75,
    week: 9,
    topic: "Virtualization",
    question: "What are the three properties of a Virtual Machine Monitor (VMM / Hypervisor) defined by Popek & Goldberg?",
    answer: "1. **Fidelity**: Software behaves identically on the VM as it would on hardware (excluding timing details).\n2. **Performance**: An overwhelming majority of instructions execute directly on hardware without VMM intervention.\n3. **Safety**: The VMM manages and isolates all hardware resources."
  },
  {
    id: 76,
    week: 9,
    topic: "Instruction types",
    question: "Define Privileged, Sensitive, and Innocuous instructions.",
    answer: "- **Privileged**: Instructions that trap when run in user mode (e.g. hardware formatting).\n- **Sensitive**: Behavior depends on hardware configuration or active execution mode.\n- **Innocuous**: Non-privileged, non-sensitive instructions (e.g. math operations, user apps)."
  },
  {
    id: 77,
    week: 9,
    topic: "Popek-Goldberg Theorem",
    question: "What is the Popek-Goldberg Virtualization Theorem?",
    answer: "A VMM can be constructed *only if* the set of sensitive instructions is a **strict subset** of privileged instructions (i.e. every sensitive instruction must trigger a hardware trap in user space to let the VMM handle it)."
  },
  {
    id: 78,
    week: 9,
    topic: "Hypervisor Types",
    question: "Compare Type-1 (Bare Metal) and Type-2 (Hosted) Hypervisors.",
    answer: "- **Type 1 (Bare Metal)**: Hypervisor runs directly on the hardware (highly performant, secure, used in datacenters like VMware, Hyper-V).\n- **Type 2 (Hosted)**: Runs on top of a host OS (high overhead, convenient for dev work like VirtualBox, VMware Workstation)."
  },
  {
    id: 79,
    week: 9,
    topic: "Virtualization Types",
    question: "Compare Full Virtualization and Para-virtualization.",
    answer: "- **Full Virtualization**: Hypervisor emulates all hardware. The guest OS is unmodified and unaware it is running inside a VM (heavy trap overheads).\n- **Para-virtualization**: The guest OS is modified to communicate directly with the hypervisor API (hypercalls), reducing overhead and improving performance, but losing portability."
  },
  {
    id: 80,
    week: 9,
    topic: "Virtualization Tech",
    question: "Define Binary Translation and Hardware-Assisted Virtualization.",
    answer: "- **Binary Translation**: Software scans guest instructions on the fly, replacing sensitive instructions with safe emulated code blocks (high CPU overhead).\n- **Hardware-Assisted**: CPUs (Intel VT-x, AMD-V) add hardware virtualization states (e.g. VMX root/non-root), allowing VMs to run natively without binary translation."
  },
  {
    id: 81,
    week: 9,
    topic: "Memory Isolation",
    question: "How do hypervisors protect memory bounds between virtual machines?",
    answer: "They manage guest **page tables**, which map virtual memory addresses to physical RAM locations. The VMM isolates these mappings so no VM's page table points to memory allocated to another VM."
  },
  {
    id: 82,
    week: 9,
    topic: "AWS Networking",
    question: "What is an AWS VPC, and what is the difference between Public and Private subnets?",
    answer: "- **VPC (Virtual Private Cloud)**: An isolated virtual network on AWS.\n- **Public Subnet**: Connected to an Internet Gateway; instances get public IPs and can be accessed from the internet.\n- **Private Subnet**: No direct internet connection. Safe for databases and backend code."
  },
  {
    id: 83,
    week: 9,
    topic: "AWS Services",
    question: "Describe these AWS Services: EC2, S3, Systems Manager.",
    answer: "- **EC2 (Elastic Compute Cloud)**: Virtual server hosting (VMs).\n- **S3 (Simple Storage Service)**: Scalable object storage.\n- **Systems Manager**: Fleet manager to securely run terminal commands or automate patch updates without opening public SSH ports."
  },
  {
    id: 84,
    week: 9,
    topic: "AWS Containers",
    question: "What are ECS, EKS, and Fargate on AWS?",
    answer: "- **ECS**: Amazon's proprietary container orchestrator.\n- **EKS**: Managed Kubernetes service.\n- **Fargate**: Serverless container execution engine that runs ECS/EKS containers without managing underlying EC2 VMs."
  },

  // WEEK 10: CLOUD SECURITY
  {
    id: 85,
    week: 10,
    topic: "Security Challenges",
    question: "What are the 4 A's of security in a distributed system?",
    answer: "1. **Authentication**: Confirming identity (who are you?).\n2. **Authorization**: Enforcing permissions (what are you allowed to do?).\n3. **Audit**: Recording user actions (who did what, and when?).\n4. **Accounting**: Tracking resource consumption (who pays?)."
  },
  {
    id: 86,
    week: 10,
    topic: "Authentication",
    question: "How do Public Keys and Certification Authorities (CAs) establish identity?",
    answer: "Public keys act as identity cards containing CN (Common Name), OU, etc. A **Certification Authority (CA)** digitally signs these keys, validating that the key owner is who they claim to be based on organizational trust."
  },
  {
    id: 87,
    week: 10,
    topic: "Single Sign-On",
    question: "Why is Single Sign-On (SSO) challenging across cloud environments?",
    answer: "Providers design proprietary security models to prevent interoperability. Because there is no central CA or identity provider, bridging security states across distinct systems (OpenID, Facebook, corporate SAML, Azure AD) requires complex federation."
  },
  {
    id: 88,
    week: 10,
    topic: "Virtual Organizations",
    question: "What is a Virtual Organization (VO) in the context of cloud authorization?",
    answer: "A dynamic collaboration spanning distinct organizations (e.g. Unimelb and a hospital). A VO maps collaborative access policies so users can access shared project datasets and compute resources securely without transferring host domain logins."
  },
  {
    id: 89,
    week: 2,
    topic: "Hardware Threading",
    question: "Explain the difference in execution architecture between a Basic CPU and a Hardware Threading CPU.",
    answer: "- **Basic CPU**: Features a single Control Unit (CU) managing cache and arithmetic/logic execution units (Integer, Floating Point, Vector). It executes one thread at a time.\n- **Hardware Threading CPU**: Features multiple CUs sharing a single cache and a single set of execution/arithmetic units. While this allows processing more instructions per cycle, intensive computation of one type (e.g. vector operations) by one thread can tie up execution units, preventing other threads/CUs from executing."
  },
  {
    id: 90,
    week: 2,
    topic: "Multi-Core CPU",
    question: "In a Multi-Core CPU architecture, what are the three primary cache challenges?",
    answer: "- **Cache coherence**: Ensuring that data updates in one core's local cache (e.g. L1/L2) are propagated so all other cores see consistent memory states.\n- **Cache read/write performance**: Potential data access bottlenecks under heavy concurrent load.\n- **Cache stalls**: Periods where a CPU core sits idle because it is waiting to fetch data from memory or a higher cache level."
  },
  {
    id: 91,
    week: 4,
    topic: "OpenStack Nova",
    question: "Describe the role of nova-api, nova-scheduler, nova-conductor, and nova-compute when a VM request is processed.",
    answer: "- **`nova-api`**: Receives client REST requests for VM constraints, updates the DB, and coordinates with other components via the Advanced Message Queuing Protocol (**AMQP**) messaging bus.\n- **`nova-scheduler`**: Inspects the VM request and selects the most appropriate physical hypervisor node based on host capabilities.\n- **`nova-conductor`**: Acts as a secure database access proxy for hypervisor nodes (`nova-compute`), preventing direct database access from compromised nodes.\n- **`nova-compute`**: A worker daemon running on the hypervisor host that interfaces with hypervisors/virtualization tools (e.g., `Libvirt` + `KVM` or QEMU) to build and run the VM."
  },
  {
    id: 92,
    week: 4,
    topic: "Cloud Storage",
    question: "Compare the three major Cloud Storage Models (Object, Block, and File) in terms of structure and use cases.",
    answer: "- **Object Storage**: Decomposes data into discrete units (objects) with binary data and extensive metadata. Accessed via unique ID in a flat namespace (HTTP API). Ideal for unstructured data (e.g. AWS S3).\n- **Block Storage**: Splits data into fixed-size blocks with unique addresses. Accessed via lookup tables for direct raw reads/writes. Ideal for database disks (e.g. OpenStack Cinder).\n- **File Storage**: Human-oriented hierarchical directory tree. Accessed via common sharing protocols (e.g. NFS/SMB). Ideal for concurrent shared file systems."
  },
  {
    id: 93,
    week: 5,
    topic: "Containers vs VMs",
    question: "How do Containerization (Docker) and Virtualization (Hypervisor VMs) compare across Boot Time, Disk, Memory, and Isolation?",
    answer: "- **Boot Time**: Seconds (Containers) vs. Minutes (VMs).\n- **Disk Usage**: Small (MBs to a few hundred MBs) vs. Large (GBs per VM).\n- **Memory Usage**: Low (shares libraries, no OS overhead) vs. High (dedicated guest OS RAM per VM).\n- **Isolation**: Process-level isolation (`namespaces`/`cgroups`) vs. Full OS-level isolation (stronger, heavier)."
  },
  {
    id: 94,
    week: 5,
    topic: "Cloud Deployment",
    question: "What are the four main Cloud Deployment Models?",
    answer: "1. **Bare Metal**: Apps run directly on the single physical server OS.\n2. **Virtualized**: Multiple independent VMs run on a hypervisor.\n3. **Containerized**: Isolated containers run on a shared engine on the host OS.\n4. **Containerized on Virtualized**: Containers run inside guest VMs managed by a hypervisor. *This is the standard model for cloud deployments (e.g., Kubernetes on AWS EC2).*"
  },
  {
    id: 95,
    week: 5,
    topic: "Dockerfile Syntax",
    question: "Distinguish between Build-Time and Runtime instructions in a Dockerfile, listing examples of each.",
    answer: "- **Build-Time Instructions** (Executed when creating the image):\n  - `FROM`: Defines the base image.\n  - `ENV`: Declares environment variables.\n  - `WORKDIR`: Sets the working directory.\n  - `COPY`/`ADD`: Copies files from host to image.\n  - `RUN`: Executes shell commands to install packages/build configurations.\n- **Runtime/Start-Up Instructions** (Executed when starting the container):\n  - `ENTRYPOINT`: Declares the default binary/command to run.\n  - `CMD`: Declares default arguments passed to the `ENTRYPOINT` (can be overridden by runtime inputs)."
  },
  {
    id: 96,
    week: 5,
    topic: "Docker Runtime",
    question: "What is the purpose of the exec \"$@\" instruction at the end of a custom Docker ENTRYPOINT script?",
    answer: "- **Process Hijack**: It replaces the shell wrapper process with the command specified in `CMD` (e.g. Nginx).\n- **Signal Forwarding**: This ensures the main application runs as **PID 1**, allowing it to receive OS process signals (like SIGTERM/SIGINT) directly. This enables graceful shutdowns and proper lifecycle management."
  },
  {
    id: 97,
    week: 5,
    topic: "Docker CLI",
    question: "What are the core commands in the Docker container lifecycle, and what does the -f flag do in deletion?",
    answer: "- **`docker create`**: Creates a container from an image but does not start it.\n- **`docker start`**: Launches a stopped/created container.\n- **`docker run`**: Creates and starts a container in a single step (run with `-d` for background/detached mode).\n- **`docker restart`**: Restarts a container.\n- **`docker stop`**: Gracefully stops a running container.\n- **`docker rm`**: Removes a stopped container.\n- **`docker rm -f`**: Force-removes a running container by sending a SIGKILL signal."
  },
  {
    id: 98,
    week: 7,
    topic: "Cloud Architectures",
    question: "Compare Monolithic and Serverless/FaaS architectures across Scaling, Resource Allocation, and Fault Isolation.",
    answer: "- **Monolithic**:\n  - **Scaling**: Limited to vertical scaling (larger VM) of the entire app.\n  - **Resource Allocation**: Over-allocation (all modules loaded in memory, wasting resources).\n  - **Fault Isolation**: Single point of failure (OOM or crash in one module brings down the whole app).\n- **Serverless/FaaS**:\n  - **Scaling**: Independent horizontal scaling of functions across cluster nodes.\n  - **Resource Allocation**: On-demand loading (functions only load/run when triggered, reducing idle costs).\n  - **Fault Isolation**: High isolation (failure in one function does not affect other services)."
  },
  {
    id: 99,
    week: 7,
    topic: "Fission CLI",
    question: "Contrast the CLI style of Fission and Kubectl, and list the abbreviations for Function, Route, Trigger, Package, and Specs.",
    answer: "- **CLI Style**: Fission uses **Object-Action** syntax (`fission <object> <action>`), whereas Kubectl uses **Action-Object** syntax (`kubectl get nodes`).\n- **Abbreviations**:\n  - `fn` -> Function\n  - `env` -> Environment\n  - `rt` -> Route\n  - `tr` -> Trigger\n  - `pkg` -> Package\n  - `spec`/`specs` -> Specification"
  },
  {
    id: 100,
    week: 7,
    topic: "Fission Routing",
    question: "How are HTTP Triggers (Routes) created in Fission, and how are they implemented under the hood?",
    answer: "- **Creation**: Link an HTTP endpoint method and path to a function:\n  `fission route create --name hellort --function hello --method GET --url /hello`\n- **Execution**: Can be triggered inside the cluster network or after establishing a port-forward.\n- **Under the hood**: Fission maps and deploys these routes using Kubernetes **Ingress** controllers."
  },
  {
    id: 101,
    week: 7,
    topic: "Fission Custom Environments",
    question: "What files are required to build a Fission Custom Package, and how do you deploy a function with it?",
    answer: "- **Required Files**:\n  1. `requirements.txt`: Python package dependency list.\n  2. `build.sh`: Shell script running `pip install` commands.\n  3. `__init__.py`: Package initialization script.\n- **Create Package**: Zip files and build:\n  `fission package create --name mypkg --sourcearchive mypkg.zip --env python --buildcmd './build.sh'`\n- **Create Function**:\n  `fission fn create --name myfn --env python --pkg mypkg --entrypoint \"myfn.main\"`"
  },
  {
    id: 102,
    week: 7,
    topic: "Fission Archives",
    question: "Compare Fission Source Archives (--sourcearchive) and Deploy Archives (--deployarchive).",
    answer: "- **Source Archive**: Contains uncompiled source files. Fission unzips, builds (compiles), and installs requirements inside the environment container.\n- **Deploy Archive**: Contains pre-compiled binaries or static files. Fission unzips the archive directly without any compilation phase. Highly useful to bypass compile times."
  },
  {
    id: 103,
    week: 7,
    topic: "Fission Triggers",
    question: "Explain Timer Triggers and Watch Triggers in Fission.",
    answer: "- **Timer Triggers**: Execute a function on a cron scheduled interval (e.g. `fission timer create --name t1 --function fn1 --cron \"@every 1m\"`). *Constraint*: The timer interval must be longer than the function execution runtime to prevent infinite pod accumulation.\n- **Watch Triggers**: Execute a function in response to Kubernetes resource events (e.g. pods/ingresses lifecycle updates) (e.g. `fission watch create --name w1 --function fn1 --type pod`)."
  },
  {
    id: 104,
    week: 7,
    topic: "Fission WebSockets",
    question: "Outline the process flow of Fission WebSockets for asynchronous execution.",
    answer: "1. **Trigger**: Client sends an HTTP POST request to launch a long-running task.\n2. **Acknowledge**: Server queues the task and returns HTTP **202 (Accepted)** instantly.\n3. **Connection**: Client establishes a two-way non-blocking **WebSocket** channel.\n4. **Processing**: A Fission worker retrieves the task from the queue and executes it.\n5. **Callback**: Once finished, the worker pushes results back to the client via the open WebSocket."
  },
  {
    id: 105,
    week: 7,
    topic: "Fission Specs",
    question: "What are Fission Specs and how do the apply, --delete, and destroy commands behave?",
    answer: "- **Fission Specs**: A directory of declarative YAML configuration files representing Fission resources (implementing Infrastructure as Code).\n- **Commands**:\n  - `fission specs apply`: Deploys resources declared in the local spec files to the cluster.\n  - `fission specs apply --delete`: Deploys local specs and **deletes** any Fission resources on the cluster that are not defined in the local specs directory (reconciles drift).\n  - `fission specs destroy`: Removes all spec-defined resources from the cluster."
  },
  {
    id: 106,
    week: 7,
    topic: "Fission Timeouts",
    question: "Explain the three core timeout configurations in Fission: --specializationtimeout, --fntimeout, and --idletimeout.",
    answer: "- **`--specializationtimeout`**: The maximum time allowed for a function pod environment to start up and load the function package (default 120s).\n- **`--fntimeout`**: The maximum execution duration allowed for a single function run (default 60s).\n- **`--idletimeout`**: The period of inactivity allowed before a specialized function pod is recycled/terminated (default 120s)."
  },
  {
    id: 107,
    week: 7,
    topic: "FaaS Testing",
    question: "What are the four core principles of software testing in FaaS/Serverless systems?",
    answer: "1. **Automatically**: Tests must execute in automated pipelines to guarantee code quality and save developer time.\n2. **Early**: Write tests during design (TDD) to catch architectural and security issues early.\n3. **Comprehensively**: Test the system as a whole; testing independent modules in isolation rarely catches integration defects.\n4. **Incrementally**: Test on every small modification to prevent regression bugs."
  },
  {
    id: 108,
    week: 7,
    topic: "Testing Tiers",
    question: "Explain the three Testing Tiers (Unit, Integration, and End-to-End) and the benefit of Test-Driven Development (TDD).",
    answer: "- **Unit Tests**: Verify isolated functions or classes.\n- **Integration Tests**: Verify interactions between modules, using **mocking** (e.g. database mocks) to simulate connection failures/error states.\n- **End-to-End (E2E) Tests**: Verify the full system from client inputs to final database states.\n- **TDD Benefit**: Writing tests first clarifies specifications and builds a robust regression safety net."
  },
  {
    id: 109,
    week: 7,
    topic: "FaaS Database Anti-Patterns",
    question: "List 5 database design and security anti-patterns in a FaaS architecture.",
    answer: "Any 5 of the following:\n1. **No Database Isolation**: Failing to run separate test and production databases.\n2. **ConfigMap Credentials**: Storing secrets in plain-text ConfigMaps rather than Kubernetes Secrets.\n3. **No Mocking of Error States**: Skipping integration tests for network outages or malformed payloads.\n4. **Relational Mappings in NoSQL**: Attempting ACID-style transactions on document-oriented databases like Elasticsearch.\n5. **Public Test Routes**: Exposing test routes (e.g. `/wipedatabase`) to the public internet.\n6. **Raw DB Leaks**: Passing raw Elasticsearch outputs directly to clients without sanitization.\n7. **No Schema Checking**: Accepting inputs without validating their JSON schema.\n8. **Missing Pagination**: Returning large sets of data in a single search response."
  },
  {
    id: 110,
    week: 8,
    topic: "Elasticsearch Metadata",
    question: "What metadata fields are automatically appended to documents indexed in Elasticsearch?",
    answer: "- **`_index`**: The index containing the document.\n- **`_id`**: The unique document identifier.\n- **`_version`**: Incremental count of document updates.\n- **`_primary_term`**: Identifies the primary shard.\n- **`_seq_no`**: Shard-specific change sequence number.\n- **`_source`**: The original raw JSON body.\n- **`_routing`**: Path directing the document to a specific shard.\n- **`_score`**: Relevancy ranking score returned in search queries."
  },
  {
    id: 111,
    week: 8,
    topic: "Elasticsearch Queries",
    question: "What are the four main query interfaces supported by Elasticsearch?",
    answer: "1. **Query DSL**: The primary JSON-based query interface extending Apache Lucene syntax.\n2. **SQL**: A query translator layer supporting a limited subset of standard SQL.\n3. **EQL (Event Query Language)**: Specific language for event matching and temporal correlation searches.\n4. **ES|QL (Elasticsearch Piped Query Language)**: Piped query syntax that supports transforms and data enrichment."
  },
  {
    id: 112,
    week: 8,
    topic: "Elasticsearch SQL",
    question: "What are the dialect limitations of Elasticsearch SQL, and how can they be bypassed?",
    answer: "- **Limitations**: No standard relational joins, limited geodistance queries, no `DISTINCT`, and multi-valued fields cannot be returned.\n- **Bypasses**:\n  - Use the `/_sql/translate` API endpoint to convert SQL queries into JSON Query DSL.\n  - Add a `filter` clause containing a Query DSL expression directly inside SQL queries."
  },
  {
    id: 113,
    week: 8,
    topic: "Elasticsearch Concurrency",
    question: "How does Elasticsearch handle concurrent updates, and how are HTTP 409 Conflict errors prevented?",
    answer: "- **Optimistic Locking**: Elasticsearch does not support record locking or `SELECT FOR UPDATE`.\n- **Prevention**: Updates/deletes must include the document's current `_seq_no` and `_primary_term`.\n- **Conflicts**: If these fields are omitted or mismatched with the database state, Elasticsearch returns an **HTTP 409 Conflict** error to prevent overwriting concurrent updates."
  },
  {
    id: 114,
    week: 8,
    topic: "Event Query Language",
    question: "What is EQL Sequence Matching used for, and write a sample query to find a process chain within a time span.",
    answer: "- **Use Case**: Used to identify temporal relationships and multi-step event sequences in logs (e.g. security audits).\n- **Sample Query**:\n  ```json\n  sequence with maxspan=1m\n    [ process where process.name == \"cmd.exe\" ]\n    ![ process where stringContains(process.command_line, \"ocx\") ]\n    [ file where stringContains(file.name, \"scrobj.dll\") ]\n  ```"
  },
  {
    id: 115,
    week: 8,
    topic: "Elasticsearch Joins",
    question: "What are the three methods to achieve relational modeling/joins in Elasticsearch?",
    answer: "1. **Parent-Child Relationships**: Connecting two documents inside the same index (supported *only in Query DSL*).\n2. **Enriched Data**: Merging fields from different indexes dynamically in the same query (supported *only in ES|QL*).\n3. **Lookup Indexes**: Simpler relational-style join mappings (supported *only in ES|QL*)."
  }
];
