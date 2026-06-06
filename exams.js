// Cluster & Cloud Computing - Practice Exams Database
// Includes Past Exams and AI-Generated Exams conforming to the 35 MCQ + 15 marks Short Answer format

window.EXAMS = [
  {
    "id": "exam_2015_s1",
    "title": "Semester 1, 2015 - Past Exam",
    "type": "Past Exam",
    "questionsCount": 35,
    "mcqs": [
      {
        "id": 1,
        "question": "Under course conventions, which of the following is NOT one of the five NIST essential characteristics of Cloud Computing?",
        "options": [
          "On-demand self-service",
          "Resource pooling",
          "Rapid elasticity",
          "Multithreaded hyper-threading",
          "Measured service"
        ],
        "answer": 3,
        "explanation": "NIST essential characteristics are: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, and Measured service."
      },
      {
        "id": 2,
        "question": "What does 'Resource Pooling' in cloud computing refer to?",
        "options": [
          "Allocating a single physical server dedicated entirely to one business client",
          "Grouping multiple separate client databases into a single un-partitioned SQL table",
          "Serving multiple consumers using a multi-tenant model with dynamically assigned physical and virtual resources",
          "Sharing local files over an NFS mount point",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "Resource pooling allows the provider to dynamically allocate physical and virtual resources from a shared pool to multiple users based on demand."
      },
      {
        "id": 3,
        "question": "Which of the following represents horizontal scaling?",
        "options": [
          "Upgrading a single VM from 4 vCPUs to 16 vCPUs",
          "Replacing a 2.4 GHz CPU with a 3.6 GHz CPU",
          "Adding more virtual machine instances to a cluster to share the workload load",
          "Attaching a larger Cinder block storage volume to an active instance",
          "Switching from a public cloud to a private cloud"
        ],
        "answer": 2,
        "explanation": "Horizontal scaling (scaling out) involves adding more nodes/servers to the pool, whereas vertical scaling (scaling up) involves increasing the capacity of a single node."
      },
      {
        "id": 4,
        "question": "What is the key bottleneck identified by Amdahl's Law when adding more processors?",
        "options": [
          "The size of the L3 cache",
          "The cost of public cloud egress bandwidth",
          "The sequential (non-parallelizable) portion of the code",
          "The number of concurrent threads in memory",
          "The database transaction lock wait times"
        ],
        "answer": 2,
        "explanation": "Amdahl's law calculates theoretical speedup based on a fixed problem size, showing that speedup is limited by the fraction of the program that cannot be parallelized."
      },
      {
        "id": 5,
        "question": "In the CAP theorem, what does Consistency (C) mean?",
        "options": [
          "Every transaction is written to at least two database shards",
          "Every read request receives the most recent write or an error",
          "The database schema is verified against a strict JSON schema template",
          "Every database node responds without error within a given time limit",
          "Data schemas remain identical across all public and private tables"
        ],
        "answer": 1,
        "explanation": "Consistency means that every client query returns the same state/non-error answer from all nodes of the cluster."
      },
      {
        "id": 6,
        "question": "Which database technology is a classic CA (Consistency & Availability) system under the CAP theorem, failing in the presence of network partitions?",
        "options": [
          "CouchDB leaderless multi-master setup",
          "Elasticsearch index replication cluster",
          "Federated PostgreSQL using Foreign Data Wrappers and two-phase commit",
          "Apache Cassandra column family model",
          "Redis key-value caching"
        ],
        "answer": 2,
        "explanation": "A federated database using FDWs and 2-phase commit enforces strict consistency across all nodes. If a partition occurs, it must abort writes, sacrificing partition tolerance (P)."
      },
      {
        "id": 7,
        "question": "Which OpenStack component acts as the network controller, managing ports, firewall security groups, and floating IPs?",
        "options": [
          "Nova",
          "Horizon",
          "Neutron",
          "Glance",
          "Keystone"
        ],
        "answer": 2,
        "explanation": "Neutron handles all virtual networking services (ports, subnets, routers, security groups) in OpenStack."
      },
      {
        "id": 8,
        "question": "What is the role of 'nova-conductor' in the OpenStack compute architecture?",
        "options": [
          "Exposing public REST APIs for client commands",
          "Scheduling VM placement based on physical hypervisor capabilities",
          "Acting as a database proxy for nova-compute nodes to prevent direct database compromises",
          "Managing local volume mount lookups",
          "Managing floating IP routing rules"
        ],
        "answer": 2,
        "explanation": "nova-conductor sits between nova-compute and the main database, proxying database transactions so worker nodes do not have direct DB write access."
      },
      {
        "id": 9,
        "question": "What is the primary difference in isolation mechanism between Docker containers and hypervisor VMs?",
        "options": [
          "Containers isolate hardware resources; VMs isolate network ports",
          "Containers use OS kernel namespaces and cgroups; VMs use full hardware virtualization via a hypervisor layer",
          "Containers use shadow page tables; VMs use basic page tables",
          "Containers are managed via sbatch; VMs are managed via Magnum",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Containers share the host operating system kernel and use namespaces and cgroups to isolate processes. VMs execute a complete guest OS on top of a hypervisor."
      },
      {
        "id": 10,
        "question": "What is the purpose of the ENTRYPOINT instruction in a Dockerfile?",
        "options": [
          "To copy files from the host workspace into the container image",
          "To declare the environment variables inside the container",
          "To configure the default executable command that runs when the container starts up",
          "To define the port numbers mapped to the host bridge network",
          "To specify the base OS template image"
        ],
        "answer": 2,
        "explanation": "ENTRYPOINT sets the command that will run when the container starts. CMD provides default arguments that can be appended or overridden."
      },
      {
        "id": 11,
        "question": "What is a Pod in Kubernetes?",
        "options": [
          "A single VM node managed by the control plane master",
          "A group of persistent volumes attached to a namespace",
          "The smallest deployable unit, representing one or more containers sharing network namespaces and storage volumes",
          "An external ingress controller routing HTTP paths",
          "A secure secret vault for ConfigMap details"
        ],
        "answer": 2,
        "explanation": "A Pod is the basic scheduling unit in K8s, containing one or more containers that share the same network stack, IP, and storage."
      },
      {
        "id": 12,
        "question": "What is the key benefit of separating Persistent Volumes (PV) and Persistent Volume Claims (PVC) in Kubernetes?",
        "options": [
          "It prevents database index replication locks",
          "It allows developers to request storage resources abstractly (PVC) without knowing the physical storage details (PV)",
          "It automatically converts block storage volumes to object storage streams",
          "It encrypts sensitive credentials automatically",
          "It speeds up pod boot times to under one second"
        ],
        "answer": 1,
        "explanation": "This separation decouples application requirements (size, read/write modes) from physical storage implementations (NFS, AWS EBS, OpenStack Cinder)."
      },
      {
        "id": 13,
        "question": "In the Fission FaaS framework, what is the role of the 'PoolManager'?",
        "options": [
          "To manage physical CPU hyper-threading queues",
          "To maintain a pool of warm, generic environment pods to minimize cold-start invocation latency",
          "To dynamically spawn and scale pods using HPA thresholds",
          "To queue HTTP trigger routes and return 202 codes",
          "To clean up deleted YAML specs"
        ],
        "answer": 1,
        "explanation": "PoolManager maintains a pre-warmed pool of environment containers. When a function is invoked, the code is loaded into a warm pod, minimizing cold starts."
      },
      {
        "id": 14,
        "question": "Which Fission archive type should you use if your function includes pre-compiled binaries or static files that do not require building?",
        "options": [
          "--sourcearchive",
          "--deployarchive",
          "--specarchive",
          "--buildarchive",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Deploy archives are unzipped and executed directly by Fission without any compilation or pip install steps."
      },
      {
        "id": 15,
        "question": "Why should you NOT store binary image files directly in Elasticsearch?",
        "options": [
          "Elasticsearch does not support JSON formats",
          "It requires base64 encoding (bloating size by ~33%), causing memory pressure, slow replication, and poor query speeds",
          "Elasticsearch only supports SQL queries",
          "Images are immutable and cannot be sharded",
          "Images break CAP consistency protocols"
        ],
        "answer": 1,
        "explanation": "ES is optimized for text index searching, not blob storage. Storing large base64 strings bloats index sizes and degrades search performance."
      },
      {
        "id": 16,
        "question": "How does Elasticsearch prevent concurrent update conflicts without locking database records?",
        "options": [
          "By rejecting all concurrent PUT requests automatically",
          "By routing requests to a single master coordinator node",
          "By requiring updates to include the document's current _seq_no and _primary_term, returning a 409 Conflict if mismatched",
          "By running a two-phase commit write lock",
          "By converting index formats to read-only"
        ],
        "answer": 2,
        "explanation": "ES uses optimistic concurrency control. Requests must contain the expected sequence number and primary term; if the values have incremented, it throws a 409 Conflict."
      },
      {
        "id": 17,
        "question": "What is the primary role of a Certification Authority (CA) in a Public Key Infrastructure (PKI)?",
        "options": [
          "To schedule encryption tasks on worker nodes",
          "To digitally sign public keys, verifying that the key belongs to the declared owner based on trust",
          "To decrypt private keys sent over public subnets",
          "To manage single sign-on user database records",
          "To filter firewall port accesses"
        ],
        "answer": 1,
        "explanation": "A CA acts as a trusted third party, signing certificates to bind a public key to a specific identity."
      },
      {
        "id": 18,
        "question": "What is the main purpose of a Virtual Organization (VO) in distributed grid/cloud computing?",
        "options": [
          "To host virtual desktop interfaces in the cloud",
          "To coordinate dynamic, multi-institutional resource sharing and authorization policies under unified project rules",
          "To manage single-user SSH keypairs on OpenStack",
          "To simulate network partitions",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "VOs map access permissions across distinct security and organizational domains, enabling collaborative resource access without unified accounts."
      },
      {
        "id": 19,
        "question": "Which cloud service model matches the description: 'The customer provisions processing, storage, networks, and other fundamental computing resources'?",
        "options": [
          "SaaS",
          "PaaS",
          "IaaS",
          "DBaaS",
          "FaaS"
        ],
        "answer": 2,
        "explanation": "NIST defines Infrastructure as a Service (IaaS) as renting fundamental infrastructure components."
      },
      {
        "id": 20,
        "question": "In Flynn's Taxonomy, which classification matches modern multi-core computers?",
        "options": [
          "SISD",
          "SIMD",
          "MISD",
          "MIMD",
          "None of the above"
        ],
        "answer": 3,
        "explanation": "MIMD (Multiple Instruction, Multiple Data) is the standard parallel computing architecture where independent cores execute different instructions on separate data."
      },
      {
        "id": 21,
        "question": "What is loop overhead in parallel execution?",
        "options": [
          "The memory size of loop counter variables",
          "The extra computation (bounds checking, index incrementing) replicated on every processor sharing a loop",
          "The network latency of sending loop instructions to workers",
          "The database write lock duration inside a loop",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Splitting loops among processors replicates index tests and bounds calculations on each processor, adding serial overhead."
      },
      {
        "id": 22,
        "question": "Which Spartan/SLURM partition is the default queue for general workloads?",
        "options": [
          "physical",
          "cloud",
          "sapphire",
          "gpu",
          "head-node"
        ],
        "answer": 2,
        "explanation": "On Spartan, Sapphire is the default CPU partition/queue."
      },
      {
        "id": 23,
        "question": "In OpenStack, what does Cinder manage?",
        "options": [
          "OS templates",
          "User SSH keypairs",
          "Persistent block storage volumes",
          "Object storage buckets",
          "Floating IP networks"
        ],
        "answer": 2,
        "explanation": "Cinder is the OpenStack Block Storage service, providing persistent drives."
      },
      {
        "id": 24,
        "question": "Which cloud storage type is flat, has no folder hierarchy, and is accessed via API endpoints?",
        "options": [
          "Block Storage",
          "Object Storage",
          "File Storage",
          "Local ephemeral disk",
          "NAS storage"
        ],
        "answer": 1,
        "explanation": "Object storage organizes files into a flat namespace of binary objects containing metadata and keys, accessed over HTTP APIs."
      },
      {
        "id": 25,
        "question": "What does the command 'docker rm -f <container>' do?",
        "options": [
          "Deletes a Docker image",
          "Forcefully stops and removes a running container by sending a SIGKILL signal",
          "Gracefully stops a container and keeps its state in a volume",
          "Forcefully rebuilds the Docker image from context",
          "Removes a named volume"
        ],
        "answer": 1,
        "explanation": "The -f flag force-removes active containers using SIGKILL."
      },
      {
        "id": 26,
        "question": "What is the purpose of 'exec \"$@\"' at the end of a Docker entrypoint script?",
        "options": [
          "To run multiple containers in a bridge network",
          "To execute a build-time command inside the image",
          "To replace the shell process with the main container command, ensuring it runs as PID 1 and receives OS signals",
          "To mount a volume drive dynamically",
          "To restart the container automatically"
        ],
        "answer": 2,
        "explanation": "It executes the default CMD args as the new PID 1 process, allowing signal forwarding (SIGTERM) for graceful shutdowns."
      },
      {
        "id": 27,
        "question": "What is a 'Security Hotspot' in a CI/CD code scanner (like SonarQube)?",
        "options": [
          "A confirmed SQL injection bug",
          "Code that requires human review to determine if it is a security weakness, such as hardcoded API keys or open ports",
          "A virus detected in a base Docker image",
          "A network partition trigger",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Security hotspots are code areas that are suspicious but need manual auditing to confirm vulnerability."
      },
      {
        "id": 28,
        "question": "Under course conventions, which of the following is true about Kubernetes services?",
        "options": [
          "They run inside container namespaces directly",
          "They provide a stable internal IP address and port to access a dynamic set of pods",
          "They manage virtual machine image snapshots",
          "They automatically encrypt database volume claims",
          "They replace the control plane API"
        ],
        "answer": 1,
        "explanation": "Services offer logical abstraction and stable IPs/ports over shifting pods."
      },
      {
        "id": 29,
        "question": "In REST APIs, when is PUT preferred over POST?",
        "options": [
          "When creating a resource at a URL generated by the server",
          "When updating or creating a resource at a client-defined, specific URL",
          "When the operation is not idempotent",
          "When sending binary file uploads",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "PUT is idempotent and is used when the client knows and specifies the final resource destination URL."
      },
      {
        "id": 30,
        "question": "Which testing tier is characterized by testing individual methods or classes in isolation, using mock interfaces?",
        "options": [
          "Integration tests",
          "System tests",
          "Unit tests",
          "End-to-End tests",
          "Performance tests"
        ],
        "answer": 2,
        "explanation": "Unit testing verifies code pieces in isolation."
      },
      {
        "id": 31,
        "question": "Which Fission timeout controls the time a function pod remains alive after execution before being recycled?",
        "options": [
          "--specializationtimeout",
          "--fntimeout",
          "--idletimeout",
          "--cooltimeout",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "idletimeout determines how long specialized pods idle before reclamation."
      },
      {
        "id": 32,
        "question": "Under the CAP theorem, which database model operates as an AP (Availability and Partition Tolerance) system?",
        "options": [
          "Relational PostgreSQL",
          "CouchDB multi-master cluster",
          "Magnum K8s deployment",
          "Single-node MySQL database",
          "Federated PostgreSQL FDW"
        ],
        "answer": 1,
        "explanation": "CouchDB is AP, permitting concurrent writes to any partition and reconciling conflicts asynchronously."
      },
      {
        "id": 33,
        "question": "What is a major limitation of Elasticsearch SQL support?",
        "options": [
          "It cannot query indexes",
          "It does not support standard relational database joins, DISTINCT, or returning multi-valued fields",
          "It requires Java runtime compilation",
          "It only supports GET methods",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "ES SQL has translation limits: no standard joins, no distinct, and no complex multi-valued field query returns."
      },
      {
        "id": 34,
        "question": "According to the Popek-Goldberg Virtualization Theorem, a CPU is virtualizable if and only if:",
        "options": [
          "Its clock speed exceeds 3.0 GHz",
          "Its sensitive instructions are a subset of its privileged instructions",
          "It supports Docker containers natively",
          "It has dedicated L1/L2 caches per core",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "All sensitive instructions must trigger a hardware trap in user space (be privileged) for a hypervisor to intercept them."
      },
      {
        "id": 35,
        "question": "What does an AWS VPC (Virtual Private Cloud) represent?",
        "options": [
          "A shared object storage container",
          "An isolated virtual network dedicated to your AWS account",
          "A single EC2 virtual machine",
          "An auto-scaled container deployment group",
          "A federated authorization tunnel"
        ],
        "answer": 1,
        "explanation": "A VPC is a private logical network partition in AWS."
      }
    ],
    "shortAnswers": [
      {
        "id": 1,
        "question": "Describe some of the erroneous assumptions that are often made in designing large-scale distributed systems. [5]",
        "maxMarks": 5,
        "sampleAnswer": "The eight erroneous assumptions of distributed systems are:\n1. **The network is reliable**: Nodes can split, physical lines break, and routing tables corrupt.\n2. **Latency is zero**: Moving data through nodes, repeaters, and routers incurs time delays.\n3. **Bandwidth is infinite**: Data lines have a max carrying capacity, and congestion slows throughput.\n4. **The network is secure**: Without active encryption, transport protocols are vulnerable to packet sniffing, tampering, and spoofing.\n5. **Topology does not change**: Nodes go offline, new routers are added, and link paths shift.\n6. **There is one administrator**: Different subnets are governed by different administrative entities with competing policies.\n7. **Transport cost is zero**: Using network infrastructure costs money (e.g. cloud billing egress fees).\n8. **The network is homogeneous**: Systems use different hardware, OSs, protocols, and database schema types."
      },
      {
        "id": 2,
        "question": "Cloud Computing systems do not solve many key challenges of large-scale distributed systems. Discuss. [5]",
        "maxMarks": 5,
        "sampleAnswer": "While Cloud computing simplifies the elastic scale and deployment of servers, it operates on the same physical and logical limitations of networks, failing to solve core distributed systems challenges:\n1. **Network Latency & Interruptions**: Virtual machines in the cloud still communicate over physical lines that experience routing delays and downtime, which the developer must handle via connection retries or circuit breakers.\n2. **CAP Theorem Boundaries**: Moving databases to virtual cloud hosts does not solve consistency issues. Multi-zone database clusters still face the trade-off of maintaining Consistency vs. Availability during network partitioning.\n3. **Security Risks**: Shared hardware pools (multi-tenancy) raise issues with user isolation. Data compliance and ownership laws (GDPR/HIPAA) must still be managed in public data centers.\n4. **Data Heterogeneity**: The cloud does not automatically standardize files. Developers must write custom conversion scripts to parse and merge distinct schemas."
      },
      {
        "id": 3,
        "question": "Explain the general principles that should underlie the design of Service-Oriented Architectures (SOA). [5]",
        "maxMarks": 5,
        "sampleAnswer": "Key principles of Service-Oriented Architecture (SOA) design include:\n1. **Standardized Service Contract**: Services must adhere to a shared communications document (schema) defining inputs, outputs, and behaviors.\n2. **Service Loose Coupling**: Services should minimize hard dependencies, ensuring updates to one service's internal implementation do not break other modules.\n3. **Service Abstraction**: Internal logic, databases, and technologies of a service should be hidden from external clients.\n4. **Service Reusability**: Design services broadly so they can be re-utilized in multiple application flows.\n5. **Service Statelessness**: Services should avoid maintaining state between calls internally, delegating state storage to external databases to facilitate easy scaling."
      }
    ]
  },
  {
    "id": "exam_2014_s1",
    "title": "Semester 1, 2014 - Past Exam",
    "type": "Past Exam",
    "questionsCount": 35,
    "mcqs": [
      {
        "id": 1,
        "question": "Which database technology is a classic CA (Consistency & Availability) system under the CAP theorem, failing in the presence of network partitions?",
        "options": [
          "CouchDB leaderless multi-master setup",
          "Elasticsearch index replication cluster",
          "Federated PostgreSQL using Foreign Data Wrappers and two-phase commit",
          "Apache Cassandra column family model",
          "Redis key-value caching"
        ],
        "answer": 2,
        "explanation": "A federated database using FDWs and 2-phase commit enforces strict consistency across all nodes. If a partition occurs, it must abort writes, sacrificing partition tolerance (P)."
      },
      {
        "id": 2,
        "question": "Which OpenStack component acts as the network controller, managing ports, firewall security groups, and floating IPs?",
        "options": [
          "Nova",
          "Horizon",
          "Neutron",
          "Glance",
          "Keystone"
        ],
        "answer": 2,
        "explanation": "Neutron handles all virtual networking services (ports, subnets, routers, security groups) in OpenStack."
      },
      {
        "id": 3,
        "question": "What is the role of 'nova-conductor' in the OpenStack compute architecture?",
        "options": [
          "Exposing public REST APIs for client commands",
          "Scheduling VM placement based on physical hypervisor capabilities",
          "Acting as a database proxy for nova-compute nodes to prevent direct database compromises",
          "Managing local volume mount lookups",
          "Managing floating IP routing rules"
        ],
        "answer": 2,
        "explanation": "nova-conductor sits between nova-compute and the main database, proxying database transactions so worker nodes do not have direct DB write access."
      },
      {
        "id": 4,
        "question": "What is the primary difference in isolation mechanism between Docker containers and hypervisor VMs?",
        "options": [
          "Containers isolate hardware resources; VMs isolate network ports",
          "Containers use OS kernel namespaces and cgroups; VMs use full hardware virtualization via a hypervisor layer",
          "Containers use shadow page tables; VMs use basic page tables",
          "Containers are managed via sbatch; VMs are managed via Magnum",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Containers share the host operating system kernel and use namespaces and cgroups to isolate processes. VMs execute a complete guest OS on top of a hypervisor."
      },
      {
        "id": 5,
        "question": "What is the purpose of the ENTRYPOINT instruction in a Dockerfile?",
        "options": [
          "To copy files from the host workspace into the container image",
          "To declare the environment variables inside the container",
          "To configure the default executable command that runs when the container starts up",
          "To define the port numbers mapped to the host bridge network",
          "To specify the base OS template image"
        ],
        "answer": 2,
        "explanation": "ENTRYPOINT sets the command that will run when the container starts. CMD provides default arguments that can be appended or overridden."
      },
      {
        "id": 6,
        "question": "What is a Pod in Kubernetes?",
        "options": [
          "A single VM node managed by the control plane master",
          "A group of persistent volumes attached to a namespace",
          "The smallest deployable unit, representing one or more containers sharing network namespaces and storage volumes",
          "An external ingress controller routing HTTP paths",
          "A secure secret vault for ConfigMap details"
        ],
        "answer": 2,
        "explanation": "A Pod is the basic scheduling unit in K8s, containing one or more containers that share the same network stack, IP, and storage."
      },
      {
        "id": 7,
        "question": "What is the key benefit of separating Persistent Volumes (PV) and Persistent Volume Claims (PVC) in Kubernetes?",
        "options": [
          "It prevents database index replication locks",
          "It allows developers to request storage resources abstractly (PVC) without knowing the physical storage details (PV)",
          "It automatically converts block storage volumes to object storage streams",
          "It encrypts sensitive credentials automatically",
          "It speeds up pod boot times to under one second"
        ],
        "answer": 1,
        "explanation": "This separation decouples application requirements (size, read/write modes) from physical storage implementations (NFS, AWS EBS, OpenStack Cinder)."
      },
      {
        "id": 8,
        "question": "In the Fission FaaS framework, what is the role of the 'PoolManager'?",
        "options": [
          "To manage physical CPU hyper-threading queues",
          "To maintain a pool of warm, generic environment pods to minimize cold-start invocation latency",
          "To dynamically spawn and scale pods using HPA thresholds",
          "To queue HTTP trigger routes and return 202 codes",
          "To clean up deleted YAML specs"
        ],
        "answer": 1,
        "explanation": "PoolManager maintains a pre-warmed pool of environment containers. When a function is invoked, the code is loaded into a warm pod, minimizing cold starts."
      },
      {
        "id": 9,
        "question": "Which Fission archive type should you use if your function includes pre-compiled binaries or static files that do not require building?",
        "options": [
          "--sourcearchive",
          "--deployarchive",
          "--specarchive",
          "--buildarchive",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Deploy archives are unzipped and executed directly by Fission without any compilation or pip install steps."
      },
      {
        "id": 10,
        "question": "Why should you NOT store binary image files directly in Elasticsearch?",
        "options": [
          "Elasticsearch does not support JSON formats",
          "It requires base64 encoding (bloating size by ~33%), causing memory pressure, slow replication, and poor query speeds",
          "Elasticsearch only supports SQL queries",
          "Images are immutable and cannot be sharded",
          "Images break CAP consistency protocols"
        ],
        "answer": 1,
        "explanation": "ES is optimized for text index searching, not blob storage. Storing large base64 strings bloats index sizes and degrades search performance."
      },
      {
        "id": 11,
        "question": "How does Elasticsearch prevent concurrent update conflicts without locking database records?",
        "options": [
          "By rejecting all concurrent PUT requests automatically",
          "By routing requests to a single master coordinator node",
          "By requiring updates to include the document's current _seq_no and _primary_term, returning a 409 Conflict if mismatched",
          "By running a two-phase commit write lock",
          "By converting index formats to read-only"
        ],
        "answer": 2,
        "explanation": "ES uses optimistic concurrency control. Requests must contain the expected sequence number and primary term; if the values have incremented, it throws a 409 Conflict."
      },
      {
        "id": 12,
        "question": "What is the primary role of a Certification Authority (CA) in a Public Key Infrastructure (PKI)?",
        "options": [
          "To schedule encryption tasks on worker nodes",
          "To digitally sign public keys, verifying that the key belongs to the declared owner based on trust",
          "To decrypt private keys sent over public subnets",
          "To manage single sign-on user database records",
          "To filter firewall port accesses"
        ],
        "answer": 1,
        "explanation": "A CA acts as a trusted third party, signing certificates to bind a public key to a specific identity."
      },
      {
        "id": 13,
        "question": "What is the main purpose of a Virtual Organization (VO) in distributed grid/cloud computing?",
        "options": [
          "To host virtual desktop interfaces in the cloud",
          "To coordinate dynamic, multi-institutional resource sharing and authorization policies under unified project rules",
          "To manage single-user SSH keypairs on OpenStack",
          "To simulate network partitions",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "VOs map access permissions across distinct security and organizational domains, enabling collaborative resource access without unified accounts."
      },
      {
        "id": 14,
        "question": "Which cloud service model matches the description: 'The customer provisions processing, storage, networks, and other fundamental computing resources'?",
        "options": [
          "SaaS",
          "PaaS",
          "IaaS",
          "DBaaS",
          "FaaS"
        ],
        "answer": 2,
        "explanation": "NIST defines Infrastructure as a Service (IaaS) as renting fundamental infrastructure components."
      },
      {
        "id": 15,
        "question": "In Flynn's Taxonomy, which classification matches modern multi-core computers?",
        "options": [
          "SISD",
          "SIMD",
          "MISD",
          "MIMD",
          "None of the above"
        ],
        "answer": 3,
        "explanation": "MIMD (Multiple Instruction, Multiple Data) is the standard parallel computing architecture where independent cores execute different instructions on separate data."
      },
      {
        "id": 16,
        "question": "What is loop overhead in parallel execution?",
        "options": [
          "The memory size of loop counter variables",
          "The extra computation (bounds checking, index incrementing) replicated on every processor sharing a loop",
          "The network latency of sending loop instructions to workers",
          "The database write lock duration inside a loop",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Splitting loops among processors replicates index tests and bounds calculations on each processor, adding serial overhead."
      },
      {
        "id": 17,
        "question": "Which Spartan/SLURM partition is the default queue for general workloads?",
        "options": [
          "physical",
          "cloud",
          "sapphire",
          "gpu",
          "head-node"
        ],
        "answer": 2,
        "explanation": "On Spartan, Sapphire is the default CPU partition/queue."
      },
      {
        "id": 18,
        "question": "In OpenStack, what does Cinder manage?",
        "options": [
          "OS templates",
          "User SSH keypairs",
          "Persistent block storage volumes",
          "Object storage buckets",
          "Floating IP networks"
        ],
        "answer": 2,
        "explanation": "Cinder is the OpenStack Block Storage service, providing persistent drives."
      },
      {
        "id": 19,
        "question": "Which cloud storage type is flat, has no folder hierarchy, and is accessed via API endpoints?",
        "options": [
          "Block Storage",
          "Object Storage",
          "File Storage",
          "Local ephemeral disk",
          "NAS storage"
        ],
        "answer": 1,
        "explanation": "Object storage organizes files into a flat namespace of binary objects containing metadata and keys, accessed over HTTP APIs."
      },
      {
        "id": 20,
        "question": "What does the command 'docker rm -f <container>' do?",
        "options": [
          "Deletes a Docker image",
          "Forcefully stops and removes a running container by sending a SIGKILL signal",
          "Gracefully stops a container and keeps its state in a volume",
          "Forcefully rebuilds the Docker image from context",
          "Removes a named volume"
        ],
        "answer": 1,
        "explanation": "The -f flag force-removes active containers using SIGKILL."
      },
      {
        "id": 21,
        "question": "What is the purpose of 'exec \"$@\"' at the end of a Docker entrypoint script?",
        "options": [
          "To run multiple containers in a bridge network",
          "To execute a build-time command inside the image",
          "To replace the shell process with the main container command, ensuring it runs as PID 1 and receives OS signals",
          "To mount a volume drive dynamically",
          "To restart the container automatically"
        ],
        "answer": 2,
        "explanation": "It executes the default CMD args as the new PID 1 process, allowing signal forwarding (SIGTERM) for graceful shutdowns."
      },
      {
        "id": 22,
        "question": "What is a 'Security Hotspot' in a CI/CD code scanner (like SonarQube)?",
        "options": [
          "A confirmed SQL injection bug",
          "Code that requires human review to determine if it is a security weakness, such as hardcoded API keys or open ports",
          "A virus detected in a base Docker image",
          "A network partition trigger",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Security hotspots are code areas that are suspicious but need manual auditing to confirm vulnerability."
      },
      {
        "id": 23,
        "question": "Which of the following is true about Kubernetes services?",
        "options": [
          "They run inside container namespaces directly",
          "They provide a stable internal IP address and port to access a dynamic set of pods",
          "They manage virtual machine image snapshots",
          "They automatically encrypt database volume claims",
          "They replace the control plane API"
        ],
        "answer": 1,
        "explanation": "Services offer logical abstraction and stable IPs/ports over shifting pods."
      },
      {
        "id": 24,
        "question": "In REST APIs, when is PUT preferred over POST?",
        "options": [
          "When creating a resource at a URL generated by the server",
          "When updating or creating a resource at a client-defined, specific URL",
          "When the operation is not idempotent",
          "When sending binary file uploads",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "PUT is idempotent and is used when the client knows and specifies the final resource destination URL."
      },
      {
        "id": 25,
        "question": "Which testing tier is characterized by testing individual methods or classes in isolation, using mock interfaces?",
        "options": [
          "Integration tests",
          "System tests",
          "Unit tests",
          "End-to-End tests",
          "Performance tests"
        ],
        "answer": 2,
        "explanation": "Unit testing verifies code pieces in isolation."
      },
      {
        "id": 26,
        "question": "Which Fission timeout controls the time a function pod remains alive after execution before being recycled?",
        "options": [
          "--specializationtimeout",
          "--fntimeout",
          "--idletimeout",
          "--cooltimeout",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "idletimeout determines how long specialized pods idle before reclamation."
      },
      {
        "id": 27,
        "question": "Under the CAP theorem, which database model operates as an AP (Availability and Partition Tolerance) system?",
        "options": [
          "Relational PostgreSQL",
          "CouchDB multi-master cluster",
          "Magnum K8s deployment",
          "Single-node MySQL database",
          "Federated PostgreSQL FDW"
        ],
        "answer": 1,
        "explanation": "CouchDB is AP, permitting concurrent writes to any partition and reconciling conflicts asynchronously."
      },
      {
        "id": 28,
        "question": "What is a major limitation of Elasticsearch SQL support?",
        "options": [
          "It cannot query indexes",
          "It does not support standard relational database joins, DISTINCT, or returning multi-valued fields",
          "It requires Java runtime compilation",
          "It only supports GET methods",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "ES SQL has translation limits: no standard joins, no distinct, and no complex multi-valued field query returns."
      },
      {
        "id": 29,
        "question": "According to the Popek-Goldberg Virtualization Theorem, a CPU is virtualizable if and only if:",
        "options": [
          "Its clock speed exceeds 3.0 GHz",
          "Its sensitive instructions are a subset of its privileged instructions",
          "It supports Docker containers natively",
          "It has dedicated L1/L2 caches per core",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "All sensitive instructions must trigger a hardware trap in user space (be privileged) for a hypervisor to intercept them."
      },
      {
        "id": 30,
        "question": "What does an AWS VPC (Virtual Private Cloud) represent?",
        "options": [
          "A shared object storage container",
          "An isolated virtual network dedicated to your AWS account",
          "A single EC2 virtual machine",
          "An auto-scaled container deployment group",
          "A federated authorization tunnel"
        ],
        "answer": 1,
        "explanation": "A VPC is a private logical network partition in AWS."
      },
      {
        "id": 31,
        "question": "In the 4 A's of security, which term is defined as 'recording who accessed what resource at what time'?",
        "options": [
          "Authentication",
          "Authorization",
          "Audit",
          "Accounting",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "Audit tracks historical access events and log statements."
      },
      {
        "id": 32,
        "question": "Which of the following is NOT one of the five NIST essential characteristics of Cloud Computing?",
        "options": [
          "On-demand self-service",
          "Resource pooling",
          "Rapid elasticity",
          "Multithreaded hyper-threading",
          "Measured service"
        ],
        "answer": 3,
        "explanation": "NIST essential characteristics are: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, and Measured service."
      },
      {
        "id": 33,
        "question": "What does 'Resource Pooling' in cloud computing refer to?",
        "options": [
          "Allocating a single physical server dedicated entirely to one business client",
          "Grouping multiple separate client databases into a single un-partitioned SQL table",
          "Serving multiple consumers using a multi-tenant model with dynamically assigned physical and virtual resources",
          "Sharing local files over an NFS mount point",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "Resource pooling allows the provider to dynamically allocate physical and virtual resources from a shared pool to multiple users based on demand."
      },
      {
        "id": 34,
        "question": "Under course conventions, which of the following represents horizontal scaling?",
        "options": [
          "Upgrading a single VM from 4 vCPUs to 16 vCPUs",
          "Replacing a 2.4 GHz CPU with a 3.6 GHz CPU",
          "Adding more virtual machine instances to a cluster to share the workload load",
          "Attaching a larger Cinder block storage volume to an active instance",
          "Switching from a public cloud to a private cloud"
        ],
        "answer": 2,
        "explanation": "Horizontal scaling (scaling out) involves adding more nodes/servers to the pool, whereas vertical scaling (scaling up) involves increasing the capacity of a single node."
      },
      {
        "id": 35,
        "question": "What is the key bottleneck identified by Amdahl's Law when adding more processors?",
        "options": [
          "The size of the L3 cache",
          "The cost of public cloud egress bandwidth",
          "The sequential (non-parallelizable) portion of the code",
          "The number of concurrent threads in memory",
          "The database transaction lock wait times"
        ],
        "answer": 2,
        "explanation": "Amdahl's law calculates theoretical speedup based on a fixed problem size, showing that speedup is limited by the fraction of the program that cannot be parallelized."
      }
    ],
    "shortAnswers": [
      {
        "id": 1,
        "question": "Discuss the major trends in research and research computing over the last 20 years that have led to the emergence of Cloud computing. [6]",
        "maxMarks": 6,
        "sampleAnswer": "Key trends include:\n1. **Data Volumetrics**: The explosion of research datasets (e.g. genomic sequencing, climate models) requiring scalable storage.\n2. **Grid Computing Failures**: Early grid systems failed due to complexity, lack of standard tools, and poor user self-service.\n3. **Hardware Commoditization**: Cheap virtualization technologies and x86 multi-core processors allowed massive server consolidation.\n4. **On-Demand Economics**: Moving from capital infrastructure projects (owning clusters) to utility-billing models (paying only for compute time used).\n5. **Interoperability Standards**: Shift toward REST APIs and SOA architectures made linking distributed systems cheap and reliable."
      },
      {
        "id": 2,
        "question": "Define Gustafson-Barsis' law for scaled speed-up of parallel programs. [2]",
        "maxMarks": 2,
        "sampleAnswer": "Gustafson-Barsis' law calculates the scaled speedup of a parallel program where the problem size is allowed to grow as processing resources increase. It is formulated as:\nSpeedup = P - (P - 1) * s\nWhere P is the number of processors and s is the serial (non-parallelized) fraction of execution time on the parallel system. It shows that near-linear speedups can be achieved if problem sizes grow alongside core counts."
      },
      {
        "id": 3,
        "question": "Give a short explanation for the following terms in Git: Commit [1], Checkout [1], Branch [1], Tag [1], Rebase [1]. [5]",
        "maxMarks": 5,
        "sampleAnswer": "1. **Commit**: A recorded snapshot of staged changes saved locally in the Git history directory under a unique SHA-1 hash.\n2. **Checkout**: The action of restoring working directory files from a commit or switching branches.\n3. **Branch**: A lightweight pointer to a specific commit, representing a parallel line of development.\n4. **Tag**: A fixed, immutable reference pointing to a specific commit (typically used to mark release versions like v1.0.0).\n5. **Rebase**: The process of taking commit changes made on one branch and reapplying them sequentially on top of another branch tip."
      },
      {
        "id": 4,
        "question": "What is the main difference between the clone and checkout commands in Git? [2]",
        "maxMarks": 2,
        "sampleAnswer": "`git clone` copies the entire remote repository database, including all history and all branches, to your local computer. `git checkout` operates locally to switch the active working directory files to match a specific local commit or branch."
      }
    ]
  },
  {
    "id": "exam_2013_s2",
    "title": "Semester 2, 2013 - Past Exam",
    "type": "Past Exam",
    "questionsCount": 35,
    "mcqs": [
      {
        "id": 1,
        "question": "In the Fission FaaS framework, what is the role of the 'PoolManager'?",
        "options": [
          "To manage physical CPU hyper-threading queues",
          "To maintain a pool of warm, generic environment pods to minimize cold-start invocation latency",
          "To dynamically spawn and scale pods using HPA thresholds",
          "To queue HTTP trigger routes and return 202 codes",
          "To clean up deleted YAML specs"
        ],
        "answer": 1,
        "explanation": "PoolManager maintains a pre-warmed pool of environment containers. When a function is invoked, the code is loaded into a warm pod, minimizing cold starts."
      },
      {
        "id": 2,
        "question": "Which Fission archive type should you use if your function includes pre-compiled binaries or static files that do not require building?",
        "options": [
          "--sourcearchive",
          "--deployarchive",
          "--specarchive",
          "--buildarchive",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Deploy archives are unzipped and executed directly by Fission without any compilation or pip install steps."
      },
      {
        "id": 3,
        "question": "Why should you NOT store binary image files directly in Elasticsearch?",
        "options": [
          "Elasticsearch does not support JSON formats",
          "It requires base64 encoding (bloating size by ~33%), causing memory pressure, slow replication, and poor query speeds",
          "Elasticsearch only supports SQL queries",
          "Images are immutable and cannot be sharded",
          "Images break CAP consistency protocols"
        ],
        "answer": 1,
        "explanation": "ES is optimized for text index searching, not blob storage. Storing large base64 strings bloats index sizes and degrades search performance."
      },
      {
        "id": 4,
        "question": "How does Elasticsearch prevent concurrent update conflicts without locking database records?",
        "options": [
          "By rejecting all concurrent PUT requests automatically",
          "By routing requests to a single master coordinator node",
          "By requiring updates to include the document's current _seq_no and _primary_term, returning a 409 Conflict if mismatched",
          "By running a two-phase commit write lock",
          "By converting index formats to read-only"
        ],
        "answer": 2,
        "explanation": "ES uses optimistic concurrency control. Requests must contain the expected sequence number and primary term; if the values have incremented, it throws a 409 Conflict."
      },
      {
        "id": 5,
        "question": "What is the primary role of a Certification Authority (CA) in a Public Key Infrastructure (PKI)?",
        "options": [
          "To schedule encryption tasks on worker nodes",
          "To digitally sign public keys, verifying that the key belongs to the declared owner based on trust",
          "To decrypt private keys sent over public subnets",
          "To manage single sign-on user database records",
          "To filter firewall port accesses"
        ],
        "answer": 1,
        "explanation": "A CA acts as a trusted third party, signing certificates to bind a public key to a specific identity."
      },
      {
        "id": 6,
        "question": "What is the main purpose of a Virtual Organization (VO) in distributed grid/cloud computing?",
        "options": [
          "To host virtual desktop interfaces in the cloud",
          "To coordinate dynamic, multi-institutional resource sharing and authorization policies under unified project rules",
          "To manage single-user SSH keypairs on OpenStack",
          "To simulate network partitions",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "VOs map access permissions across distinct security and organizational domains, enabling collaborative resource access without unified accounts."
      },
      {
        "id": 7,
        "question": "Which cloud service model matches the description: 'The customer provisions processing, storage, networks, and other fundamental computing resources'?",
        "options": [
          "SaaS",
          "PaaS",
          "IaaS",
          "DBaaS",
          "FaaS"
        ],
        "answer": 2,
        "explanation": "NIST defines Infrastructure as a Service (IaaS) as renting fundamental infrastructure components."
      },
      {
        "id": 8,
        "question": "In Flynn's Taxonomy, which classification matches modern multi-core computers?",
        "options": [
          "SISD",
          "SIMD",
          "MISD",
          "MIMD",
          "None of the above"
        ],
        "answer": 3,
        "explanation": "MIMD (Multiple Instruction, Multiple Data) is the standard parallel computing architecture where independent cores execute different instructions on separate data."
      },
      {
        "id": 9,
        "question": "What is loop overhead in parallel execution?",
        "options": [
          "The memory size of loop counter variables",
          "The extra computation (bounds checking, index incrementing) replicated on every processor sharing a loop",
          "The network latency of sending loop instructions to workers",
          "The database write lock duration inside a loop",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Splitting loops among processors replicates index tests and bounds calculations on each processor, adding serial overhead."
      },
      {
        "id": 10,
        "question": "Which Spartan/SLURM partition is the default queue for general workloads?",
        "options": [
          "physical",
          "cloud",
          "sapphire",
          "gpu",
          "head-node"
        ],
        "answer": 2,
        "explanation": "On Spartan, Sapphire is the default CPU partition/queue."
      },
      {
        "id": 11,
        "question": "In OpenStack, what does Cinder manage?",
        "options": [
          "OS templates",
          "User SSH keypairs",
          "Persistent block storage volumes",
          "Object storage buckets",
          "Floating IP networks"
        ],
        "answer": 2,
        "explanation": "Cinder is the OpenStack Block Storage service, providing persistent drives."
      },
      {
        "id": 12,
        "question": "Which cloud storage type is flat, has no folder hierarchy, and is accessed via API endpoints?",
        "options": [
          "Block Storage",
          "Object Storage",
          "File Storage",
          "Local ephemeral disk",
          "NAS storage"
        ],
        "answer": 1,
        "explanation": "Object storage organizes files into a flat namespace of binary objects containing metadata and keys, accessed over HTTP APIs."
      },
      {
        "id": 13,
        "question": "What does the command 'docker rm -f <container>' do?",
        "options": [
          "Deletes a Docker image",
          "Forcefully stops and removes a running container by sending a SIGKILL signal",
          "Gracefully stops a container and keeps its state in a volume",
          "Forcefully rebuilds the Docker image from context",
          "Removes a named volume"
        ],
        "answer": 1,
        "explanation": "The -f flag force-removes active containers using SIGKILL."
      },
      {
        "id": 14,
        "question": "What is the purpose of 'exec \"$@\"' at the end of a Docker entrypoint script?",
        "options": [
          "To run multiple containers in a bridge network",
          "To execute a build-time command inside the image",
          "To replace the shell process with the main container command, ensuring it runs as PID 1 and receives OS signals",
          "To mount a volume drive dynamically",
          "To restart the container automatically"
        ],
        "answer": 2,
        "explanation": "It executes the default CMD args as the new PID 1 process, allowing signal forwarding (SIGTERM) for graceful shutdowns."
      },
      {
        "id": 15,
        "question": "What is a 'Security Hotspot' in a CI/CD code scanner (like SonarQube)?",
        "options": [
          "A confirmed SQL injection bug",
          "Code that requires human review to determine if it is a security weakness, such as hardcoded API keys or open ports",
          "A virus detected in a base Docker image",
          "A network partition trigger",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Security hotspots are code areas that are suspicious but need manual auditing to confirm vulnerability."
      },
      {
        "id": 16,
        "question": "Under course conventions, which of the following is true about Kubernetes services?",
        "options": [
          "They run inside container namespaces directly",
          "They provide a stable internal IP address and port to access a dynamic set of pods",
          "They manage virtual machine image snapshots",
          "They automatically encrypt database volume claims",
          "They replace the control plane API"
        ],
        "answer": 1,
        "explanation": "Services offer logical abstraction and stable IPs/ports over shifting pods."
      },
      {
        "id": 17,
        "question": "In REST APIs, when is PUT preferred over POST?",
        "options": [
          "When creating a resource at a URL generated by the server",
          "When updating or creating a resource at a client-defined, specific URL",
          "When the operation is not idempotent",
          "When sending binary file uploads",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "PUT is idempotent and is used when the client knows and specifies the final resource destination URL."
      },
      {
        "id": 18,
        "question": "Which testing tier is characterized by testing individual methods or classes in isolation, using mock interfaces?",
        "options": [
          "Integration tests",
          "System tests",
          "Unit tests",
          "End-to-End tests",
          "Performance tests"
        ],
        "answer": 2,
        "explanation": "Unit testing verifies code pieces in isolation."
      },
      {
        "id": 19,
        "question": "Which Fission timeout controls the time a function pod remains alive after execution before being recycled?",
        "options": [
          "--specializationtimeout",
          "--fntimeout",
          "--idletimeout",
          "--cooltimeout",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "idletimeout determines how long specialized pods idle before reclamation."
      },
      {
        "id": 20,
        "question": "Under the CAP theorem, which database model operates as an AP (Availability and Partition Tolerance) system?",
        "options": [
          "Relational PostgreSQL",
          "CouchDB multi-master cluster",
          "Magnum K8s deployment",
          "Single-node MySQL database",
          "Federated PostgreSQL FDW"
        ],
        "answer": 1,
        "explanation": "CouchDB is AP, permitting concurrent writes to any partition and reconciling conflicts asynchronously."
      },
      {
        "id": 21,
        "question": "What is a major limitation of Elasticsearch SQL support?",
        "options": [
          "It cannot query indexes",
          "It does not support standard relational database joins, DISTINCT, or returning multi-valued fields",
          "It requires Java runtime compilation",
          "It only supports GET methods",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "ES SQL has translation limits: no standard joins, no distinct, and no complex multi-valued field query returns."
      },
      {
        "id": 22,
        "question": "According to the Popek-Goldberg Virtualization Theorem, a CPU is virtualizable if and only if:",
        "options": [
          "Its clock speed exceeds 3.0 GHz",
          "Its sensitive instructions are a subset of its privileged instructions",
          "It supports Docker containers natively",
          "It has dedicated L1/L2 caches per core",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "All sensitive instructions must trigger a hardware trap in user space (be privileged) for a hypervisor to intercept them."
      },
      {
        "id": 23,
        "question": "What does an AWS VPC (Virtual Private Cloud) represent?",
        "options": [
          "A shared object storage container",
          "An isolated virtual network dedicated to your AWS account",
          "A single EC2 virtual machine",
          "An auto-scaled container deployment group",
          "A federated authorization tunnel"
        ],
        "answer": 1,
        "explanation": "A VPC is a private logical network partition in AWS."
      },
      {
        "id": 24,
        "question": "In the 4 A's of security, which term is defined as 'recording who accessed what resource at what time'?",
        "options": [
          "Authentication",
          "Authorization",
          "Audit",
          "Accounting",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "Audit tracks historical access events and log statements."
      },
      {
        "id": 25,
        "question": "Under course conventions, which of the following is NOT one of the five NIST essential characteristics of Cloud Computing?",
        "options": [
          "On-demand self-service",
          "Resource pooling",
          "Rapid elasticity",
          "Multithreaded hyper-threading",
          "Measured service"
        ],
        "answer": 3,
        "explanation": "NIST essential characteristics are: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, and Measured service."
      },
      {
        "id": 26,
        "question": "What does 'Resource Pooling' in cloud computing refer to?",
        "options": [
          "Allocating a single physical server dedicated entirely to one business client",
          "Grouping multiple separate client databases into a single un-partitioned SQL table",
          "Serving multiple consumers using a multi-tenant model with dynamically assigned physical and virtual resources",
          "Sharing local files over an NFS mount point",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "Resource pooling allows the provider to dynamically allocate physical and virtual resources from a shared pool to multiple users based on demand."
      },
      {
        "id": 27,
        "question": "Which of the following represents horizontal scaling?",
        "options": [
          "Upgrading a single VM from 4 vCPUs to 16 vCPUs",
          "Replacing a 2.4 GHz CPU with a 3.6 GHz CPU",
          "Adding more virtual machine instances to a cluster to share the workload load",
          "Attaching a larger Cinder block storage volume to an active instance",
          "Switching from a public cloud to a private cloud"
        ],
        "answer": 2,
        "explanation": "Horizontal scaling (scaling out) involves adding more nodes/servers to the pool, whereas vertical scaling (scaling up) involves increasing the capacity of a single node."
      },
      {
        "id": 28,
        "question": "What is the key bottleneck identified by Amdahl's Law when adding more processors?",
        "options": [
          "The size of the L3 cache",
          "The cost of public cloud egress bandwidth",
          "The sequential (non-parallelizable) portion of the code",
          "The number of concurrent threads in memory",
          "The database transaction lock wait times"
        ],
        "answer": 2,
        "explanation": "Amdahl's law calculates theoretical speedup based on a fixed problem size, showing that speedup is limited by the fraction of the program that cannot be parallelized."
      },
      {
        "id": 29,
        "question": "In the CAP theorem, what does Consistency (C) mean?",
        "options": [
          "Every transaction is written to at least two database shards",
          "Every read request receives the most recent write or an error",
          "The database schema is verified against a strict JSON schema template",
          "Every database node responds without error within a given time limit",
          "Data schemas remain identical across all public and private tables"
        ],
        "answer": 1,
        "explanation": "Consistency means that every client query returns the same state/non-error answer from all nodes of the cluster."
      },
      {
        "id": 30,
        "question": "Which database technology is a classic CA (Consistency & Availability) system under the CAP theorem, failing in the presence of network partitions?",
        "options": [
          "CouchDB leaderless multi-master setup",
          "Elasticsearch index replication cluster",
          "Federated PostgreSQL using Foreign Data Wrappers and two-phase commit",
          "Apache Cassandra column family model",
          "Redis key-value caching"
        ],
        "answer": 2,
        "explanation": "A federated database using FDWs and 2-phase commit enforces strict consistency across all nodes. If a partition occurs, it must abort writes, sacrificing partition tolerance (P)."
      },
      {
        "id": 31,
        "question": "Which OpenStack component acts as the network controller, managing ports, firewall security groups, and floating IPs?",
        "options": [
          "Nova",
          "Horizon",
          "Neutron",
          "Glance",
          "Keystone"
        ],
        "answer": 2,
        "explanation": "Neutron handles all virtual networking services (ports, subnets, routers, security groups) in OpenStack."
      },
      {
        "id": 32,
        "question": "What is the role of 'nova-conductor' in the OpenStack compute architecture?",
        "options": [
          "Exposing public REST APIs for client commands",
          "Scheduling VM placement based on physical hypervisor capabilities",
          "Acting as a database proxy for nova-compute nodes to prevent direct database compromises",
          "Managing local volume mount lookups",
          "Managing floating IP routing rules"
        ],
        "answer": 2,
        "explanation": "nova-conductor sits between nova-compute and the main database, proxying database transactions so worker nodes do not have direct DB write access."
      },
      {
        "id": 33,
        "question": "What is the primary difference in isolation mechanism between Docker containers and hypervisor VMs?",
        "options": [
          "Containers isolate hardware resources; VMs isolate network ports",
          "Containers use OS kernel namespaces and cgroups; VMs use full hardware virtualization via a hypervisor layer",
          "Containers use shadow page tables; VMs use basic page tables",
          "Containers are managed via sbatch; VMs are managed via Magnum",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Containers share the host operating system kernel and use namespaces and cgroups to isolate processes. VMs execute a complete guest OS on top of a hypervisor."
      },
      {
        "id": 34,
        "question": "What is the purpose of the ENTRYPOINT instruction in a Dockerfile?",
        "options": [
          "To copy files from the host workspace into the container image",
          "To declare the environment variables inside the container",
          "To configure the default executable command that runs when the container starts up",
          "To define the port numbers mapped to the host bridge network",
          "To specify the base OS template image"
        ],
        "answer": 2,
        "explanation": "ENTRYPOINT sets the command that will run when the container starts. CMD provides default arguments that can be appended or overridden."
      },
      {
        "id": 35,
        "question": "What is a Pod in Kubernetes?",
        "options": [
          "A single VM node managed by the control plane master",
          "A group of persistent volumes attached to a namespace",
          "The smallest deployable unit, representing one or more containers sharing network namespaces and storage volumes",
          "An external ingress controller routing HTTP paths",
          "A secure secret vault for ConfigMap details"
        ],
        "answer": 2,
        "explanation": "A Pod is the basic scheduling unit in K8s, containing one or more containers that share the same network stack, IP, and storage."
      }
    ],
    "shortAnswers": [
      {
        "id": 1,
        "question": "Explain the consequences of Brewer's CAP theorem on distributed databases. [4]",
        "maxMarks": 4,
        "sampleAnswer": "The CAP theorem states that a distributed database can guarantee at most two of: Consistency (C), Availability (A), and Partition Tolerance (P) simultaneously. Because physical networks will experience network partitions (P), distributed databases must choose between:\n1. **Consistency (CP)**: Abort or reject operations when nodes cannot coordinate, ensuring all clients read identical states, but sacrificing system availability.\n2. **Availability (AP)**: Accept operations on local nodes during a partition, ensuring the system remains responsive, but sacrificing consistency (clients may read stale data)."
      },
      {
        "id": 2,
        "question": "Describe which aspects of the CAP theorem are supported by: non-SQL databases like CouchDB [2], and relational databases like PostgreSQL [2]. [4]",
        "maxMarks": 4,
        "sampleAnswer": "- **CouchDB**: Operates as an **AP** system. It uses a leaderless multi-master setup; any node can write, and changes sync asynchronously. In a network partition, nodes accept writes, prioritizing availability and partition tolerance, resolving conflicts at the application layer later.\n- **PostgreSQL**: Typically operates as a **CA** system. In federated setups using two-phase commit, it enforces strict write locks and consistency across all nodes. If a partition occurs, transactions roll back, sacrificing partition tolerance to maintain consistency."
      },
      {
        "id": 3,
        "question": "Define Amdahl's law and discuss the challenges of its practical implementation. [3]",
        "maxMarks": 3,
        "sampleAnswer": "Amdahl's law calculates speedup limits of a parallel program with a fixed problem size:\nSpeedup = 1 / (s + (1 - s)/P)\nWhere s is the sequential fraction and P is the number of processors. Implementation challenges include:\n1. **Loop and Sync Overheads**: Adding processors introduces resource locking and bounds checking overheads, which are replicated across nodes, degrading actual performance.\n2. **Fixed Problem Size Assumption**: Real-world computations scale problem sizes when resources increase (which is modeled by Gustafson-Barsis' law instead)."
      },
      {
        "id": 4,
        "question": "Describe the advantages of MapReduce compared to other more traditional data processing approaches. [4]",
        "maxMarks": 4,
        "sampleAnswer": "MapReduce advantages include:\n1. **Moving Compute to Data**: Performs map calculations on the local disk where the data resides, minimizing massive network transfers of raw datasets.\n2. **High Scalability**: Horizontal scale over thousands of commodity hardware nodes.\n3. **Fault Tolerance**: Automatic task rescheduling if a node fails during execution.\n4. **Abstraction**: Simplifies parallel programming by hiding network sockets, threading, and data partitioning from the developer."
      }
    ]
  },
  {
    "id": "exam_2021_canvas",
    "title": "Canvas Quiz 2021 - Past Exam",
    "type": "Past Exam",
    "questionsCount": 35,
    "mcqs": [
      {
        "id": 1,
        "question": "What is an 'affinity rule' in Kubernetes?",
        "options": [
          "A way to force the scheduling of certain pods on a given deployment type",
          "A way to force the scheduling of certain pods on a given node type",
          "A way to pair pods with ingresses",
          "A way to pair pods with the ports they exposes their services on",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Affinity rules in Kubernetes (such as node affinity or pod affinity) are used to constrain or force pod scheduling on nodes based on labels."
      },
      {
        "id": 2,
        "question": "What are the configuration options that you MUST supply when creating an instance on MRC?",
        "options": [
          "Instance Name, Instance Description, Key Pair, Security Group, Flavour",
          "Instance Name, Flavour, Image, Network",
          "Key Pair, Security Group, Flavour, Availability Zone",
          "Instance Name, Floating IP, SSH Credentials, Cinder Disk Volume",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "To spin up an instance on MRC/OpenStack, the mandatory fields are the Instance Name, Flavour, Image, and Network."
      },
      {
        "id": 3,
        "question": "Can the same Elasticsearch index accommodate documents with different schemas?",
        "options": [
          "Yes: as long as only dynamic mapping is used when defining the index",
          "No: using different schemas in the same index is theoretically possible but too expensive in terms of resources",
          "Yes: either with dynamic mapping or through an explicit mapping that can be applied to different schemas",
          "No: each index must have its own schema, just as tables do in a relational DBMS",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "Elasticsearch indices are schema-flexible and can accept documents with different fields using dynamic mappings or explicitly defined fields that map different structures."
      },
      {
        "id": 4,
        "question": "Which cloud storage type is flat, has no folder hierarchy, and is accessed via API endpoints?",
        "options": [
          "Block Storage",
          "Object Storage",
          "File Storage",
          "Local ephemeral disk",
          "NAS storage"
        ],
        "answer": 1,
        "explanation": "Object storage organizes files into a flat namespace of binary objects containing metadata and keys, accessed over HTTP APIs."
      },
      {
        "id": 5,
        "question": "What does the command 'docker rm -f <container>' do?",
        "options": [
          "Deletes a Docker image",
          "Forcefully stops and removes a running container by sending a SIGKILL signal",
          "Gracefully stops a container and keeps its state in a volume",
          "Forcefully rebuilds the Docker image from context",
          "Removes a named volume"
        ],
        "answer": 1,
        "explanation": "The -f flag force-removes active containers using SIGKILL."
      },
      {
        "id": 6,
        "question": "What is the purpose of 'exec \"$@\"' at the end of a Docker entrypoint script?",
        "options": [
          "To run multiple containers in a bridge network",
          "To execute a build-time command inside the image",
          "To replace the shell process with the main container command, ensuring it runs as PID 1 and receives OS signals",
          "To mount a volume drive dynamically",
          "To restart the container automatically"
        ],
        "answer": 2,
        "explanation": "It executes the default CMD args as the new PID 1 process, allowing signal forwarding (SIGTERM) for graceful shutdowns."
      },
      {
        "id": 7,
        "question": "What is a 'Security Hotspot' in a CI/CD code scanner (like SonarQube)?",
        "options": [
          "A confirmed SQL injection bug",
          "Code that requires human review to determine if it is a security weakness, such as hardcoded API keys or open ports",
          "A virus detected in a base Docker image",
          "A network partition trigger",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Security hotspots are code areas that are suspicious but need manual auditing to confirm vulnerability."
      },
      {
        "id": 8,
        "question": "Which of the following is true about Kubernetes services?",
        "options": [
          "They run inside container namespaces directly",
          "They provide a stable internal IP address and port to access a dynamic set of pods",
          "They manage virtual machine image snapshots",
          "They automatically encrypt database volume claims",
          "They replace the control plane API"
        ],
        "answer": 1,
        "explanation": "Services offer logical abstraction and stable IPs/ports over shifting pods."
      },
      {
        "id": 9,
        "question": "In REST APIs, when is PUT preferred over POST?",
        "options": [
          "When creating a resource at a URL generated by the server",
          "When updating or creating a resource at a client-defined, specific URL",
          "When the operation is not idempotent",
          "When sending binary file uploads",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "PUT is idempotent and is used when the client knows and specifies the final resource destination URL."
      },
      {
        "id": 10,
        "question": "Which testing tier is characterized by testing individual methods or classes in isolation, using mock interfaces?",
        "options": [
          "Integration tests",
          "System tests",
          "Unit tests",
          "End-to-End tests",
          "Performance tests"
        ],
        "answer": 2,
        "explanation": "Unit testing verifies code pieces in isolation."
      },
      {
        "id": 11,
        "question": "Which Fission timeout controls the time a function pod remains alive after execution before being recycled?",
        "options": [
          "--specializationtimeout",
          "--fntimeout",
          "--idletimeout",
          "--cooltimeout",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "idletimeout determines how long specialized pods idle before reclamation."
      },
      {
        "id": 12,
        "question": "Under the CAP theorem, which database model operates as an AP (Availability and Partition Tolerance) system?",
        "options": [
          "Relational PostgreSQL",
          "CouchDB multi-master cluster",
          "Magnum K8s deployment",
          "Single-node MySQL database",
          "Federated PostgreSQL FDW"
        ],
        "answer": 1,
        "explanation": "CouchDB is AP, permitting concurrent writes to any partition and reconciling conflicts asynchronously."
      },
      {
        "id": 13,
        "question": "What is a major limitation of Elasticsearch SQL support?",
        "options": [
          "It cannot query indexes",
          "It does not support standard relational database joins, DISTINCT, or returning multi-valued fields",
          "It requires Java runtime compilation",
          "It only supports GET methods",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "ES SQL has translation limits: no standard joins, no distinct, and no complex multi-valued field query returns."
      },
      {
        "id": 14,
        "question": "According to the Popek-Goldberg Virtualization Theorem, a CPU is virtualizable if and only if:",
        "options": [
          "Its clock speed exceeds 3.0 GHz",
          "Its sensitive instructions are a subset of its privileged instructions",
          "It supports Docker containers natively",
          "It has dedicated L1/L2 caches per core",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "All sensitive instructions must trigger a hardware trap in user space (be privileged) for a hypervisor to intercept them."
      },
      {
        "id": 15,
        "question": "What does an AWS VPC (Virtual Private Cloud) represent?",
        "options": [
          "A shared object storage container",
          "An isolated virtual network dedicated to your AWS account",
          "A single EC2 virtual machine",
          "An auto-scaled container deployment group",
          "A federated authorization tunnel"
        ],
        "answer": 1,
        "explanation": "A VPC is a private logical network partition in AWS."
      },
      {
        "id": 16,
        "question": "In the 4 A's of security, which term is defined as 'recording who accessed what resource at what time'?",
        "options": [
          "Authentication",
          "Authorization",
          "Audit",
          "Accounting",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "Audit tracks historical access events and log statements."
      },
      {
        "id": 17,
        "question": "Which of the following is NOT one of the five NIST essential characteristics of Cloud Computing?",
        "options": [
          "On-demand self-service",
          "Resource pooling",
          "Rapid elasticity",
          "Multithreaded hyper-threading",
          "Measured service"
        ],
        "answer": 3,
        "explanation": "NIST essential characteristics are: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, and Measured service."
      },
      {
        "id": 18,
        "question": "What does 'Resource Pooling' in cloud computing refer to?",
        "options": [
          "Allocating a single physical server dedicated entirely to one business client",
          "Grouping multiple separate client databases into a single un-partitioned SQL table",
          "Serving multiple consumers using a multi-tenant model with dynamically assigned physical and virtual resources",
          "Sharing local files over an NFS mount point",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "Resource pooling allows the provider to dynamically allocate physical and virtual resources from a shared pool to multiple users based on demand."
      },
      {
        "id": 19,
        "question": "Under course conventions, which of the following represents horizontal scaling?",
        "options": [
          "Upgrading a single VM from 4 vCPUs to 16 vCPUs",
          "Replacing a 2.4 GHz CPU with a 3.6 GHz CPU",
          "Adding more virtual machine instances to a cluster to share the workload load",
          "Attaching a larger Cinder block storage volume to an active instance",
          "Switching from a public cloud to a private cloud"
        ],
        "answer": 2,
        "explanation": "Horizontal scaling (scaling out) involves adding more nodes/servers to the pool, whereas vertical scaling (scaling up) involves increasing the capacity of a single node."
      },
      {
        "id": 20,
        "question": "What is the key bottleneck identified by Amdahl's Law when adding more processors?",
        "options": [
          "The size of the L3 cache",
          "The cost of public cloud egress bandwidth",
          "The sequential (non-parallelizable) portion of the code",
          "The number of concurrent threads in memory",
          "The database transaction lock wait times"
        ],
        "answer": 2,
        "explanation": "Amdahl's law calculates theoretical speedup based on a fixed problem size, showing that speedup is limited by the fraction of the program that cannot be parallelized."
      },
      {
        "id": 21,
        "question": "In the CAP theorem, what does Consistency (C) mean?",
        "options": [
          "Every transaction is written to at least two database shards",
          "Every read request receives the most recent write or an error",
          "The database schema is verified against a strict JSON schema template",
          "Every database node responds without error within a given time limit",
          "Data schemas remain identical across all public and private tables"
        ],
        "answer": 1,
        "explanation": "Consistency means that every client query returns the same state/non-error answer from all nodes of the cluster."
      },
      {
        "id": 22,
        "question": "Which database technology is a classic CA (Consistency & Availability) system under the CAP theorem, failing in the presence of network partitions?",
        "options": [
          "CouchDB leaderless multi-master setup",
          "Elasticsearch index replication cluster",
          "Federated PostgreSQL using Foreign Data Wrappers and two-phase commit",
          "Apache Cassandra column family model",
          "Redis key-value caching"
        ],
        "answer": 2,
        "explanation": "A federated database using FDWs and 2-phase commit enforces strict consistency across all nodes. If a partition occurs, it must abort writes, sacrificing partition tolerance (P)."
      },
      {
        "id": 23,
        "question": "Which OpenStack component acts as the network controller, managing ports, firewall security groups, and floating IPs?",
        "options": [
          "Nova",
          "Horizon",
          "Neutron",
          "Glance",
          "Keystone"
        ],
        "answer": 2,
        "explanation": "Neutron handles all virtual networking services (ports, subnets, routers, security groups) in OpenStack."
      },
      {
        "id": 24,
        "question": "What is the role of 'nova-conductor' in the OpenStack compute architecture?",
        "options": [
          "Exposing public REST APIs for client commands",
          "Scheduling VM placement based on physical hypervisor capabilities",
          "Acting as a database proxy for nova-compute nodes to prevent direct database compromises",
          "Managing local volume mount lookups",
          "Managing floating IP routing rules"
        ],
        "answer": 2,
        "explanation": "nova-conductor sits between nova-compute and the main database, proxying database transactions so worker nodes do not have direct DB write access."
      },
      {
        "id": 25,
        "question": "What is the primary difference in isolation mechanism between Docker containers and hypervisor VMs?",
        "options": [
          "Containers isolate hardware resources; VMs isolate network ports",
          "Containers use OS kernel namespaces and cgroups; VMs use full hardware virtualization via a hypervisor layer",
          "Containers use shadow page tables; VMs use basic page tables",
          "Containers are managed via sbatch; VMs are managed via Magnum",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Containers share the host operating system kernel and use namespaces and cgroups to isolate processes. VMs execute a complete guest OS on top of a hypervisor."
      },
      {
        "id": 26,
        "question": "What is the purpose of the ENTRYPOINT instruction in a Dockerfile?",
        "options": [
          "To copy files from the host workspace into the container image",
          "To declare the environment variables inside the container",
          "To configure the default executable command that runs when the container starts up",
          "To define the port numbers mapped to the host bridge network",
          "To specify the base OS template image"
        ],
        "answer": 2,
        "explanation": "ENTRYPOINT sets the command that will run when the container starts. CMD provides default arguments that can be appended or overridden."
      },
      {
        "id": 27,
        "question": "What is a Pod in Kubernetes?",
        "options": [
          "A single VM node managed by the control plane master",
          "A group of persistent volumes attached to a namespace",
          "The smallest deployable unit, representing one or more containers sharing network namespaces and storage volumes",
          "An external ingress controller routing HTTP paths",
          "A secure secret vault for ConfigMap details"
        ],
        "answer": 2,
        "explanation": "A Pod is the basic scheduling unit in K8s, containing one or more containers that share the same network stack, IP, and storage."
      },
      {
        "id": 28,
        "question": "What is the key benefit of separating Persistent Volumes (PV) and Persistent Volume Claims (PVC) in Kubernetes?",
        "options": [
          "It prevents database index replication locks",
          "It allows developers to request storage resources abstractly (PVC) without knowing the physical storage details (PV)",
          "It automatically converts block storage volumes to object storage streams",
          "It encrypts sensitive credentials automatically",
          "It speeds up pod boot times to under one second"
        ],
        "answer": 1,
        "explanation": "This separation decouples application requirements (size, read/write modes) from physical storage implementations (NFS, AWS EBS, OpenStack Cinder)."
      },
      {
        "id": 29,
        "question": "In the Fission FaaS framework, what is the role of the 'PoolManager'?",
        "options": [
          "To manage physical CPU hyper-threading queues",
          "To maintain a pool of warm, generic environment pods to minimize cold-start invocation latency",
          "To dynamically spawn and scale pods using HPA thresholds",
          "To queue HTTP trigger routes and return 202 codes",
          "To clean up deleted YAML specs"
        ],
        "answer": 1,
        "explanation": "PoolManager maintains a pre-warmed pool of environment containers. When a function is invoked, the code is loaded into a warm pod, minimizing cold starts."
      },
      {
        "id": 30,
        "question": "Which Fission archive type should you use if your function includes pre-compiled binaries or static files that do not require building?",
        "options": [
          "--sourcearchive",
          "--deployarchive",
          "--specarchive",
          "--buildarchive",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Deploy archives are unzipped and executed directly by Fission without any compilation or pip install steps."
      },
      {
        "id": 31,
        "question": "Why should you NOT store binary image files directly in Elasticsearch?",
        "options": [
          "Elasticsearch does not support JSON formats",
          "It requires base64 encoding (bloating size by ~33%), causing memory pressure, slow replication, and poor query speeds",
          "Elasticsearch only supports SQL queries",
          "Images are immutable and cannot be sharded",
          "Images break CAP consistency protocols"
        ],
        "answer": 1,
        "explanation": "ES is optimized for text index searching, not blob storage. Storing large base64 strings bloats index sizes and degrades search performance."
      },
      {
        "id": 32,
        "question": "How does Elasticsearch prevent concurrent update conflicts without locking database records?",
        "options": [
          "By rejecting all concurrent PUT requests automatically",
          "By routing requests to a single master coordinator node",
          "By requiring updates to include the document's current _seq_no and _primary_term, returning a 409 Conflict if mismatched",
          "By running a two-phase commit write lock",
          "By converting index formats to read-only"
        ],
        "answer": 2,
        "explanation": "ES uses optimistic concurrency control. Requests must contain the expected sequence number and primary term; if the values have incremented, it throws a 409 Conflict."
      },
      {
        "id": 33,
        "question": "What is the primary role of a Certification Authority (CA) in a Public Key Infrastructure (PKI)?",
        "options": [
          "To schedule encryption tasks on worker nodes",
          "To digitally sign public keys, verifying that the key belongs to the declared owner based on trust",
          "To decrypt private keys sent over public subnets",
          "To manage single sign-on user database records",
          "To filter firewall port accesses"
        ],
        "answer": 1,
        "explanation": "A CA acts as a trusted third party, signing certificates to bind a public key to a specific identity."
      },
      {
        "id": 34,
        "question": "What is the main purpose of a Virtual Organization (VO) in distributed grid/cloud computing?",
        "options": [
          "To host virtual desktop interfaces in the cloud",
          "To coordinate dynamic, multi-institutional resource sharing and authorization policies under unified project rules",
          "To manage single-user SSH keypairs on OpenStack",
          "To simulate network partitions",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "VOs map access permissions across distinct security and organizational domains, enabling collaborative resource access without unified accounts."
      },
      {
        "id": 35,
        "question": "Which cloud service model matches the description: 'The customer provisions processing, storage, networks, and other fundamental computing resources'?",
        "options": [
          "SaaS",
          "PaaS",
          "IaaS",
          "DBaaS",
          "FaaS"
        ],
        "answer": 2,
        "explanation": "NIST defines Infrastructure as a Service (IaaS) as renting fundamental infrastructure components."
      }
    ],
    "shortAnswers": [
      {
        "id": 1,
        "question": "Describe some of the current challenges associated with large-scale distributed systems. [4]",
        "maxMarks": 4,
        "sampleAnswer": "Key challenges include:\n1. **Clocks and Time Synchronization**: Clocks drift across independent machines, making event sequencing difficult.\n2. **Network Failures & Partitions**: Message loss and splits can lead to split-brain database states.\n3. **Concurrency and Shared States**: Managing race conditions, locking resource bottlenecks, and deadlocks across multiple nodes.\n4. **Security and Admin Domains**: Enforcing access policies across different network owners."
      },
      {
        "id": 2,
        "question": "Cloud computing solves some of these issues but not all. Explain. [4]",
        "maxMarks": 4,
        "sampleAnswer": "Cloud computing provides elastic scaling, automated backups, and virtualized machine provisioning, solving infrastructure setup and cost allocation challenges. However, it does **not** solve fundamental distributed algorithms challenges: network latency, physical link cuts, clock drift, and data consistency limits (CAP theorem) remain, requiring developers to write fault-tolerant code."
      },
      {
        "id": 3,
        "question": "What are availability zones in NeCTAR and what restrictions do they impose on NeCTAR Cloud-based application developers? [3]",
        "maxMarks": 3,
        "sampleAnswer": "Availability zones are isolated physical data centers within the cloud region (e.g. Melbourne, Sydney). They impose the following restrictions:\n1. **Storage Attachments**: High-speed block storage volumes (Cinder) can only be attached to instances running inside the same availability zone.\n2. **Latency trade-offs**: Synchronous replication between instances in different availability zones incurs network latency, forcing a choice between latency and disaster-recovery coverage."
      },
      {
        "id": 4,
        "question": "A researcher wants to attach to an already running PostgreSQL container named 'postgres' and list all of the databases it contains using 'psql -U postgres -c \"\\l\"'. The container exposes port 5432 to the host. Is the following command correct? If not, please correct it: 'docker exec -p 5432 --name postgres sh -c psql -U postgres -c \"\\l\"' [4]",
        "maxMarks": 4,
        "sampleAnswer": "No, the command is incorrect. \n- The `-p` port flag and `--name` flag are arguments for `docker run` (when creating a container), not `docker exec` (which connects to an already running container).\n- The executable command should be wrapped in quotes or run via a shell properly.\n\n**Correct command**:\n`docker exec -it postgres psql -U postgres -c \"\\l\"` \nor:\n`docker exec postgres sh -c \"psql -U postgres -c '\\l'\"`"
      }
    ]
  },
  {
    "id": "exam_ai_1",
    "title": "AI-Generated Practice Exam 1",
    "type": "AI Generated",
    "questionsCount": 35,
    "mcqs": [
      {
        "id": 1,
        "question": "Which Fission timeout controls the time a function pod remains alive after execution before being recycled?",
        "options": [
          "--specializationtimeout",
          "--fntimeout",
          "--idletimeout",
          "--cooltimeout",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "idletimeout determines how long specialized pods idle before reclamation."
      },
      {
        "id": 2,
        "question": "Under the CAP theorem, which database model operates as an AP (Availability and Partition Tolerance) system?",
        "options": [
          "Relational PostgreSQL",
          "CouchDB multi-master cluster",
          "Magnum K8s deployment",
          "Single-node MySQL database",
          "Federated PostgreSQL FDW"
        ],
        "answer": 1,
        "explanation": "CouchDB is AP, permitting concurrent writes to any partition and reconciling conflicts asynchronously."
      },
      {
        "id": 3,
        "question": "What is a major limitation of Elasticsearch SQL support?",
        "options": [
          "It cannot query indexes",
          "It does not support standard relational database joins, DISTINCT, or returning multi-valued fields",
          "It requires Java runtime compilation",
          "It only supports GET methods",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "ES SQL has translation limits: no standard joins, no distinct, and no complex multi-valued field query returns."
      },
      {
        "id": 4,
        "question": "According to the Popek-Goldberg Virtualization Theorem, a CPU is virtualizable if and only if:",
        "options": [
          "Its clock speed exceeds 3.0 GHz",
          "Its sensitive instructions are a subset of its privileged instructions",
          "It supports Docker containers natively",
          "It has dedicated L1/L2 caches per core",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "All sensitive instructions must trigger a hardware trap in user space (be privileged) for a hypervisor to intercept them."
      },
      {
        "id": 5,
        "question": "What does an AWS VPC (Virtual Private Cloud) represent?",
        "options": [
          "A shared object storage container",
          "An isolated virtual network dedicated to your AWS account",
          "A single EC2 virtual machine",
          "An auto-scaled container deployment group",
          "A federated authorization tunnel"
        ],
        "answer": 1,
        "explanation": "A VPC is a private logical network partition in AWS."
      },
      {
        "id": 6,
        "question": "In the 4 A's of security, which term is defined as 'recording who accessed what resource at what time'?",
        "options": [
          "Authentication",
          "Authorization",
          "Audit",
          "Accounting",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "Audit tracks historical access events and log statements."
      },
      {
        "id": 7,
        "question": "Under course conventions, which of the following is NOT one of the five NIST essential characteristics of Cloud Computing?",
        "options": [
          "On-demand self-service",
          "Resource pooling",
          "Rapid elasticity",
          "Multithreaded hyper-threading",
          "Measured service"
        ],
        "answer": 3,
        "explanation": "NIST essential characteristics are: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, and Measured service."
      },
      {
        "id": 8,
        "question": "What does 'Resource Pooling' in cloud computing refer to?",
        "options": [
          "Allocating a single physical server dedicated entirely to one business client",
          "Grouping multiple separate client databases into a single un-partitioned SQL table",
          "Serving multiple consumers using a multi-tenant model with dynamically assigned physical and virtual resources",
          "Sharing local files over an NFS mount point",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "Resource pooling allows the provider to dynamically allocate physical and virtual resources from a shared pool to multiple users based on demand."
      },
      {
        "id": 9,
        "question": "Which of the following represents horizontal scaling?",
        "options": [
          "Upgrading a single VM from 4 vCPUs to 16 vCPUs",
          "Replacing a 2.4 GHz CPU with a 3.6 GHz CPU",
          "Adding more virtual machine instances to a cluster to share the workload load",
          "Attaching a larger Cinder block storage volume to an active instance",
          "Switching from a public cloud to a private cloud"
        ],
        "answer": 2,
        "explanation": "Horizontal scaling (scaling out) involves adding more nodes/servers to the pool, whereas vertical scaling (scaling up) involves increasing the capacity of a single node."
      },
      {
        "id": 10,
        "question": "What is the key bottleneck identified by Amdahl's Law when adding more processors?",
        "options": [
          "The size of the L3 cache",
          "The cost of public cloud egress bandwidth",
          "The sequential (non-parallelizable) portion of the code",
          "The number of concurrent threads in memory",
          "The database transaction lock wait times"
        ],
        "answer": 2,
        "explanation": "Amdahl's law calculates theoretical speedup based on a fixed problem size, showing that speedup is limited by the fraction of the program that cannot be parallelized."
      },
      {
        "id": 11,
        "question": "In the CAP theorem, what does Consistency (C) mean?",
        "options": [
          "Every transaction is written to at least two database shards",
          "Every read request receives the most recent write or an error",
          "The database schema is verified against a strict JSON schema template",
          "Every database node responds without error within a given time limit",
          "Data schemas remain identical across all public and private tables"
        ],
        "answer": 1,
        "explanation": "Consistency means that every client query returns the same state/non-error answer from all nodes of the cluster."
      },
      {
        "id": 12,
        "question": "Which database technology is a classic CA (Consistency & Availability) system under the CAP theorem, failing in the presence of network partitions?",
        "options": [
          "CouchDB leaderless multi-master setup",
          "Elasticsearch index replication cluster",
          "Federated PostgreSQL using Foreign Data Wrappers and two-phase commit",
          "Apache Cassandra column family model",
          "Redis key-value caching"
        ],
        "answer": 2,
        "explanation": "A federated database using FDWs and 2-phase commit enforces strict consistency across all nodes. If a partition occurs, it must abort writes, sacrificing partition tolerance (P)."
      },
      {
        "id": 13,
        "question": "Which OpenStack component acts as the network controller, managing ports, firewall security groups, and floating IPs?",
        "options": [
          "Nova",
          "Horizon",
          "Neutron",
          "Glance",
          "Keystone"
        ],
        "answer": 2,
        "explanation": "Neutron handles all virtual networking services (ports, subnets, routers, security groups) in OpenStack."
      },
      {
        "id": 14,
        "question": "What is the role of 'nova-conductor' in the OpenStack compute architecture?",
        "options": [
          "Exposing public REST APIs for client commands",
          "Scheduling VM placement based on physical hypervisor capabilities",
          "Acting as a database proxy for nova-compute nodes to prevent direct database compromises",
          "Managing local volume mount lookups",
          "Managing floating IP routing rules"
        ],
        "answer": 2,
        "explanation": "nova-conductor sits between nova-compute and the main database, proxying database transactions so worker nodes do not have direct DB write access."
      },
      {
        "id": 15,
        "question": "What is the primary difference in isolation mechanism between Docker containers and hypervisor VMs?",
        "options": [
          "Containers isolate hardware resources; VMs isolate network ports",
          "Containers use OS kernel namespaces and cgroups; VMs use full hardware virtualization via a hypervisor layer",
          "Containers use shadow page tables; VMs use basic page tables",
          "Containers are managed via sbatch; VMs are managed via Magnum",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Containers share the host operating system kernel and use namespaces and cgroups to isolate processes. VMs execute a complete guest OS on top of a hypervisor."
      },
      {
        "id": 16,
        "question": "What is the purpose of the ENTRYPOINT instruction in a Dockerfile?",
        "options": [
          "To copy files from the host workspace into the container image",
          "To declare the environment variables inside the container",
          "To configure the default executable command that runs when the container starts up",
          "To define the port numbers mapped to the host bridge network",
          "To specify the base OS template image"
        ],
        "answer": 2,
        "explanation": "ENTRYPOINT sets the command that will run when the container starts. CMD provides default arguments that can be appended or overridden."
      },
      {
        "id": 17,
        "question": "What is a Pod in Kubernetes?",
        "options": [
          "A single VM node managed by the control plane master",
          "A group of persistent volumes attached to a namespace",
          "The smallest deployable unit, representing one or more containers sharing network namespaces and storage volumes",
          "An external ingress controller routing HTTP paths",
          "A secure secret vault for ConfigMap details"
        ],
        "answer": 2,
        "explanation": "A Pod is the basic scheduling unit in K8s, containing one or more containers that share the same network stack, IP, and storage."
      },
      {
        "id": 18,
        "question": "What is the key benefit of separating Persistent Volumes (PV) and Persistent Volume Claims (PVC) in Kubernetes?",
        "options": [
          "It prevents database index replication locks",
          "It allows developers to request storage resources abstractly (PVC) without knowing the physical storage details (PV)",
          "It automatically converts block storage volumes to object storage streams",
          "It encrypts sensitive credentials automatically",
          "It speeds up pod boot times to under one second"
        ],
        "answer": 1,
        "explanation": "This separation decouples application requirements (size, read/write modes) from physical storage implementations (NFS, AWS EBS, OpenStack Cinder)."
      },
      {
        "id": 19,
        "question": "In the Fission FaaS framework, what is the role of the 'PoolManager'?",
        "options": [
          "To manage physical CPU hyper-threading queues",
          "To maintain a pool of warm, generic environment pods to minimize cold-start invocation latency",
          "To dynamically spawn and scale pods using HPA thresholds",
          "To queue HTTP trigger routes and return 202 codes",
          "To clean up deleted YAML specs"
        ],
        "answer": 1,
        "explanation": "PoolManager maintains a pre-warmed pool of environment containers. When a function is invoked, the code is loaded into a warm pod, minimizing cold starts."
      },
      {
        "id": 20,
        "question": "Which Fission archive type should you use if your function includes pre-compiled binaries or static files that do not require building?",
        "options": [
          "--sourcearchive",
          "--deployarchive",
          "--specarchive",
          "--buildarchive",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Deploy archives are unzipped and executed directly by Fission without any compilation or pip install steps."
      },
      {
        "id": 21,
        "question": "Why should you NOT store binary image files directly in Elasticsearch?",
        "options": [
          "Elasticsearch does not support JSON formats",
          "It requires base64 encoding (bloating size by ~33%), causing memory pressure, slow replication, and poor query speeds",
          "Elasticsearch only supports SQL queries",
          "Images are immutable and cannot be sharded",
          "Images break CAP consistency protocols"
        ],
        "answer": 1,
        "explanation": "ES is optimized for text index searching, not blob storage. Storing large base64 strings bloats index sizes and degrades search performance."
      },
      {
        "id": 22,
        "question": "How does Elasticsearch prevent concurrent update conflicts without locking database records?",
        "options": [
          "By rejecting all concurrent PUT requests automatically",
          "By routing requests to a single master coordinator node",
          "By requiring updates to include the document's current _seq_no and _primary_term, returning a 409 Conflict if mismatched",
          "By running a two-phase commit write lock",
          "By converting index formats to read-only"
        ],
        "answer": 2,
        "explanation": "ES uses optimistic concurrency control. Requests must contain the expected sequence number and primary term; if the values have incremented, it throws a 409 Conflict."
      },
      {
        "id": 23,
        "question": "What is the primary role of a Certification Authority (CA) in a Public Key Infrastructure (PKI)?",
        "options": [
          "To schedule encryption tasks on worker nodes",
          "To digitally sign public keys, verifying that the key belongs to the declared owner based on trust",
          "To decrypt private keys sent over public subnets",
          "To manage single sign-on user database records",
          "To filter firewall port accesses"
        ],
        "answer": 1,
        "explanation": "A CA acts as a trusted third party, signing certificates to bind a public key to a specific identity."
      },
      {
        "id": 24,
        "question": "What is the main purpose of a Virtual Organization (VO) in distributed grid/cloud computing?",
        "options": [
          "To host virtual desktop interfaces in the cloud",
          "To coordinate dynamic, multi-institutional resource sharing and authorization policies under unified project rules",
          "To manage single-user SSH keypairs on OpenStack",
          "To simulate network partitions",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "VOs map access permissions across distinct security and organizational domains, enabling collaborative resource access without unified accounts."
      },
      {
        "id": 25,
        "question": "Which cloud service model matches the description: 'The customer provisions processing, storage, networks, and other fundamental computing resources'?",
        "options": [
          "SaaS",
          "PaaS",
          "IaaS",
          "DBaaS",
          "FaaS"
        ],
        "answer": 2,
        "explanation": "NIST defines Infrastructure as a Service (IaaS) as renting fundamental infrastructure components."
      },
      {
        "id": 26,
        "question": "In Flynn's Taxonomy, which classification matches modern multi-core computers?",
        "options": [
          "SISD",
          "SIMD",
          "MISD",
          "MIMD",
          "None of the above"
        ],
        "answer": 3,
        "explanation": "MIMD (Multiple Instruction, Multiple Data) is the standard parallel computing architecture where independent cores execute different instructions on separate data."
      },
      {
        "id": 27,
        "question": "What is loop overhead in parallel execution?",
        "options": [
          "The memory size of loop counter variables",
          "The extra computation (bounds checking, index incrementing) replicated on every processor sharing a loop",
          "The network latency of sending loop instructions to workers",
          "The database write lock duration inside a loop",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Splitting loops among processors replicates index tests and bounds calculations on each processor, adding serial overhead."
      },
      {
        "id": 28,
        "question": "Which Spartan/SLURM partition is the default queue for general workloads?",
        "options": [
          "physical",
          "cloud",
          "sapphire",
          "gpu",
          "head-node"
        ],
        "answer": 2,
        "explanation": "On Spartan, Sapphire is the default CPU partition/queue."
      },
      {
        "id": 29,
        "question": "In OpenStack, what does Cinder manage?",
        "options": [
          "OS templates",
          "User SSH keypairs",
          "Persistent block storage volumes",
          "Object storage buckets",
          "Floating IP networks"
        ],
        "answer": 2,
        "explanation": "Cinder is the OpenStack Block Storage service, providing persistent drives."
      },
      {
        "id": 30,
        "question": "Which cloud storage type is flat, has no folder hierarchy, and is accessed via API endpoints?",
        "options": [
          "Block Storage",
          "Object Storage",
          "File Storage",
          "Local ephemeral disk",
          "NAS storage"
        ],
        "answer": 1,
        "explanation": "Object storage organizes files into a flat namespace of binary objects containing metadata and keys, accessed over HTTP APIs."
      },
      {
        "id": 31,
        "question": "What does the command 'docker rm -f <container>' do?",
        "options": [
          "Deletes a Docker image",
          "Forcefully stops and removes a running container by sending a SIGKILL signal",
          "Gracefully stops a container and keeps its state in a volume",
          "Forcefully rebuilds the Docker image from context",
          "Removes a named volume"
        ],
        "answer": 1,
        "explanation": "The -f flag force-removes active containers using SIGKILL."
      },
      {
        "id": 32,
        "question": "What is the purpose of 'exec \"$@\"' at the end of a Docker entrypoint script?",
        "options": [
          "To run multiple containers in a bridge network",
          "To execute a build-time command inside the image",
          "To replace the shell process with the main container command, ensuring it runs as PID 1 and receives OS signals",
          "To mount a volume drive dynamically",
          "To restart the container automatically"
        ],
        "answer": 2,
        "explanation": "It executes the default CMD args as the new PID 1 process, allowing signal forwarding (SIGTERM) for graceful shutdowns."
      },
      {
        "id": 33,
        "question": "What is a 'Security Hotspot' in a CI/CD code scanner (like SonarQube)?",
        "options": [
          "A confirmed SQL injection bug",
          "Code that requires human review to determine if it is a security weakness, such as hardcoded API keys or open ports",
          "A virus detected in a base Docker image",
          "A network partition trigger",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Security hotspots are code areas that are suspicious but need manual auditing to confirm vulnerability."
      },
      {
        "id": 34,
        "question": "Under course conventions, which of the following is true about Kubernetes services?",
        "options": [
          "They run inside container namespaces directly",
          "They provide a stable internal IP address and port to access a dynamic set of pods",
          "They manage virtual machine image snapshots",
          "They automatically encrypt database volume claims",
          "They replace the control plane API"
        ],
        "answer": 1,
        "explanation": "Services offer logical abstraction and stable IPs/ports over shifting pods."
      },
      {
        "id": 35,
        "question": "In REST APIs, when is PUT preferred over POST?",
        "options": [
          "When creating a resource at a URL generated by the server",
          "When updating or creating a resource at a client-defined, specific URL",
          "When the operation is not idempotent",
          "When sending binary file uploads",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "PUT is idempotent and is used when the client knows and specifies the final resource destination URL."
      }
    ],
    "shortAnswers": [
      {
        "id": 1,
        "question": "Compare and contrast Virtualization (VMs) and Containerization (Docker) in terms of boot time, disk footprint, memory usage, and isolation. [5]",
        "maxMarks": 5,
        "sampleAnswer": "1. **Boot Time**: Containers boot in seconds because they share the host OS kernel. VMs take minutes because they boot a complete guest OS.\n2. **Disk Footprint**: Containers are small (MBs to a few hundred MBs). VMs are large (GBs) because they include duplicate OS files.\n3. **Memory Usage**: Containers are highly efficient, sharing host libraries. VMs require dedicated guest OS RAM.\n4. **Isolation**: VMs use full hardware-level isolation via a hypervisor (more secure). Containers use process-level namespaces and cgroups (weaker isolation)."
      },
      {
        "id": 2,
        "question": "In the context of Docker runtime, explain the process hijack (exec \"$@\") pattern in an ENTRYPOINT script and why it is critical for signal forwarding. [5]",
        "maxMarks": 5,
        "sampleAnswer": "The `exec \"$@\"` pattern executes the command arguments passed in CMD directly within the shell wrapper. \n- **Process replacement**: The `exec` shell instruction causes the application process (e.g. Nginx) to replace the shell script process, adopting **PID 1**.\n- **Signal forwarding**: Unix signals (like SIGTERM/SIGINT) sent by Docker during shutdown are only delivered to PID 1. If `exec \"$@\"` is omitted, the shell remains PID 1 and ignores signals, causing application processes to be abruptly terminated with a SIGKILL after the timeout, preventing graceful resource cleanups."
      },
      {
        "id": 3,
        "question": "List 5 security and design anti-patterns when integrating databases (e.g. Elasticsearch) into FaaS/Serverless applications. [5]",
        "maxMarks": 5,
        "sampleAnswer": "Anti-patterns include:\n1. **Storing credentials in plain text**: Putting keys in ConfigMaps instead of using Kubernetes Secrets.\n2. **Lack of database isolation**: Mixing production and testing databases, risking data loss.\n3. **No database error mocking**: Failing to test code behavior during database timeouts.\n4. **Public testing routes**: Exposing endpoints like `/wipedb` to the public web.\n5. **Raw database response leaks**: Passing un-sanitized Elasticsearch logs directly to client APIs, leaking internal node metadata."
      }
    ]
  },
  {
    "id": "exam_ai_2",
    "title": "AI-Generated Practice Exam 2",
    "type": "AI Generated",
    "questionsCount": 35,
    "mcqs": [
      {
        "id": 1,
        "question": "What is the purpose of the ENTRYPOINT instruction in a Dockerfile?",
        "options": [
          "To copy files from the host workspace into the container image",
          "To declare the environment variables inside the container",
          "To configure the default executable command that runs when the container starts up",
          "To define the port numbers mapped to the host bridge network",
          "To specify the base OS template image"
        ],
        "answer": 2,
        "explanation": "ENTRYPOINT sets the command that will run when the container starts. CMD provides default arguments that can be appended or overridden."
      },
      {
        "id": 2,
        "question": "What is a Pod in Kubernetes?",
        "options": [
          "A single VM node managed by the control plane master",
          "A group of persistent volumes attached to a namespace",
          "The smallest deployable unit, representing one or more containers sharing network namespaces and storage volumes",
          "An external ingress controller routing HTTP paths",
          "A secure secret vault for ConfigMap details"
        ],
        "answer": 2,
        "explanation": "A Pod is the basic scheduling unit in K8s, containing one or more containers that share the same network stack, IP, and storage."
      },
      {
        "id": 3,
        "question": "What is the key benefit of separating Persistent Volumes (PV) and Persistent Volume Claims (PVC) in Kubernetes?",
        "options": [
          "It prevents database index replication locks",
          "It allows developers to request storage resources abstractly (PVC) without knowing the physical storage details (PV)",
          "It automatically converts block storage volumes to object storage streams",
          "It encrypts sensitive credentials automatically",
          "It speeds up pod boot times to under one second"
        ],
        "answer": 1,
        "explanation": "This separation decouples application requirements (size, read/write modes) from physical storage implementations (NFS, AWS EBS, OpenStack Cinder)."
      },
      {
        "id": 4,
        "question": "In the Fission FaaS framework, what is the role of the 'PoolManager'?",
        "options": [
          "To manage physical CPU hyper-threading queues",
          "To maintain a pool of warm, generic environment pods to minimize cold-start invocation latency",
          "To dynamically spawn and scale pods using HPA thresholds",
          "To queue HTTP trigger routes and return 202 codes",
          "To clean up deleted YAML specs"
        ],
        "answer": 1,
        "explanation": "PoolManager maintains a pre-warmed pool of environment containers. When a function is invoked, the code is loaded into a warm pod, minimizing cold starts."
      },
      {
        "id": 5,
        "question": "Which Fission archive type should you use if your function includes pre-compiled binaries or static files that do not require building?",
        "options": [
          "--sourcearchive",
          "--deployarchive",
          "--specarchive",
          "--buildarchive",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Deploy archives are unzipped and executed directly by Fission without any compilation or pip install steps."
      },
      {
        "id": 6,
        "question": "Why should you NOT store binary image files directly in Elasticsearch?",
        "options": [
          "Elasticsearch does not support JSON formats",
          "It requires base64 encoding (bloating size by ~33%), causing memory pressure, slow replication, and poor query speeds",
          "Elasticsearch only supports SQL queries",
          "Images are immutable and cannot be sharded",
          "Images break CAP consistency protocols"
        ],
        "answer": 1,
        "explanation": "ES is optimized for text index searching, not blob storage. Storing large base64 strings bloats index sizes and degrades search performance."
      },
      {
        "id": 7,
        "question": "How does Elasticsearch prevent concurrent update conflicts without locking database records?",
        "options": [
          "By rejecting all concurrent PUT requests automatically",
          "By routing requests to a single master coordinator node",
          "By requiring updates to include the document's current _seq_no and _primary_term, returning a 409 Conflict if mismatched",
          "By running a two-phase commit write lock",
          "By converting index formats to read-only"
        ],
        "answer": 2,
        "explanation": "ES uses optimistic concurrency control. Requests must contain the expected sequence number and primary term; if the values have incremented, it throws a 409 Conflict."
      },
      {
        "id": 8,
        "question": "What is the primary role of a Certification Authority (CA) in a Public Key Infrastructure (PKI)?",
        "options": [
          "To schedule encryption tasks on worker nodes",
          "To digitally sign public keys, verifying that the key belongs to the declared owner based on trust",
          "To decrypt private keys sent over public subnets",
          "To manage single sign-on user database records",
          "To filter firewall port accesses"
        ],
        "answer": 1,
        "explanation": "A CA acts as a trusted third party, signing certificates to bind a public key to a specific identity."
      },
      {
        "id": 9,
        "question": "What is the main purpose of a Virtual Organization (VO) in distributed grid/cloud computing?",
        "options": [
          "To host virtual desktop interfaces in the cloud",
          "To coordinate dynamic, multi-institutional resource sharing and authorization policies under unified project rules",
          "To manage single-user SSH keypairs on OpenStack",
          "To simulate network partitions",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "VOs map access permissions across distinct security and organizational domains, enabling collaborative resource access without unified accounts."
      },
      {
        "id": 10,
        "question": "Which cloud service model matches the description: 'The customer provisions processing, storage, networks, and other fundamental computing resources'?",
        "options": [
          "SaaS",
          "PaaS",
          "IaaS",
          "DBaaS",
          "FaaS"
        ],
        "answer": 2,
        "explanation": "NIST defines Infrastructure as a Service (IaaS) as renting fundamental infrastructure components."
      },
      {
        "id": 11,
        "question": "In Flynn's Taxonomy, which classification matches modern multi-core computers?",
        "options": [
          "SISD",
          "SIMD",
          "MISD",
          "MIMD",
          "None of the above"
        ],
        "answer": 3,
        "explanation": "MIMD (Multiple Instruction, Multiple Data) is the standard parallel computing architecture where independent cores execute different instructions on separate data."
      },
      {
        "id": 12,
        "question": "What is loop overhead in parallel execution?",
        "options": [
          "The memory size of loop counter variables",
          "The extra computation (bounds checking, index incrementing) replicated on every processor sharing a loop",
          "The network latency of sending loop instructions to workers",
          "The database write lock duration inside a loop",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Splitting loops among processors replicates index tests and bounds calculations on each processor, adding serial overhead."
      },
      {
        "id": 13,
        "question": "Which Spartan/SLURM partition is the default queue for general workloads?",
        "options": [
          "physical",
          "cloud",
          "sapphire",
          "gpu",
          "head-node"
        ],
        "answer": 2,
        "explanation": "On Spartan, Sapphire is the default CPU partition/queue."
      },
      {
        "id": 14,
        "question": "In OpenStack, what does Cinder manage?",
        "options": [
          "OS templates",
          "User SSH keypairs",
          "Persistent block storage volumes",
          "Object storage buckets",
          "Floating IP networks"
        ],
        "answer": 2,
        "explanation": "Cinder is the OpenStack Block Storage service, providing persistent drives."
      },
      {
        "id": 15,
        "question": "Which cloud storage type is flat, has no folder hierarchy, and is accessed via API endpoints?",
        "options": [
          "Block Storage",
          "Object Storage",
          "File Storage",
          "Local ephemeral disk",
          "NAS storage"
        ],
        "answer": 1,
        "explanation": "Object storage organizes files into a flat namespace of binary objects containing metadata and keys, accessed over HTTP APIs."
      },
      {
        "id": 16,
        "question": "What does the command 'docker rm -f <container>' do?",
        "options": [
          "Deletes a Docker image",
          "Forcefully stops and removes a running container by sending a SIGKILL signal",
          "Gracefully stops a container and keeps its state in a volume",
          "Forcefully rebuilds the Docker image from context",
          "Removes a named volume"
        ],
        "answer": 1,
        "explanation": "The -f flag force-removes active containers using SIGKILL."
      },
      {
        "id": 17,
        "question": "What is the purpose of 'exec \"$@\"' at the end of a Docker entrypoint script?",
        "options": [
          "To run multiple containers in a bridge network",
          "To execute a build-time command inside the image",
          "To replace the shell process with the main container command, ensuring it runs as PID 1 and receives OS signals",
          "To mount a volume drive dynamically",
          "To restart the container automatically"
        ],
        "answer": 2,
        "explanation": "It executes the default CMD args as the new PID 1 process, allowing signal forwarding (SIGTERM) for graceful shutdowns."
      },
      {
        "id": 18,
        "question": "What is a 'Security Hotspot' in a CI/CD code scanner (like SonarQube)?",
        "options": [
          "A confirmed SQL injection bug",
          "Code that requires human review to determine if it is a security weakness, such as hardcoded API keys or open ports",
          "A virus detected in a base Docker image",
          "A network partition trigger",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "Security hotspots are code areas that are suspicious but need manual auditing to confirm vulnerability."
      },
      {
        "id": 19,
        "question": "Under course conventions, which of the following is true about Kubernetes services?",
        "options": [
          "They run inside container namespaces directly",
          "They provide a stable internal IP address and port to access a dynamic set of pods",
          "They manage virtual machine image snapshots",
          "They automatically encrypt database volume claims",
          "They replace the control plane API"
        ],
        "answer": 1,
        "explanation": "Services offer logical abstraction and stable IPs/ports over shifting pods."
      },
      {
        "id": 20,
        "question": "In REST APIs, when is PUT preferred over POST?",
        "options": [
          "When creating a resource at a URL generated by the server",
          "When updating or creating a resource at a client-defined, specific URL",
          "When the operation is not idempotent",
          "When sending binary file uploads",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "PUT is idempotent and is used when the client knows and specifies the final resource destination URL."
      },
      {
        "id": 21,
        "question": "Which testing tier is characterized by testing individual methods or classes in isolation, using mock interfaces?",
        "options": [
          "Integration tests",
          "System tests",
          "Unit tests",
          "End-to-End tests",
          "Performance tests"
        ],
        "answer": 2,
        "explanation": "Unit testing verifies code pieces in isolation."
      },
      {
        "id": 22,
        "question": "Which Fission timeout controls the time a function pod remains alive after execution before being recycled?",
        "options": [
          "--specializationtimeout",
          "--fntimeout",
          "--idletimeout",
          "--cooltimeout",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "idletimeout determines how long specialized pods idle before reclamation."
      },
      {
        "id": 23,
        "question": "Under the CAP theorem, which database model operates as an AP (Availability and Partition Tolerance) system?",
        "options": [
          "Relational PostgreSQL",
          "CouchDB multi-master cluster",
          "Magnum K8s deployment",
          "Single-node MySQL database",
          "Federated PostgreSQL FDW"
        ],
        "answer": 1,
        "explanation": "CouchDB is AP, permitting concurrent writes to any partition and reconciling conflicts asynchronously."
      },
      {
        "id": 24,
        "question": "What is a major limitation of Elasticsearch SQL support?",
        "options": [
          "It cannot query indexes",
          "It does not support standard relational database joins, DISTINCT, or returning multi-valued fields",
          "It requires Java runtime compilation",
          "It only supports GET methods",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "ES SQL has translation limits: no standard joins, no distinct, and no complex multi-valued field query returns."
      },
      {
        "id": 25,
        "question": "According to the Popek-Goldberg Virtualization Theorem, a CPU is virtualizable if and only if:",
        "options": [
          "Its clock speed exceeds 3.0 GHz",
          "Its sensitive instructions are a subset of its privileged instructions",
          "It supports Docker containers natively",
          "It has dedicated L1/L2 caches per core",
          "None of the above"
        ],
        "answer": 1,
        "explanation": "All sensitive instructions must trigger a hardware trap in user space (be privileged) for a hypervisor to intercept them."
      },
      {
        "id": 26,
        "question": "What does an AWS VPC (Virtual Private Cloud) represent?",
        "options": [
          "A shared object storage container",
          "An isolated virtual network dedicated to your AWS account",
          "A single EC2 virtual machine",
          "An auto-scaled container deployment group",
          "A federated authorization tunnel"
        ],
        "answer": 1,
        "explanation": "A VPC is a private logical network partition in AWS."
      },
      {
        "id": 27,
        "question": "In the 4 A's of security, which term is defined as 'recording who accessed what resource at what time'?",
        "options": [
          "Authentication",
          "Authorization",
          "Audit",
          "Accounting",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "Audit tracks historical access events and log statements."
      },
      {
        "id": 28,
        "question": "Under course conventions, which of the following is NOT one of the five NIST essential characteristics of Cloud Computing?",
        "options": [
          "On-demand self-service",
          "Resource pooling",
          "Rapid elasticity",
          "Multithreaded hyper-threading",
          "Measured service"
        ],
        "answer": 3,
        "explanation": "NIST essential characteristics are: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, and Measured service."
      },
      {
        "id": 29,
        "question": "What does 'Resource Pooling' in cloud computing refer to?",
        "options": [
          "Allocating a single physical server dedicated entirely to one business client",
          "Grouping multiple separate client databases into a single un-partitioned SQL table",
          "Serving multiple consumers using a multi-tenant model with dynamically assigned physical and virtual resources",
          "Sharing local files over an NFS mount point",
          "None of the above"
        ],
        "answer": 2,
        "explanation": "Resource pooling allows the provider to dynamically allocate physical and virtual resources from a shared pool to multiple users based on demand."
      },
      {
        "id": 30,
        "question": "Which of the following represents horizontal scaling?",
        "options": [
          "Upgrading a single VM from 4 vCPUs to 16 vCPUs",
          "Replacing a 2.4 GHz CPU with a 3.6 GHz CPU",
          "Adding more virtual machine instances to a cluster to share the workload load",
          "Attaching a larger Cinder block storage volume to an active instance",
          "Switching from a public cloud to a private cloud"
        ],
        "answer": 2,
        "explanation": "Horizontal scaling (scaling out) involves adding more nodes/servers to the pool, whereas vertical scaling (scaling up) involves increasing the capacity of a single node."
      },
      {
        "id": 31,
        "question": "What is the key bottleneck identified by Amdahl's Law when adding more processors?",
        "options": [
          "The size of the L3 cache",
          "The cost of public cloud egress bandwidth",
          "The sequential (non-parallelizable) portion of the code",
          "The number of concurrent threads in memory",
          "The database transaction lock wait times"
        ],
        "answer": 2,
        "explanation": "Amdahl's law calculates theoretical speedup based on a fixed problem size, showing that speedup is limited by the fraction of the program that cannot be parallelized."
      },
      {
        "id": 32,
        "question": "In the CAP theorem, what does Consistency (C) mean?",
        "options": [
          "Every transaction is written to at least two database shards",
          "Every read request receives the most recent write or an error",
          "The database schema is verified against a strict JSON schema template",
          "Every database node responds without error within a given time limit",
          "Data schemas remain identical across all public and private tables"
        ],
        "answer": 1,
        "explanation": "Consistency means that every client query returns the same state/non-error answer from all nodes of the cluster."
      },
      {
        "id": 33,
        "question": "Which database technology is a classic CA (Consistency & Availability) system under the CAP theorem, failing in the presence of network partitions?",
        "options": [
          "CouchDB leaderless multi-master setup",
          "Elasticsearch index replication cluster",
          "Federated PostgreSQL using Foreign Data Wrappers and two-phase commit",
          "Apache Cassandra column family model",
          "Redis key-value caching"
        ],
        "answer": 2,
        "explanation": "A federated database using FDWs and 2-phase commit enforces strict consistency across all nodes. If a partition occurs, it must abort writes, sacrificing partition tolerance (P)."
      },
      {
        "id": 34,
        "question": "Which OpenStack component acts as the network controller, managing ports, firewall security groups, and floating IPs?",
        "options": [
          "Nova",
          "Horizon",
          "Neutron",
          "Glance",
          "Keystone"
        ],
        "answer": 2,
        "explanation": "Neutron handles all virtual networking services (ports, subnets, routers, security groups) in OpenStack."
      },
      {
        "id": 35,
        "question": "What is the role of 'nova-conductor' in the OpenStack compute architecture?",
        "options": [
          "Exposing public REST APIs for client commands",
          "Scheduling VM placement based on physical hypervisor capabilities",
          "Acting as a database proxy for nova-compute nodes to prevent direct database compromises",
          "Managing local volume mount lookups",
          "Managing floating IP routing rules"
        ],
        "answer": 2,
        "explanation": "nova-conductor sits between nova-compute and the main database, proxying database transactions so worker nodes do not have direct DB write access."
      }
    ],
    "shortAnswers": [
      {
        "id": 1,
        "question": "In Fission (FaaS on K8s), compare the PoolManager and NewDeploy execution strategies, outlining their trade-offs in cold-start latency and autoscaling capabilities. [5]",
        "maxMarks": 5,
        "sampleAnswer": "- **PoolManager**:\n  - *Mechanism*: Maintains a pool of warm, generic environment pods. Dynamically loads the function package upon request.\n  - *Cold-start*: Extremely low (milliseconds) since container startup is avoided.\n  - *Autoscaling*: Poor; cannot scale out dynamically to handle heavy concurrent request loads.\n- **NewDeploy**:\n  - *Mechanism*: Creates dedicated deployment pods specifically for the function.\n  - *Cold-start*: High (seconds) because it must provision new pods.\n  - *Autoscaling*: Excellent; scales pods up and down using the Kubernetes Horizontal Pod Autoscaler (HPA) based on resource thresholds."
      },
      {
        "id": 2,
        "question": "Detail the mechanism of Elasticsearch concurrency control (using sequence numbers and primary terms) and how it prevents update conflicts (409 errors). [5]",
        "maxMarks": 5,
        "sampleAnswer": "Elasticsearch does not support row-locking. It uses **optimistic concurrency control**:\n1. **Sequence Numbers (_seq_no)**: Every change to a document increments a sequence number inside the shard.\n2. **Primary Term (_primary_term)**: Increments when the primary shard fails and a replica is elected as primary, distinguishing old updates.\n3. **Conflict prevention**: When updating a document, the client must pass the expected `_seq_no` and `_primary_term`. If another request modified the document in the meantime, the values on the shard won't match the client's request, and ES rejects the update with an **HTTP 409 Conflict** error."
      },
      {
        "id": 3,
        "question": "Explain the Popek-Goldberg virtualization theorem and describe the difference between Type-1 (Bare Metal) and Type-2 (Hosted) hypervisors. [5]",
        "maxMarks": 5,
        "sampleAnswer": "The **Popek-Goldberg Theorem** states that a computer architecture is virtualizable if and only if all sensitive instructions (those that expose or modify hardware configurations) are a strict subset of privileged instructions (those that trigger a hardware trap in user space). \n- **Type-1 Hypervisor (Bare Metal)**: Runs directly on the physical hardware host, offering high performance and security (e.g. VMware ESXi).\n- **Type-2 Hypervisor (Hosted)**: Runs inside a conventional host operating system, adding hypervisor layer overhead (e.g. VirtualBox)."
      }
    ]
  }
];
