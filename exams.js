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
      "question": "Why did hardware manufacturers shift away from relying solely on Moore's Law (increasing transistor density to boost clock speeds) for CPU performance scaling?",
      "options": [
        "Because physical size limitations of nano-CMOS transistors caused severe power leakage and thermal dissipation bottlenecks (the power wall).",
        "Because software compilers could no longer optimize sequential instructions.",
        "Because cache memory ceased to synchronize with CPU cores.",
        "Because the government mandated an energy efficiency limit on public data centers.",
        "None of the above."
      ],
      "answer": 0,
      "explanation": "As transistors shrunk below the nano-scale, leakage currents and heat dissipation (thermal wall) became unsustainable, forcing the industry to shift to multi-core, parallel architectures instead of single-core frequency scaling."
    },
    {
      "id": 2,
      "question": "Under the NIST definition of Cloud Computing, what does 'Broad Network Access' specify?",
      "options": [
        "That resources must be accessible from anywhere in the world using standard mechanisms that promote use by heterogeneous client platforms.",
        "That the network speed must exceed a minimum bandwidth threshold of 1 Gbps.",
        "That the cloud provider must offer dedicated fiber optic links to the client.",
        "That the client has direct, un-firewalled routing to the cloud infrastructure."
      ],
      "answer": 0,
      "explanation": "Broad network access ensures that cloud services are available over the network and accessed through standard platforms (mobile phones, tablets, laptops, workstations)."
    },
    {
      "id": 3,
      "question": "What was a major reason why early Grid Computing infrastructures failed to achieve widespread commercial adoption compared to modern Cloud Computing?",
      "options": [
        "A lack of unified standards and poor interoperability, coupled with complex, non-transparent administrative and security policies across institutions.",
        "The total absence of high-speed internet connections between academic centers.",
        "The hardware at the time did not support CPU hyper-threading.",
        "Grid sites refused to share their local physical storage databases under any circumstances."
      ],
      "answer": 0,
      "explanation": "Grids suffered from highly fragmented, institutional policy barriers, lack of standardized APIs, and complex client certificate systems, whereas clouds offered unified, simple on-demand APIs."
    },
    {
      "id": 4,
      "question": "An application has a sequential (non-parallelizable) portion of 20%. According to Amdahl's Law, what is the maximum theoretical speedup of this application regardless of how many processors are added?",
      "options": [
        "2x",
        "4x",
        "5x",
        "10x",
        "Infinite speedup"
      ],
      "answer": 2,
      "explanation": "According to Amdahl's Law, Speedup = 1 / (S + (1-S)/N). As N approaches infinity, the limit is 1 / S. Here, S = 0.20, so 1 / 0.20 = 5x speedup."
    },
    {
      "id": 5,
      "question": "In parallel loop scheduling (e.g. dividing iterations among MPI processes), what constitutes 'loop overhead'?",
      "options": [
        "The time spent allocating local array indexes on a single thread.",
        "The replicated calculation of loop bounds, test for loop completion, and thread scheduling overhead on each participating processor.",
        "The network transfer delay of sending loop data to external databases.",
        "The compilation time required to parse the loop structure."
      ],
      "answer": 1,
      "explanation": "Dividing a loop among processors replicates the code logic for bounds calculations and completion tests on each node, adding serial execution overhead that increases with the number of processors."
    },
    {
      "id": 6,
      "question": "Which classification in Flynn's Taxonomy is commonly used in fault-tolerant systems (like spacecraft flight computers) where multiple independent processors execute different software verification routines on the exact same stream of sensor data?",
      "options": [
        "SISD (Single Instruction, Single Data)",
        "SIMD (Single Instruction, Multiple Data)",
        "MISD (Multiple Instruction, Single Data)",
        "MIMD (Multiple Instruction, Multiple Data)"
      ],
      "answer": 2,
      "explanation": "MISD involves running multiple different instructions (programs) on a single data stream (e.g. triple-modular redundant systems verifying sensor streams)."
    },
    {
      "id": 7,
      "question": "Which of the following describes two of the eight 'Erroneous Assumptions of Distributed Systems' identified by L. Peter Deutsch?",
      "options": [
        "Latency is zero; Bandwidth is infinite",
        "The network is homogeneous; Clocks are perfectly synchronized",
        "Transport cost is zero; The network is reliable",
        "All of the above"
      ],
      "answer": 3,
      "explanation": "All of these are part of the eight fallacies: network reliability, zero latency, infinite bandwidth, secure network, changing topology, single administrator, zero transport cost, and homogeneous network."
    },
    {
      "id": 8,
      "question": "On shared academic clusters like UniMelb's Spartan, what is the critical rule regarding the logon (head) nodes?",
      "options": [
        "Logon nodes must only be used to compile, edit scripts, and submit jobs to the partition queue; running intensive computations on them is forbidden.",
        "Logon nodes are reserved for running GPU parallel jobs only.",
        "You must run your main MPI runtime directly on the logon node shell using srun.",
        "Logon nodes automatically shutdown after 15 minutes of idle SSH connection."
      ],
      "answer": 0,
      "explanation": "Logon nodes are shared entry points. Running heavy computational processes directly on them degrades performance for all users and can crash the scheduling environment."
    },
    {
      "id": 9,
      "question": "What is the primary function of the General Parallel File System (GPFS) in a high-performance computing cluster like Spartan?",
      "options": [
        "To compile C++ MPI binaries on the fly.",
        "To provide high-speed, concurrent, shared file system access across thousands of distributed compute nodes.",
        "To manage local VM disk volumes in OpenStack.",
        "To automatically replicate and backup user datasets to public cloud object buckets."
      ],
      "answer": 1,
      "explanation": "GPFS allows all active worker nodes in the cluster to read and write to the same shared directory storage concurrently with high bandwidth."
    },
    {
      "id": 10,
      "question": "Why must a researcher estimate and request an accurate 'walltime' when submitting a job via SLURM sbatch?",
      "options": [
        "If the job runs longer than the requested walltime, SLURM terminates it instantly, but requesting too much time increases the wait time in the queue.",
        "SLURM bills users per second of requested walltime, regardless of when the job actually terminates.",
        "Walltime determines the CPU core architecture allocated to the job.",
        "Walltime limits the amount of virtual memory space the job can map."
      ],
      "answer": 0,
      "explanation": "SLURM fits jobs into queue slots based on their requested time. Overestimating walltime makes scheduling harder (longer queue wait), while underestimating kills the job mid-execution."
    },
    {
      "id": 11,
      "question": "In the OpenStack ecosystem, what is the difference between Authentication and Authorization as handled by Keystone?",
      "options": [
        "Keystone authenticates who you are, but authorization (determining what resources you can access) is governed by separate local component policy rules.",
        "Authentication is handled by Horizon, whereas Authorization is handled by Keystone.",
        "Authentication applies to networks (Neutron); Authorization applies to VMs (Nova).",
        "There is no difference; Keystone manages both in a single unified database lookup that cannot be custom configured."
      ],
      "answer": 0,
      "explanation": "Keystone acts as the identity provider (authentication). However, the specific permissions to perform operations are checked by local services (Nova, Neutron) against their policy files."
    },
    {
      "id": 12,
      "question": "What security role does the nova-conductor service perform in the OpenStack Nova compute architecture?",
      "options": [
        "It encrypts VM storage volumes in transit.",
        "It acts as a secure database proxy, preventing hypervisor nodes running nova-compute from making direct database write calls.",
        "It monitors hypervisor traffic for DDoS attacks.",
        "It coordinates Keystone tokens with the Horizon dashboard UI."
      ],
      "answer": 1,
      "explanation": "To prevent a compromised hypervisor node from corrupting the main OpenStack database, nova-conductor proxies all DB transactions for the compute nodes."
    },
    {
      "id": 13,
      "question": "Which OpenStack storage type matches a flat namespace where data objects are identified by unique keys, and accessed exclusively over API HTTP requests rather than standard directory mount points?",
      "options": [
        "Cinder (Block Storage)",
        "Swift (Object Storage)",
        "Manila (Shared Filesystem)",
        "Nova Ephemeral Storage"
      ],
      "answer": 1,
      "explanation": "Swift provides Object Storage, which is flat (no true directory tree) and exposes an HTTP REST API for reading/writing blobs of data."
    },
    {
      "id": 14,
      "question": "What is 'cloud bursting' in the context of Hybrid Cloud deployment models?",
      "options": [
        "A security breach where private data leaks into a public subnet.",
        "A configuration where an application runs in a private cloud but spawns instances in a public cloud when capacity limits are exceeded.",
        "The sudden de-provisioning of cloud instances due to billing failures.",
        "The automated replication of database shards across multiple public cloud zones."
      ],
      "answer": 1,
      "explanation": "Cloud bursting leverages public cloud instances dynamically to handle peak loads, reverting back to the private cloud once demand subsides."
    },
    {
      "id": 15,
      "question": "In the Linux kernel mechanisms underlying Docker container isolation, what is the difference between Namespaces and Control Groups (cgroups)?",
      "options": [
        "Namespaces restrict what a process can see (isolation of network, processes, mounts); cgroups restrict what a process can consume (CPU, memory, disk I/O limits).",
        "Namespaces manage directory filesystems; cgroups manage network bridge adapters.",
        "Namespaces are used by VMs; cgroups are used by containers.",
        "Namespaces enforce SSL encryption; cgroups schedule tasks in parallel."
      ],
      "answer": 0,
      "explanation": "Namespaces isolate resources (PID, Net, Mount, IPC, UTS, User namespaces). cgroups enforce resource quotas (CPU cycles, memory limits, network traffic)."
    },
    {
      "id": 16,
      "question": "Why is it possible for multiple Docker containers to run services on the exact same port (e.g. port 80) on the same host system under 'bridge' network mode?",
      "options": [
        "Because bridge mode bypasses the TCP/IP stack.",
        "Because each container is allocated its own private IP address within a virtual bridge network, isolating its port space from the host.",
        "Because Docker automatically translates all bridge connections into UDP sockets.",
        "Because the host OS kernel redirects traffic based on container names."
      ],
      "answer": 1,
      "explanation": "In bridge mode, each container has its own network namespace and IP. Ports are internal to the container until mapped to a host port (e.g. host port 8080 mapping to container port 80)."
    },
    {
      "id": 17,
      "question": "In a Docker container, why should a custom entrypoint shell script end with the exec \"$@\" command?",
      "options": [
        "To spawn the script process in a detached background thread.",
        "To replace the shell wrapper process with the target application process, ensuring it runs as PID 1 and receives OS signals like SIGTERM.",
        "To clear the container environment variables before execution.",
        "To mount the local volume directories."
      ],
      "answer": 1,
      "explanation": "exec replaces the active shell process with the application process. This makes the application PID 1, allowing it to handle shutdown signals for graceful termination."
    },
    {
      "id": 18,
      "question": "What is the primary objective of the Continuous Integration (CI) stage in a software pipeline?",
      "options": [
        "To automatically compile code and run automated unit/integration tests on every commit to catch errors early.",
        "To deploy the compiled application code to production servers.",
        "To check the cloud provider billing constraints automatically.",
        "To register domains and host web pages."
      ],
      "answer": 0,
      "explanation": "CI focus is on automated verification (building and testing) of code changes to verify stability before integrating into the main branch."
    },
    {
      "id": 19,
      "question": "Under Kubernetes conventions, what resources do containers running within the exact same Pod share?",
      "options": [
        "The host OS kernel filesystem exclusively.",
        "The network stack (same IP address and port space) and defined persistent storage volumes.",
        "The physical CPU cores dedicated to the pod.",
        "Nothing; containers in a pod are fully isolated from each other."
      ],
      "answer": 1,
      "explanation": "Containers in a Pod share the network namespace (localhost communications) and can share volumes. However, they maintain separate container namespaces otherwise."
    },
    {
      "id": 20,
      "question": "In Kubernetes, what is the meaning of 'idempotency' in declarative state management?",
      "options": [
        "Re-applying the same manifest YAML file multiple times results in the same desired system state without causing errors or unexpected state shifts.",
        "Spawning duplicate pods on the same node to ensure consistency.",
        "The capacity to scale workloads to zero when idle.",
        "The encryption of YAML parameters before sending them to the API."
      ],
      "answer": 0,
      "explanation": "Declarative configurations define the desired state. Applying it repeatedly is safe because K8s only modifies components if the current state deviates from the specification."
    },
    {
      "id": 21,
      "question": "A developer configures a Kubernetes Persistent Volume Claim (PVC) with an access mode of ReadWriteOnce. What does this restrict?",
      "options": [
        "The volume can only be mounted as read-only by multiple pods.",
        "The volume can be mounted as read-write by a single node at any one time.",
        "The volume can be written to exactly once, after which it becomes read-only.",
        "The volume can only be mounted by one specific container within a pod."
      ],
      "answer": 1,
      "explanation": "ReadWriteOnce (RWO) specifies that the volume can be mounted as read-write by a single node. Multiple pods on the same node can access it, but pods on different nodes cannot."
    },
    {
      "id": 22,
      "question": "In RESTful API design, under what condition is the HTTP PUT method preferred over HTTP POST for resource creation?",
      "options": [
        "When the client knows and specifies the exact URL location of the resource to be created.",
        "When the operation must not be idempotent.",
        "When the server must generate a unique database ID for the resource.",
        "When the resource payload contains binary stream files."
      ],
      "answer": 0,
      "explanation": "PUT is idempotent and is used when the client specifies the target URL. POST is non-idempotent and used when the server determines the resource path."
    },
    {
      "id": 23,
      "question": "Which of the following defines a 'pure' function in Serverless Function-as-a-Service (FaaS) computing?",
      "options": [
        "A function that has no side effects and is completely stateless, meaning its output is determined solely by its inputs.",
        "A function written in native C/C++ without any external package imports.",
        "A function that does not trigger any network connections.",
        "A function that runs in under 10 milliseconds."
      ],
      "answer": 0,
      "explanation": "Pure functions do not alter global state or databases (no side effects) and do not store internal states between executions (stateless), ensuring predictable parallel execution."
    },
    {
      "id": 24,
      "question": "In the Fission serverless framework, how do the execution strategies PoolManager and NewDeploy differ?",
      "options": [
        "PoolManager is for private subnets; NewDeploy is for public subnets.",
        "PoolManager uses warm generic containers to minimize cold start latency; NewDeploy creates dedicated pods that scale dynamically using HPA.",
        "PoolManager runs jobs sequentially; NewDeploy runs them in parallel.",
        "None of the above."
      ],
      "answer": 1,
      "explanation": "PoolManager keeps generic pods warmed up for fast start times but has poor scaling capacity. NewDeploy provisions custom deployments that autoscale but suffer from cold starts."
    },
    {
      "id": 25,
      "question": "Why does an asynchronous serverless workflow utilize WebSockets to return execution results to a client?",
      "options": [
        "To bypass HTTP port firewalls.",
        "To allow the server to push results back to the client immediately upon completion without the client polling the endpoint or keeping a blocking HTTP connection open.",
        "To compress the output JSON payload by 50%.",
        "To encrypt the database keys."
      ],
      "answer": 1,
      "explanation": "The client triggers a task (getting a 202 Accepted) and opens a WebSocket. When the background FaaS function completes, the server pushes the response back over the open WebSocket."
    },
    {
      "id": 26,
      "question": "When using the Fission CLI declarative specifications, what does the command fission specs apply --delete accomplish?",
      "options": [
        "It deletes all local YAML files from the workspace directory.",
        "It applies the local specifications and deletes any existing resources in the cluster that are not defined in the local specs directory (cleaning drift).",
        "It deletes the Fission environment deployments.",
        "It runs the unit tests and deletes test coverage files."
      ],
      "answer": 1,
      "explanation": "The --delete flag synchronizes the cluster state with the local specs files, removing any old triggers, routes, or functions that were removed from the local spec files."
    },
    {
      "id": 27,
      "question": "Under the CAP theorem, why does a CouchDB database cluster choose to operate as an AP system, whereas a federated PostgreSQL database (using two-phase commit) operates as a CA system?",
      "options": [
        "CouchDB aborts transactions during network partitions, while PostgreSQL allows write operations to proceed.",
        "CouchDB allows writes to any node during partitions (reconciling conflicts later), while PostgreSQL locks tables and rollbacks writes if nodes cannot achieve consensus.",
        "PostgreSQL does not support replication across network subnets.",
        "CouchDB does not support range queries."
      ],
      "answer": 1,
      "explanation": "CouchDB uses multi-version concurrency control (MVCC) to accept writes on partitions, preferring availability. Two-phase commit PostgreSQL prioritizes consistency, blocking writes if a node is offline."
    },
    {
      "id": 28,
      "question": "In consensus algorithms like Paxos or Raft, why is a 'quorum' (majority of nodes) required to commit database changes?",
      "options": [
        "To encrypt the database transactions.",
        "To ensure that if a network split occurs, only one partition can progress, preventing split-brain conflicts and divergent histories.",
        "To compress index schemas across nodes.",
        "To balance CPU cycle allocation."
      ],
      "answer": 1,
      "explanation": "A quorum requires (N/2)+1 nodes. Since two partitioned groups of nodes cannot both contain a majority of the same set, only the partition with the quorum can accept writes, keeping history unified."
    },
    {
      "id": 29,
      "question": "How does Elasticsearch implement optimistic concurrency control (OCC) to prevent concurrent updates from overwriting each other without database locks?",
      "options": [
        "By rejecting all PUT requests that arrive within 10 milliseconds of each other.",
        "By requiring update requests to match the document's current _seq_no and _primary_term, returning a 409 Conflict if mismatched.",
        "By locking the index files on disk.",
        "By routing all writes through a single SQL worker node."
      ],
      "answer": 1,
      "explanation": "OCC in ES uses sequence numbers (_seq_no) and primary terms (_primary_term) to track changes. If a client attempts an update with stale metadata, ES throws a 409 Conflict."
    },
    {
      "id": 30,
      "question": "In Elasticsearch query options, what is the primary use case of the Event Query Language (EQL)?",
      "options": [
        "To perform high-speed vector searches for ML models.",
        "To search and identify temporal relationships and sequential event sequences (e.g. event A followed by event B within 1 minute) in log data.",
        "To translate SQL statements into Query DSL.",
        "To manage shard mapping across master nodes."
      ],
      "answer": 1,
      "explanation": "EQL is specialized for log/security event analysis, allowing sequence matching and temporal constraints (like maxspan=1m) across events."
    },
    {
      "id": 31,
      "question": "According to the Popek-Goldberg Virtualization Theorem, what hardware instruction property is required for a CPU architecture to be virtualizable?",
      "options": [
        "All privileged instructions must be a subset of the sensitive instructions.",
        "All sensitive instructions (those that expose or modify hardware configs) must be a strict subset of privileged instructions (those that hardware-trap in user space).",
        "The CPU must execute instructions in a single-instruction-multiple-data stream.",
        "The hypervisor must run in hardware ring 3."
      ],
      "answer": 1,
      "explanation": "If a sensitive instruction runs in user space without trapping (generating an error/exception), the VMM cannot intercept it to simulate the virtualized state, rendering virtualization impossible."
    },
    {
      "id": 32,
      "question": "What is the primary architectural difference between Type-1 (Bare Metal) and Type-2 (Hosted) hypervisors?",
      "options": [
        "Type-1 hypervisors execute on top of a host operating system, whereas Type-2 hypervisors execute directly on the bare physical hardware.",
        "Type-1 hypervisors execute directly on the bare physical hardware, whereas Type-2 hypervisors run inside a conventional host operating system.",
        "Type-1 hypervisors do not support Guest OS paging, whereas Type-2 hypervisors support shadow page tables.",
        "Type-1 hypervisors only host containers, whereas Type-2 hypervisors only host VMs."
      ],
      "answer": 1,
      "explanation": "Type-1 hypervisors (like VMware ESXi) act as the primary operating layer on physical hardware. Type-2 hypervisors (like VirtualBox) run as applications inside a host OS."
    },
    {
      "id": 33,
      "question": "Why does para-virtualization (e.g., traditional Xen) require modifying the guest operating system's kernel code?",
      "options": [
        "To bypass security groups in the cloud.",
        "To replace non-virtualizable sensitive instructions with explicit hypercalls that communicate directly with the hypervisor.",
        "To automate container creation inside the VM.",
        "To encrypt the page files."
      ],
      "answer": 1,
      "explanation": "In para-virtualization, the guest OS is modified to be aware it is running in a VM, calling the VMM directly via 'hypercalls' instead of executing hardware trapping instructions."
    },
    {
      "id": 34,
      "question": "In cloud security, which of the 'Four A's' is defined as the process of verifying a user's digital identity?",
      "options": [
        "Authentication",
        "Authorization",
        "Audit",
        "Accounting"
      ],
      "answer": 0,
      "explanation": "Authentication verifies the identity claims of the user (e.g., via passwords, tokens, keys). Authorization manages access policies. Audit tracks actions, and Accounting measures resource usage."
    },
    {
      "id": 35,
      "question": "How does a client verify that a public key certificate received from a cloud service belongs to the declared owner and has not been forged?",
      "options": [
        "By verifying the Certification Authority's digital signature on the certificate using the CA's pre-distributed public key.",
        "By querying the OpenStack Horizon metadata service.",
        "By checking the SSH keys directory on their local machine.",
        "By running a database transaction checks."
      ],
      "answer": 0,
      "explanation": "The Certification Authority (CA) signs the certificate with its private key. Clients verify this signature using the trusted CA public key pre-loaded in browser root stores."
    }
  ],
  "shortAnswers": [
    {
      "id": 1,
      "question": "List 5 of the 8 erroneous assumptions of distributed systems. For each, describe a design mechanism developers can use to mitigate the failure. [5]",
      "maxMarks": 5,
      "sampleAnswer": "1. **The network is reliable**: Use retries, exponential back-off, and circuit breaker patterns to handle connection drops gracefully.\n2. **Latency is zero**: Cache frequently accessed data locally and minimize synchronous RPC calls using message queues.\n3. **Bandwidth is infinite**: Compress data payloads (e.g. gzipped JSON) and fetch only required columns or paginated records.\n4. **The network is secure**: Enforce Transport Layer Security (TLS) for all data in transit and run integrity checks on endpoints.\n5. **Topology does not change**: Implement service discovery registries (like Kubernetes DNS or Consul) rather than hardcoding IP addresses."
    },
    {
      "id": 2,
      "question": "Explain the interactions between `nova-api`, `nova-scheduler`, `nova-conductor`, and `nova-compute` when a user requests to launch a new virtual machine instance in OpenStack. [5]",
      "maxMarks": 5,
      "sampleAnswer": "1. **nova-api**: Receives the user's request (e.g., launch an instance with a specific flavor and image), validates the credentials via Keystone, writes the initial state to the database, and publishes a message to the AMQP bus.\n2. **nova-scheduler**: Listens to the queue, filters hypervisor hosts based on constraints (RAM, CPU, disk), selects the optimal physical node, and publishes the schedule decision to the message bus.\n3. **nova-conductor**: Receives request updates and interacts with the database. It acts as a database proxy for the compute nodes, avoiding direct DB writes from hypervisors for security.\n4. **nova-compute**: Runs on the selected hypervisor host, reads the message to build the VM, interacts with `libvirt` (connecting KVM/QEMU) to launch the guest OS, and reports status updates back through nova-conductor to the DB."
    },
    {
      "id": 3,
      "question": "Why does a process inside a Docker container need to run as PID 1 to receive operating system signals, and how does the `exec \"$@\"` pattern inside an entrypoint script achieve this? [5]",
      "maxMarks": 5,
      "sampleAnswer": "1. **PID 1 Signal Rule**: In Unix, PID 1 (init process) is the ancestor of all processes. By default, Linux does not apply default signal handlers (like SIGTERM termination) to PID 1. If an application is not running as PID 1, it will not receive the signals sent by `docker stop` (which only targets PID 1).\n2. **Shell Script Issue**: If a container executes a shell script wrapper (e.g., `entrypoint.sh`), the shell itself runs as PID 1. The actual application runs as a child process. The shell script does not forward signals to its children, causing the app to ignore SIGTERM and be killed abruptly via SIGKILL after 10 seconds.\n3. **exec Mechanism**: The `exec` shell built-in replaces the shell process entirely with the application binary execution. The application inherits PID 1, allowing it to receive SIGTERM/SIGINT signals directly and shut down gracefully (flushing caches, closing connections)."
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
      "question": "When aggregating multi-institutional data in a cloud platform, what does data heterogeneity require from developers?",
      "options": [
        "Writing custom translation/conversion scripts to parse and map distinct schemas and formats into a single, unified database schema.",
        "Renting identical hardware specs across all participating centers.",
        "Refusing data uploads from any operating system other than Ubuntu Linux.",
        "Compressing all records into base64 strings."
      ],
      "answer": 0,
      "explanation": "Data heterogeneity means different organizations store data in different schemas, encodings, or formats. Developers must write parsing pipelines to standardize these into a common format for querying."
    },
    {
      "id": 2,
      "question": "Which of the following cloud models is optimized specifically for storage access, providing services like Dropbox or Amazon S3, rather than compute virtualization?",
      "options": [
        "Compute Clouds",
        "Data Clouds",
        "Application Clouds",
        "Private clouds"
      ],
      "answer": 1,
      "explanation": "Data clouds focus on distributed data storage, query access, and file sharing (e.g., AWS S3, iCloud), whereas compute clouds focus on raw processing units (e.g., AWS EC2)."
    },
    {
      "id": 3,
      "question": "Under the NIST definition, how does 'Measured Service' benefit cloud resource optimization?",
      "options": [
        "By automatically metering resource usage at an abstraction level appropriate to the service type, enabling transparent billing and resource control.",
        "By limiting all user accounts to a maximum of 4 vCPUs.",
        "By enforcing a fixed-rate subscription model that cannot be altered.",
        "By restricting network speeds based on geographic location."
      ],
      "answer": 0,
      "explanation": "Measured service automatically monitors, controls, and reports resource utilization (e.g., storage bytes, CPU hours, bandwidth usage) for both providers and consumers."
    },
    {
      "id": 4,
      "question": "How does Gustafson-Barsis's Law differ from Amdahl's Law regarding parallel speedup?",
      "options": [
        "Amdahl's Law assumes a fixed problem size, whereas Gustafson-Barsis's Law assumes the problem size scales with the number of processors.",
        "Amdahl's Law assumes sequential code is zero, whereas Gustafson-Barsis's Law assumes it is infinite.",
        "Amdahl's Law applies to HPC, whereas Gustafson-Barsis's Law applies only to HTC.",
        "None of the above."
      ],
      "answer": 0,
      "explanation": "Amdahl's Law calculates speedup for a fixed problem size (showing limits of parallelism). Gustafson-Barsis's Law assumes that as processing power scales, users run larger problem sizes, showing that execution time can remain constant."
    },
    {
      "id": 5,
      "question": "Which of the following describes 'explicit parallelization' in code design?",
      "options": [
        "When the compiler automatically detects loop independence and distributes execution.",
        "When the developer manually manages task decomposition, schedules processes, and configures message-passing protocols (e.g. MPI).",
        "When the operating system time-slices threads on a single core.",
        "When a relational database runs an index scan."
      ],
      "answer": 1,
      "explanation": "Explicit parallelization relies on the programmer to identify parallel regions, decompose tasks, and manage communication, which is complex but highly tailorable."
    },
    {
      "id": 6,
      "question": "In multi-core CPU architectures, what is the 'cache coherence problem'?",
      "options": [
        "When one core updates a memory location in its local cache, and other cores read stale values from their own local caches.",
        "When L3 cache runs out of physical memory space.",
        "When the CPU experiences an out-of-order execution stall.",
        "When cache access conflicts lock the PCI bus."
      ],
      "answer": 0,
      "explanation": "Cache coherence ensures that updates made by one core are propagated/invalidated in other cores' private caches (L1/L2), so all cores maintain a consistent view of main memory."
    },
    {
      "id": 7,
      "question": "What is the difference between a deadlock and a livelock state in concurrent software execution?",
      "options": [
        "In deadlock, processes are blocked waiting for each other; in livelock, processes actively change their state in response to each other, but make no functional progress.",
        "Deadlocks only occur in VMs; livelocks only occur in containers.",
        "In deadlock, CPU usage is 100%; in livelock, CPU usage is 0%.",
        "Deadlocks are resolved by the kernel; livelocks cannot be resolved."
      ],
      "answer": 0,
      "explanation": "A deadlock is a static block (processes are frozen waiting). A livelock is a dynamic block (processes are actively executing state changes but are stuck in an unproductive cycle)."
    },
    {
      "id": 8,
      "question": "What computational task does the LINPACK benchmark solve to measure the FLOPS (Floating-Point Operations Per Second) capacity of a supercomputer?",
      "options": [
        "Dense systems of linear equations (dense n x n matrices).",
        "Recursive fibonacci sequence generation.",
        "Index searches over unstructured text databases.",
        "Network throughput latency matrices."
      ],
      "answer": 0,
      "explanation": "The LINPACK benchmark measures how fast a system solves dense linear equations, which is the standard metric used to rank systems on the Top500 supercomputer list."
    },
    {
      "id": 9,
      "question": "What is the primary role of a resource manager / batch scheduler (like SLURM or Torque) in a cluster environment?",
      "options": [
        "To compile MPI source code into native binary instructions.",
        "To match batch job resource requests (CPU, memory, walltime) with available resources on worker nodes and schedule execution.",
        "To manage SSH key pairs for client logins.",
        "To balance HTTP network connections to public websites."
      ],
      "answer": 1,
      "explanation": "Schedulers monitor node capacities and queue requests, allocating jobs to appropriate nodes to optimize cluster utilization and prevent system overload."
    },
    {
      "id": 10,
      "question": "In a SLURM batch script, what does the option #SBATCH --nodes=2 specify?",
      "options": [
        "That the job should allocate resources across exactly two physical server hosts.",
        "That the job should launch exactly two concurrent threads.",
        "That the job should use two separate GPFS partitions.",
        "That the job should wait in queue for a maximum of two hours."
      ],
      "answer": 0,
      "explanation": "--nodes (or -N) specifies the number of physical nodes/hosts that the SLURM scheduler should allocate for this job's tasks."
    },
    {
      "id": 11,
      "question": "Which OpenStack Keystone transaction represents an 'Authorization' check?",
      "options": [
        "Verifying a user's password and returning a scoped API token.",
        "Checking if a user's token has the role permissions required to launch a VM flavor on Nova.",
        "Signing a public certificate request.",
        "Routing network packets through a Neutron security group."
      ],
      "answer": 1,
      "explanation": "Authentication validates credentials (passwords/keys). Authorization checks whether the authenticated user has the necessary roles/policies to execute a specific action."
    },
    {
      "id": 12,
      "question": "What is a key technical characteristic of OpenStack Cinder block storage compared to object storage?",
      "options": [
        "It stores data in fixed-size blocks accessed via logical block addressing (LBA), behaving like a physical hard drive mounted to the VM.",
        "It organizes data into a flat directory namespace without block addresses.",
        "It is accessed exclusively via HTTP GET/PUT methods.",
        "It cannot be formatted with a standard filesystem (like ext4)."
      ],
      "answer": 0,
      "explanation": "Block storage (Cinder) acts as raw disk volumes (SAN/EBS), supporting low-latency read/writes and standard filesystems, unlike API-driven flat Object storage (Swift)."
    },
    {
      "id": 13,
      "question": "Why does Swift object storage tolerate scale-out storage sizes (Petabytes) more easily than block storage?",
      "options": [
        "It stores files in a flat namespace of objects and metadata, avoiding the locking and directory tree lookup overhead of hierarchical filesystems.",
        "It forces all data to be stored directly in CPU cache memory.",
        "It does not replicate data across nodes.",
        "It runs exclusively on bare-metal database hypervisors."
      ],
      "answer": 0,
      "explanation": "By using flat namespaces and unique identifiers, object storage scales horizontally without complex filesystem directory consistency and lock management."
    },
    {
      "id": 14,
      "question": "When designing a Hybrid cloud, why is 'PCI-DSS' compliance a major design consideration?",
      "options": [
        "Because it restricts the compiler from optimizing MPI code.",
        "Because it regulates security and encryption standards for handling credit card data, limiting what customer information can be burst into public subnets.",
        "Because it limits the number of containers running on virtual hosts.",
        "None of the above."
      ],
      "answer": 1,
      "explanation": "Payment Card Industry Data Security Standard (PCI-DSS) sets strict rules for handling payment cards. Sharing this data on public clouds requires rigorous auditing and compliance."
    },
    {
      "id": 15,
      "question": "In Docker data persistence, what is the primary difference between a Docker Volume and a Bind Mount?",
      "options": [
        "Docker volumes are managed fully by the Docker engine within isolated directories, whereas bind mounts mount any directory path on the host machine directly.",
        "Volumes are read-only; bind mounts are read-write.",
        "Volumes only work on Windows; bind mounts only work on Linux.",
        "Volumes write data to memory; bind mounts write data to disk."
      ],
      "answer": 0,
      "explanation": "Docker volumes are directory areas managed by the Docker engine (/var/lib/docker/volumes), decoupling files from host directory structures and path dependencies."
    },
    {
      "id": 16,
      "question": "What do container image scanners (like Docker Scout or Grype) check for when scanning a base image?",
      "options": [
        "CPU thermal limits.",
        "Known security vulnerabilities and bugs (CVEs) present in the installed operating system packages and libraries.",
        "The execution speed of Python scripts.",
        "The exact syntax formatting of the docker-compose.yml file."
      ],
      "answer": 1,
      "explanation": "Scanners analyze image layers against databases of Common Vulnerabilities and Exposures (CVEs) to flag outdated libraries with security risks."
    },
    {
      "id": 17,
      "question": "In CI/CD code quality scanning, what defines a 'Security Hotspot' as opposed to a 'Code Smell'?",
      "options": [
        "A security hotspot is a confirmed active vulnerability; a code smell is a compiler error.",
        "A security hotspot is code that requires manual review to see if it poses a security risk; a code smell is a maintainability issue that indicates poorly structured code.",
        "Security hotspots only occur in Python; code smells only occur in C++.",
        "None of the above."
      ],
      "answer": 1,
      "explanation": "Security hotspots are code sections that are suspicious (like hardcoded keys or loose permissions) but require verification. Code smells are indicators of bad design or complexity."
    },
    {
      "id": 18,
      "question": "What is the purpose of a Bastion Host (Jump Host) in a cloud network architecture?",
      "options": [
        "To act as a load balancer for public web servers.",
        "To serve as a single, highly-hardened entry point to establish SSH tunnels into private instances that lack public IP addresses.",
        "To compile container images in a secure sandbox.",
        "To store database backup zip files."
      ],
      "answer": 1,
      "explanation": "By routing SSH connections through a secure Bastion Host (ssh -J), developers can access private subnet virtual machines without exposing those VMs to the open web."
    },
    {
      "id": 19,
      "question": "In Kubernetes, what is the main security reason to use a 'Secret' resource instead of a 'ConfigMap' for application parameters?",
      "options": [
        "Secrets are stored as base64-encoded strings and can integrate with cluster encryption-at-rest systems, whereas ConfigMaps are stored in plain text.",
        "Secrets are compiled binaries, whereas ConfigMaps are text.",
        "Secrets can only be mounted by one namespace.",
        "Secrets automatically block external HTTP ingresses."
      ],
      "answer": 0,
      "explanation": "ConfigMaps store non-sensitive config in plain text. Secrets hold sensitive keys (encoded in base64) and can be configured with strict access control and backend encryption."
    },
    {
      "id": 20,
      "question": "What is the difference between Minikube and Helm in the Kubernetes ecosystem?",
      "options": [
        "Minikube runs a single-node local Kubernetes cluster for testing; Helm is a package manager used to install pre-configured applications into a cluster.",
        "Minikube manages virtual networks; Helm manages container storage disks.",
        "Minikube is an ingress controller; Helm is an authentication proxy.",
        "They are identical tools managed by different companies."
      ],
      "answer": 0,
      "explanation": "Minikube provides a local sandbox cluster (e.g. running inside a VM). Helm packages Kubernetes manifests into 'charts' for easy application deployment and updates."
    },
    {
      "id": 21,
      "question": "In the OpenStack Magnum container orchestration service, what is the role of a 'Cluster Template'?",
      "options": [
        "To define the cloud resource blueprint (VM flavors, master/worker node counts, network setups) used to provision a Kubernetes cluster.",
        "To design the CSS styling of the Horizon dashboard.",
        "To compile Dockerfiles inside hypervisors.",
        "To automatically scale pod counts inside a namespace."
      ],
      "answer": 0,
      "explanation": "Magnum Cluster Templates specify the template constraints (image, keypair, network driver, flavor) used to instantiate COE clusters on OpenStack infrastructure."
    },
    {
      "id": 22,
      "question": "What is a key difference in communication philosophy between Remote Procedure Call (RPC) APIs and Representational State Transfer (REST) APIs?",
      "options": [
        "RPC focuses on executing remote actions/procedures (verb-oriented), whereas REST focuses on transferring representations of resources identified by URLs (noun-oriented).",
        "RPC runs over HTTP/2, whereas REST only runs over UDP sockets.",
        "RPC uses JSON, whereas REST exclusively uses XML.",
        "RPC is stateful, whereas REST is stateless."
      ],
      "answer": 0,
      "explanation": "RPC behaves like executing functions remotely (e.g. getUser()). REST manages resources as entities (e.g. GET /users/{id}) and supports navigation via links."
    },
    {
      "id": 23,
      "question": "In the Fission serverless framework, which timeout parameter controls how long a specialized function pod remains running in memory after execution before being recycled?",
      "options": [
        "--specializationtimeout",
        "--fntimeout",
        "--idletimeout",
        "--cooltimeout"
      ],
      "answer": 2,
      "explanation": "--idletimeout configures how long an idle specialized function pod will sit in the pool waiting for new requests before it is deleted to free RAM."
    },
    {
      "id": 24,
      "question": "In FaaS application design, why is Test-Driven Development (TDD) and testing in tiers (Unit, Integration, E2E) highly recommended?",
      "options": [
        "Because debugging distributed, asynchronous serverless functions post-deployment is highly complex, and testing prevents integration and credential leakage errors early.",
        "Because testing code increases the execution speed of FaaS functions.",
        "Because Fission refuses to build packages that lack 100% test coverage.",
        "None of the above."
      ],
      "answer": 0,
      "explanation": "Serverless architectures are highly distributed. Writing tests early and testing in tiers helps isolate failures (e.g., separating database connection errors from logical code bugs)."
    },
    {
      "id": 25,
      "question": "Which of the following is considered a database anti-pattern when designing serverless FaaS functions?",
      "options": [
        "Failing to isolate testing and production databases, risking live data corruption during test runs.",
        "Mapping highly relational ACID schemas onto NoSQL document-oriented databases like Elasticsearch.",
        "Exposing administrative routes (such as /wipedatabase) to the public web interface.",
        "All of the above."
      ],
      "answer": 3,
      "explanation": "All listed practices are dangerous anti-patterns: lack of DB isolation, schema mismatch (NoSQL relations), and exposed admin/wipe endpoints."
    },
    {
      "id": 26,
      "question": "When creating a Fission timer trigger (cron scheduled job), what operational constraint must be respected?",
      "options": [
        "The cron timer interval must be longer than the function execution runtime to prevent infinite pod accumulation and OOM failures.",
        "The cron trigger must only be scheduled at midnight.",
        "The timer must be attached to a stateful pod.",
        "None of the above."
      ],
      "answer": 0,
      "explanation": "If a function takes 2 minutes to run, but is triggered every 1 minute, the runner will continuously spawn pods, exhausting cluster memory."
    },
    {
      "id": 27,
      "question": "In the 'Four Vs' of Big Data, what is the difference between Variety and Veracity?",
      "options": [
        "Variety refers to the structural diversity of the data (JSON, XML, SQL, binary); Veracity refers to the trustworthiness, accuracy, and provenance of the data.",
        "Variety refers to data growth rate; Veracity refers to processing speeds.",
        "Variety is measured in GBs; Veracity is measured in FLOPS.",
        "Variety applies to relational databases; Veracity applies to NoSQL."
      ],
      "answer": 0,
      "explanation": "Variety describes structural complexity and formats. Veracity describes data quality, noise level, and reliability of the data source."
    },
    {
      "id": 28,
      "question": "In an Elasticsearch cluster, what does a yellow index health status signify?",
      "options": [
        "All primary shards and replica shards are active and fully allocated.",
        "All primary shards are active, but one or more replica shards are unallocated (e.g. because there are no other nodes to host them).",
        "One or more primary shards are missing, causing active data loss.",
        "The master node is currently holding an election."
      ],
      "answer": 1,
      "explanation": "Yellow status means primary shards are online (reads/writes work), but replicas are offline (no redundancy). Red status means at least one primary shard is offline, causing data loss."
    },
    {
      "id": 29,
      "question": "Why is cursor-based pagination preferred over offset-based pagination (LIMIT / OFFSET) when retrieving very large datasets from distributed databases?",
      "options": [
        "Because offset-based pagination requires the database to scan and count through all preceding rows, causing severe performance degradation at high page numbers.",
        "Because offset pagination causes database locks.",
        "Because cursors are permanently stored in database memory.",
        "Because cursors automatically encrypt records."
      ],
      "answer": 0,
      "explanation": "Offset pagination scans all records from the start. Cursor pagination uses a marker pointer (e.g. a timestamp/ID threshold) to skip directly to the next page, running in constant time."
    },
    {
      "id": 30,
      "question": "What algorithm does Elasticsearch commonly use to perform high-speed approximate nearest neighbor (kNN) vector searches for Retrieval-Augmented Generation (RAG)?",
      "options": [
        "Hierarchical Navigable Small World (HNSW)",
        "LINPACK Matrix Inversion",
        "Amdahl's Loop Partitioning",
        "Paxos Consensus"
      ],
      "answer": 0,
      "explanation": "HNSW is an efficient graph-based algorithm for vector search, enabling fast approximate nearest neighbor lookups in high-dimensional spaces."
    },
    {
      "id": 31,
      "question": "In virtual machine monitors, what is the difference between binary translation and hardware-assisted virtualization?",
      "options": [
        "Binary translation intercepts and replaces sensitive instructions at runtime via software; hardware-assisted virtualization utilizes dedicated CPU instruction extensions (e.g. Intel VT-x) to trap sensitive calls automatically.",
        "Binary translation is Type-1; hardware-assisted is Type-2.",
        "Binary translation requires modifying the guest kernel; hardware-assisted does not.",
        "Binary translation is only for containers; hardware-assisted is only for VMs."
      ],
      "answer": 0,
      "explanation": "Binary translation is a software-only approach that rewrites code on the fly. Hardware virtualization leverages processor extensions to run guest code directly and trap privileged calls."
    },
    {
      "id": 32,
      "question": "Under virtualization theory, what is the 'Fidelity' property of a Virtual Machine Monitor (VMM)?",
      "options": [
        "That guest software runs identically on the VMM as it would on physical hardware (except for minor physical timing differences).",
        "That guest CPU instructions run without VMM intervention 99% of the time.",
        "That the hypervisor encrypts the filesystem keys.",
        "That the VMM automatically scales memory size."
      ],
      "answer": 0,
      "explanation": "Fidelity ensures that the virtual environment behaves exactly like physical hardware, maintaining identical software output and state transitions."
    },
    {
      "id": 33,
      "question": "In an AWS VPC architecture, how do resources in a private subnet access the internet (e.g. for package updates) without exposing themselves to incoming internet connections?",
      "options": [
        "By routing outbound traffic through a NAT Gateway located in a public subnet.",
        "By assigning floating Elastic IP addresses to every private instance.",
        "By enabling SSH port forwarding on the master node.",
        "Through an direct Internet Gateway attached to the private subnet."
      ],
      "answer": 0,
      "explanation": "NAT Gateways translate private IP requests to a public IP for outgoing connections, allowing private instances to fetch resources while blocking direct incoming traffic."
    },
    {
      "id": 34,
      "question": "In multi-cloud environments, what is a key security challenge when implementing Single Sign-On (SSO) across different cloud providers?",
      "options": [
        "Establishing mutual cryptographic trust relationships and federated identities between separate identity providers (CAs) and resources without unified accounts.",
        "Syncing system clocks across providers.",
        "Managing Cinder volume blocks.",
        "None of the above."
      ],
      "answer": 0,
      "explanation": "SSO federation requires distinct organizations/clouds to trust each other's authentication tokens, which is politically and technically difficult without centralized authorities."
    },
    {
      "id": 35,
      "question": "In commercial cloud billing models (like AWS), why is data migration or deletion often described as an unexpected cost bottleneck?",
      "options": [
        "Because cloud providers charge significant egress bandwidth fees to retrieve data out of the cloud, and data deletion operations can incur high metadata index updates.",
        "Because databases charge per deleted record.",
        "Because deletion requires running a Type-1 hypervisor.",
        "Because public clouds restrict data deletion to once per year."
      ],
      "answer": 0,
      "explanation": "Ingress (bringing data in) is usually free, but Egress (moving data out of the cloud network) is highly billed, locking clients into the provider's ecosystem."
    }
  ],
  "shortAnswers": [
    {
      "id": 1,
      "question": "Describe the three options under the CAP theorem (Consistency, Availability, Partition Tolerance). For each option, name one database technology that matches this model and explain its behavior when a network partition occurs. [5]",
      "maxMarks": 5,
      "sampleAnswer": "1. **CA (Consistency & Availability)**: Example: Federated PostgreSQL with Two-Phase Commit. In a network partition, it refuses write operations to ensure all nodes maintain an identical state, sacrificing partition tolerance (P).\n2. **CP (Consistency & Partition Tolerance)**: Example: Elasticsearch (or Raft/Paxos-based DBs). If a partition occurs, it allows updates only on the side containing the master/quorum majority, keeping consistency. The isolated side rejects requests, sacrificing availability (A) for those clients.\n3. **AP (Availability & Partition Tolerance)**: Example: CouchDB. If partitioned, both sides continue accepting read/write requests, maintaining availability. This creates conflicts (divergent histories), which must be resolved asynchronously later, sacrificing consistency (C)."
    },
    {
      "id": 2,
      "question": "Why does Kubernetes separate the concepts of a Persistent Volume (PV) and a Persistent Volume Claim (PVC), and how does this support the principles of Declarative Application Management? [5]",
      "maxMarks": 5,
      "sampleAnswer": "1. **Decoupling Roles**: PV represents the actual physical or cloud storage resource (e.g. AWS EBS or NFS share) provisioned by a cluster administrator. PVC is a request for storage by a developer specifying requirements (size, read/write once vs many).\n2. **Abstraction**: Developers do not need to know the underlying storage technology. They declare their storage requirements abstractly in a PVC YAML. K8s automatically binds the claim to an appropriate PV.\n3. **Declarative Support**: This supports portability and infrastructure as code. The same application deployment manifest can run on AWS, OpenStack, or local Minikube because the PVC details are abstract. The local cluster controller resolves the PV provisioning details transparently."
    },
    {
      "id": 3,
      "question": "Compare Type-1 (Bare Metal) and Type-2 (Hosted) hypervisors in terms of installation environment, performance, security, and typical use cases. [5]",
      "maxMarks": 5,
      "sampleAnswer": "1. **Installation Environment**: Type-1 runs directly on the hardware of the host machine (no underlying OS). Type-2 runs as an application on top of an existing host OS (e.g., Windows/macOS).\n2. **Performance**: Type-1 has near-native hardware execution speed because there is no intermediary OS layer. Type-2 suffers from virtualization overhead since guest calls must be translated through the host OS.\n3. **Security**: Type-1 has a very small codebase and attack surface (no host OS vulnerabilities). Type-2 is less secure as a compromise in the host OS can compromise all guest VMs.\n4. **Typical Use Cases**: Type-1 is used in enterprise data centers and public clouds (e.g. AWS Nitro, VMware ESXi). Type-2 is used by developers for local testing, running legacy apps, or testing operating systems on a desktop (e.g., VirtualBox, VMware Workstation)."
    }
  ]
},
  {
    "id": "exam_2026_s1",
    "title": "Semester 1, 2026 - Practice Exam",
    "type": "Past Exam",
    "questionsCount": 35,
    "mcqs": [
      {
        "id": 1,
        "question": "Which architecture in Flynn's Taxonomy represents standard multi-core CPUs in modern cloud computing nodes?",
        "options": [
          "Single Instruction, Single Data (SISD)",
          "Single Instruction, Multiple Data (SIMD)",
          "Multiple Instruction, Single Data (MISD)",
          "Multiple Instruction, Multiple Data (MIMD)"
        ],
        "answer": 3,
        "explanation": "MIMD represents modern multi-core computers where independent cores execute different instructions on separate data asynchronously."
      },
      {
        "id": 2,
        "question": "Which of the following are not MPI-functions? (multiple choice - multiple answers possible)",
        "options": [
          "Init",
          "Rank",
          "Scatter",
          "Collect",
          "Size"
        ],
        "answer": [3],
        "explanation": "MPI has standard routines like Init, Comm_rank (Rank), Scatter, and Comm_size (Size), but it does not have a function named Collect (it uses Gather, Reduce, or Allgather instead)."
      },
      {
        "id": 3,
        "question": "What distributed system challenges did Grid Computing try to address? (multiple choice - multiple answers possible)",
        "options": [
          "Free access",
          "Language heterogeneity",
          "Peer-to-peer",
          "Organisational collaborations",
          "All of the above"
        ],
        "answer": [3],
        "explanation": "Grid Computing primarily focused on coordinating resource sharing across distinct administrative domains, enabling secure virtual organisational collaborations."
      },
      {
        "id": 4,
        "question": "What does a SLURM script support? (multiple choice - multiple answers possible)",
        "options": [
          "Start a shell",
          "Select a partition",
          "Set a walltime",
          "Select the resources required",
          "Install software through sudo"
        ],
        "answer": [0, 1, 2, 3],
        "explanation": "SLURM scripts let users specify shell interpreters, target queue partitions, walltime limits, and required CPU/memory resources, but normal cluster users do not have sudo privileges to install software on worker nodes."
      },
      {
        "id": 5,
        "question": "What is authentication?",
        "options": [
          "Having a password",
          "Having a fingerprint",
          "Having face recognition",
          "Proving your identity",
          "Secure log in"
        ],
        "answer": 3,
        "explanation": "Authentication is the process of verifying or proving a claimed identity (who you are), which can be done using passwords, biometrics, or security tokens."
      },
      {
        "id": 6,
        "question": "What are the benefits of bare metal compared to hosted hypervisors? (multiple choice - multiple answers possible)",
        "options": [
          "Less hardware dependency",
          "Better performance",
          "More secure",
          "Easier to program",
          "Desktop support"
        ],
        "answer": [1, 2],
        "explanation": "Type-1 (Bare metal) hypervisors run directly on raw hardware without a host OS, offering superior performance (no double-scheduling overhead) and improved security (smaller codebase and attack surface)."
      },
      {
        "id": 7,
        "question": "In an OpenStack cloud environment, which of the following statements is true?",
        "options": [
          "Projects are organizational units in the cloud known as tenants",
          "A user can only be a member of one project",
          "It is best practice to use passwords to access an instance via SSH, as it is a Secure Shell",
          "It is OK to share a private key via email or OneDrive",
          "To access a server via SSH, we need to have the private key securely stored on the instance"
        ],
        "answer": 0,
        "explanation": "OpenStack logically groups resources into projects, which were historically referred to as tenants. Users can belong to multiple projects, and private SSH keys must remain secure and secret."
      },
      {
        "id": 8,
        "question": "Which of the following are valid operations you can perform on OpenStack volumes on MRC? (multiple choice - multiple answers possible)",
        "options": [
          "Increase volume size",
          "Convert volume to image",
          "Attach a volume to multiple instances simultaneously in read-write mode",
          "Create a volume from a snapshot",
          "Decrease volume size"
        ],
        "answer": [0, 1, 3, 4],
        "explanation": "OpenStack Cinder supports resizing (increasing/decreasing) volumes, snapshotting, and exporting volumes as images. Standard volumes cannot be attached to multiple active VMs in read-write mode simultaneously without specialized cluster filesystems."
      },
      {
        "id": 9,
        "question": "What is the primary purpose of an OpenRC file in OpenStack?",
        "options": [
          "To configure network settings",
          "To store environment variables necessary for accessing the OpenStack APIs",
          "To manage virtual machines",
          "To automate the deployment of instances",
          "All of the above"
        ],
        "answer": 1,
        "explanation": "The OpenRC file contains script commands that initialize environment variables (like OS_AUTH_URL, OS_USERNAME) so that CLI utilities and APIs can authenticate against Keystone."
      },
      {
        "id": 10,
        "question": "Can ElasticSearch do many-to-many joins of documents (choose the best answer)?",
        "options": [
          "No: ElasticSearch is not a relational DBMS",
          "Yes, it can do joins via lookup indexes just as a relational DBMS",
          "Yes, it can do joins via lookup indexes, but there are limitations (for instance in the size of the lookup index)",
          "Yes, but only with the ElasticSearch SQL language",
          "Yes, but only with the ElasticSearch ES|QL language"
        ],
        "answer": 0,
        "explanation": "Elasticsearch is a document store and is not designed for relational many-to-many joins. Although it supports nested documents and parent-child relations, it lacks traditional SQL-style M:N join performance and mechanics."
      },
      {
        "id": 11,
        "question": "How can you connect an HTTP request to a Fission function?",
        "options": [
          "A timer trigger has to be created that connects an HTTP port to a Fission function",
          "A Kubernetes ingress has to be created specifying the HTTP method, port, and URL",
          "A route has to be created: a route connects a URL and an HTTP method to a Fission function",
          "A Nginx pod has to be created and a Fission function connected to a URL managed by a Nginx pod",
          "Use port forwarding"
        ],
        "answer": 2,
        "explanation": "Fission maps incoming HTTP requests to specific serverless functions using HTTP Triggers (Routes), which map a URL path and HTTP verb/method directly to a target function."
      },
      {
        "id": 12,
        "question": "Compare Amdahl's Law and Gustafson-Barsis's Law on performance bounds.",
        "options": [
          "Amdahl assumes fixed problem size; Gustafson-Barsis assumes problem size grows with resources.",
          "Amdahl assumes infinite bandwidth; Gustafson-Barsis assumes high latency.",
          "Amdahl measures physical cores; Gustafson-Barsis measures hyperthreaded queues.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Amdahl's law assumes fixed workloads where serial parts dominate at scale. Gustafson-Barsis argues that users increase problem complexity as execution resources grow, allowing linear speedups."
      },
      {
        "id": 13,
        "question": "What does 'loop overhead' replicate on each processor node during loop partitioning?",
        "options": [
          "The index counter tests and boundary completion calculations.",
          "The database transaction lock flags.",
          "The hypervisor guest page tables.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "Partitioning a loop duplicates tests for loop bounds and increments on each CPU core, acting as a serial execution overhead."
      },
      {
        "id": 14,
        "question": "In a multi-core CPU architecture, what are the three primary cache challenges?",
        "options": [
          "Cache coherence, performance bottlenecks under concurrent load, and cache stalls.",
          "Bandwidth throttling, encryption keys, and disk space limits.",
          "Glance image retrieval, sbatch queue schedules, and port security.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Cores must coordinate cache lines to prevent dirty reads (coherence), manage read/write bandwidth, and handle stalls while waiting for main memory."
      },
      {
        "id": 15,
        "question": "Under the CAP theorem, which of the following database setups are AP (Availability & Partition Tolerance) systems? (multiple choice - multiple answers possible)",
        "options": [
          "CouchDB leaderless multi-master setup",
          "Apache Cassandra cluster model",
          "Federated PostgreSQL with 2-Phase Commit",
          "Single-node MySQL database"
        ],
        "answer": [0, 1],
        "explanation": "CouchDB and Cassandra prioritize availability and partition tolerance, using optimistic replication and resolving conflicts asynchronously, whereas federated DBs with 2PC sacrifice partition tolerance."
      },
      {
        "id": 16,
        "question": "Why should persistent database volumes be decoupled from OpenStack Nova virtual machines?",
        "options": [
          "Because virtual machines are ephemeral and deleting a VM destroys all local instance disks, losing database records.",
          "Because Nova does not support SQL queries.",
          "Because local disks are restricted to Type-2 hypervisors.",
          "Because Cinder volumes automatically encrypt records."
        ],
        "answer": 0,
        "explanation": "VM instances are temporary. Decoupling storage (using Cinder block volumes) ensures data persists independently when instances are terminated or rescheduled."
      },
      {
        "id": 17,
        "question": "What is the role of 'nova-scheduler' in OpenStack?",
        "options": [
          "Selecting the best physical hypervisor host to launch a VM based on hardware filters and resources.",
          "Exposing REST API endpoints to public clients.",
          "Encrypting volumes during block volume mounts.",
          "Handling all virtual networking route definitions."
        ],
        "answer": 0,
        "explanation": "The nova-scheduler selects an appropriate physical hypervisor node for new instances based on resource filters (ram, cpu, disk) and availability."
      },
      {
        "id": 18,
        "question": "What is the difference between a Docker Image and a Docker Container? (multiple choice - multiple answers possible)",
        "options": [
          "An Image is a read-only immutable blueprint of the filesystem; a Container is a live runnable instance with active write layers.",
          "An Image has no active runtime process; a Container runs active processes on the host OS kernel.",
          "Images isolate hardware interfaces; Containers isolate guest hypervisors.",
          "All of the above."
        ],
        "answer": [0, 1],
        "explanation": "Images represent read-only filesystem templates. Containers run processes inside isolated namespaces/cgroups with an active read-write layer."
      },
      {
        "id": 19,
        "question": "In Docker bridge network mode, how is a container application exposed on a laptop port?",
        "options": [
          "By configuring port forwarding in the Docker daemon, mapping a host port to the container port.",
          "By mounting a Cinder volume to the container.",
          "By running the container inside a Type-1 hypervisor.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Bridge mode isolates container IPs. Host ports must be mapped (forwarded) to the internal container ports to make services accessible externally."
      },
      {
        "id": 20,
        "question": "What is the primary benefit of Continuous Integration (CI)?",
        "options": [
          "Early detection of software bugs by automating builds and unit tests on every commit.",
          "Automatic deployment of code directly to public production databases.",
          "Syncing local files via NFS mounts.",
          "Exposing local ports securely over public internet."
        ],
        "answer": 0,
        "explanation": "CI checks code updates frequently, verifying that changes compile and pass tests to locate regression bugs quickly."
      },
      {
        "id": 21,
        "question": "In CI/CD code scanning (e.g. SonarQube), what does a 'Security Hotspot' indicate?",
        "options": [
          "Suspicious code patterns that require manual inspection to confirm if they represent a real vulnerability.",
          "A confirmed, exploitable SQL injection vulnerability in production.",
          "A CPU node executing heavy loop iterations.",
          "An unauthorized access attempt to an OpenStack instance."
        ],
        "answer": 0,
        "explanation": "Security hotspots highlight areas that are not guaranteed bugs but use sensitive APIs (like crypto, permissions) needing developer review."
      },
      {
        "id": 22,
        "question": "In Kubernetes, what resources do containers inside the same Pod share?",
        "options": [
          "Network stack (same IP and port space), IPC namespace, and storage volumes.",
          "Guest OS kernel filesystems and virtual hardware controllers.",
          "Type-1 hypervisor scheduler filters.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "Containers inside a Pod are tightly coupled, sharing the network stack, IPC interfaces, and storage volumes, but having distinct process namespaces."
      },
      {
        "id": 23,
        "question": "What is the purpose of a Kubernetes Service?",
        "options": [
          "Providing a stable IP address and port that load-balances requests across a dynamic group of underlying pods.",
          "Mounting cloud block drives directly to local developer laptops.",
          "Scheduling sbatch jobs on Sapphire SLURM queues.",
          "Encrypting Keystone tokens dynamically."
        ],
        "answer": 0,
        "explanation": "Pods are temporary and change IPs frequently. A Service acts as a stable DNS name, IP, and load-balancer over a moving target of pod backends."
      },
      {
        "id": 24,
        "question": "What is the advantage of separating PV and PVC in Kubernetes?",
        "options": [
          "It makes applications portable by decoupling resource definitions (PV) from workload requests (PVC).",
          "It accelerates container boot times to under one second.",
          "It prevents replication locks on relational databases.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "This separation allows developers to request storage abstractly without knowing whether it is local disk, NFS, or AWS EBS, which is resolved by the cluster admin."
      },
      {
        "id": 25,
        "question": "Which of the following REST API practices are recommended under standard RESTful design? (multiple choice - multiple answers possible)",
        "options": [
          "URLs should focus on resources (nouns) rather than execution actions (verbs).",
          "Standard HTTP methods (GET, POST, PUT, DELETE) should declare operations.",
          "GET requests must be safe and idempotent, modifying no database state.",
          "Resource endpoints must require basic SSH credentials on every path."
        ],
        "answer": [0, 1, 2],
        "explanation": "REST design represents entities as nouns in URLs and operates on them using standard HTTP methods. GET calls must remain read-only without modifying state."
      },
      {
        "id": 26,
        "question": "In Fission, how does the PoolManager reduce function cold-starts?",
        "options": [
          "By keeping a pool of warm, generic environment containers that load code instantly upon invocation.",
          "By deploying dedicated Kubernetes Services for every function route.",
          "By running all workloads on Type-1 bare metal hosts.",
          "By queuing jobs using a SLURM controller partition."
        ],
        "answer": 0,
        "explanation": "PoolManager maintains warm pods with pre-loaded runtimes. Upon execution, the function package is injected, bypassing container creation latency."
      },
      {
        "id": 27,
        "question": "What are the Big Data characteristics: 'Velocity' and 'Veracity'?",
        "options": [
          "Velocity is the speed at which new data is generated; Veracity is the accuracy and provenance of the data.",
          "Velocity is the overall size of the data; Veracity is the variety of file formats.",
          "Velocity is the query response time; Veracity is the database security encryption level.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Velocity refers to continuous high-speed data flow. Veracity measures the trustworthiness, noise ratio, and authenticity of the source data."
      },
      {
        "id": 28,
        "question": "Under the CAP theorem, how does CouchDB handle write conflicts during a network partition? (multiple choice - multiple answers possible)",
        "options": [
          "It allows nodes to write locally, creating multiple document revisions asynchronously.",
          "It delegates conflict resolution to the application/developer layer.",
          "It blocks all concurrent writes until a central quorum is reached.",
          "It triggers a database two-phase commit lock abort."
        ],
        "answer": [0, 1],
        "explanation": "CouchDB is an AP database using Multi-Version Concurrency Control. It permits local writes during partitions, storing conflicts as separate revisions to be resolved later."
      },
      {
        "id": 29,
        "question": "Why do large Elasticsearch indexes require cursor-based pagination?",
        "options": [
          "Because offset-based pagination requires the database to scan and count through all preceding records, degrading search speed at high offsets.",
          "Because offset pagination causes replication blocks across primary shards.",
          "Because cursors are permanently held in master node memory.",
          "Because cursors automatically encrypt records."
        ],
        "answer": 0,
        "explanation": "Offset pagination forces the engine to read and sort all records from the start. Cursors use stable pointers to fetch only the next page instantly."
      },
      {
        "id": 30,
        "question": "What is a major performance issue of storing Base64-encoded image files directly in Elasticsearch?",
        "options": [
          "It bloats document size by ~33%, causing extreme memory pressure, slow replication, and poor index query speeds.",
          "It breaks CAP consistency protocols.",
          "It converts document index formats to read-only.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "ES is not a blob store. Encoding images to base64 text strings bloats index size, causing memory issues. It is best practice to store image files on object stores and reference URLs."
      },
      {
        "id": 31,
        "question": "What is the primary difference in isolation layer between Type-1 and Type-2 hypervisors?",
        "options": [
          "Type-1 hypervisors execute directly on raw physical hardware; Type-2 hypervisors run inside a host operating system.",
          "Type-1 hypervisors manage virtual ports; Type-2 hypervisors manage local SSH tunnels.",
          "Type-1 hypervisors require modifying guest kernels; Type-2 hypervisors do not.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Type-1 bare-metal hypervisors sit between hardware and virtual kernels. Type-2 hypervisors run on top of a desktop OS (like Windows or macOS), introducing double-scheduling overhead."
      },
      {
        "id": 32,
        "question": "According to Popek-Goldberg Virtualization Theorem, under what condition is a hardware CPU architecture virtualizable?",
        "options": [
          "If all sensitive instructions are a strict subset of privileged instructions.",
          "If the processor clock speed exceeds 3.0 GHz.",
          "If the architecture supports container bridge networks natively.",
          "If the L1 and L2 cache lines are automatically coherent."
        ],
        "answer": 0,
        "explanation": "All sensitive instructions (those that read/write hardware controls or depend on mode) must trigger a hardware trap when run in user space (be privileged) for hypervisors to intercept them."
      },
      {
        "id": 33,
        "question": "In AWS VPC, what is the role of a NAT Gateway?",
        "options": [
          "To allow instances in a private subnet to connect to the internet while preventing external hosts from initiating connections.",
          "To assign public Elastic IPs to private database servers.",
          "To load-balance HTTP requests across ECS target groups.",
          "To secure Keystone REST API paths."
        ],
        "answer": 0,
        "explanation": "NAT Gateways route outgoing traffic from private networks to the internet, translating private IPs to a public IP, but block unsolicited incoming traffic."
      },
      {
        "id": 34,
        "question": "What is the role of a Certification Authority (CA) in a Public Key Infrastructure (PKI)?",
        "options": [
          "To digitally sign public keys, validating that the key belongs to the declared owner based on organizational trust.",
          "To decrypt private keys sent over public subnets.",
          "To filter firewall port accesses.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "A CA acts as a trusted third party, signing certificate structures to bind a public key to a specific identity."
      },
      {
        "id": 35,
        "question": "What are the security components of a SAML federated single sign-on system (like Shibboleth/AAF)? (multiple choice - multiple answers possible)",
        "options": [
          "Identity Provider (IdP) that authenticates users and issues assertions.",
          "Service Provider (SP) that hosts resources and consumes assertions to authorize users.",
          "Keystone endpoint proxy that registers Cinder storage volumes.",
          "Fission trigger route that connects HTTP ports to functions."
        ],
        "answer": [0, 1],
        "explanation": "Federated SSO relies on Identity Providers (IdP) issuing XML assertions of authentication, and Service Providers (SP) consuming and verifying those assertions to grant resource access."
      }
    ],
    "shortAnswers": [
      {
        "id": 1,
        "question": "In assignment 2, you created a Cloud-based solution for ingesting, processing, and analysing diverse data. At the back end of your solution, you established an ElasticSearch database, and a RESTful API based on Fission that could be accessed through a Jupyter Notebook. You now wish to protect access to the RESTful API so that only members of your team and Professor Sinnott can access it.\n\nQuestions:\na) What security concept is required to achieve this? [1]\nb) You now wish to allow Professor Sinnott to have direct read-only access to your database. What security concept is required to achieve this? [1]\nc) You have technical problems and need Professor Sinnott to have access to your Cloud-based servers. How might you achieve this? [1]",
        "maxMarks": 3,
        "sampleAnswer": "a) Authentication: This verifies the identity of the user accessing the RESTful API (verifying who they are).\nb) Authorisation: This manages the access privileges of the authenticated user, restricting Professor Sinnott's permissions to read-only operations on the Elasticsearch database.\nc) Add Professor Sinnott's public SSH key to the server's authorized_keys file (usually under ~/.ssh/authorized_keys) on the cloud instance, allowing secure SSH access."
      },
      {
        "id": 2,
        "question": "COMP90024 Team-100 developed an amazing solution and decided to build an interactive web-based front end user interface highlighting diverse scenarios using their RESTful API. The University of Melbourne wishes to showcase this solution to highlight the cutting end teaching that happens at the University. The University decides to create a new eduPerson attribute (eduCOMP90024) to be included in the University of Melbourne Identity Provider to allow all current and future students taking COMP90024 to explore the Team-100 solution.\n\nDiscuss the technical and non-technical challenges associated with the roll-out of this new attribute. [7]",
        "maxMarks": 7,
        "sampleAnswer": "Technical Challenges:\n1. Attribute Release Policy: Configuring the central Identity Provider (IdP) to release the new attribute specifically to the Service Provider (SP) hosting the application, without exposing it to unrelated SPs in the federation.\n2. Metadata and Federation Sync: Distributing metadata updates containing the new schema definitions across the federation so the SP web server can correctly parse the SAML assertion.\n3. Application Integration: Modifying the web backend to check the SAML assertion values and map the eduCOMP90024 attribute to corresponding local application permissions.\n\nNon-Technical Challenges:\n1. Administrative Approvals: Securing university administrative approval to alter the core LDAP/Active Directory database schema to support a course-specific custom attribute.\n2. Data Privacy & Compliance: Ensuring that sharing student enrollment statuses complies with local privacy laws and student data protection standards.\n3. Lifecycle Management: Coordinating the maintenance and eventual deprecation of the attribute when students finish the course or the application is decommissioned."
      },
      {
        "id": 3,
        "question": "Why would the Cloud-based solution developed by Team-100 not be a suitable use case for eduPerson attributes that are used by Shibboleth to support single sign-on through the Australian Access Federation? [3]\n\nAnd, a member of Team-100 signs in to their web-based system through the AAF using a PC in the Baillieu Library and forgets to log out. A jealous member of COMP90024 team-99, now accesses the PC and sees the existing web-based browser session. Discuss a worst-case scenario for Team-100 and their Cloud solution. [2]",
        "maxMarks": 5,
        "sampleAnswer": "Suitability of eduPerson Attributes (3 Marks):\nUsing central IdP attributes for temporary, class-level groups introduces huge administrative overhead. Shibboleth and AAF are intended for enterprise-wide resources. Creating local attributes on a central registry for single-semester groups creates directory clutter. A better solution is using Virtual Organizations (VOs) or group management services (like Grouper) to manage temporary collaborative access rights outside the core LDAP directory.\n\nWorst-Case Scenario (2 Marks):\n1. Resource Abuse and Costs: The attacker could use the open session to execute administrative API routes, deleting database indexes or spinning up expensive cloud compute resources (like GPU nodes), causing massive cloud billing charges.\n2. Academic Sabotage and Data Theft: The attacker could steal private code configurations, leak sensitive keys, delete final assignment databases, or alter submissions, resulting in loss of grades and academic integrity compromise."
      }
    ]
  },
  {
    "id": "exam_ai_3",
    "title": "Accurate AI Exam 3 - Practice Paper",
    "type": "AI Generated",
    "questionsCount": 35,
    "mcqs": [
      {
        "id": 1,
        "question": "Under NIST guidelines, which cloud characteristic matches billing customer resources measured at the appropriate level of abstraction?",
        "options": [
          "Resource pooling",
          "Rapid elasticity",
          "Measured service",
          "On-demand self-service"
        ],
        "answer": 2,
        "explanation": "Measured service automatically monitors, controls, and reports resource utilization, charging customers only for what they consume."
      },
      {
        "id": 2,
        "question": "Which of the following are valid container isolation mechanisms in Linux? (multiple choice - multiple answers possible)",
        "options": [
          "Namespaces (network, mount, PID, etc.)",
          "Control Groups (cgroups)",
          "Type-1 hypervisor hardware scheduling",
          "Cinder block volume storage attachments"
        ],
        "answer": [0, 1],
        "explanation": "Linux containers use namespaces to isolate processes (network, storage, PIDs) and control groups (cgroups) to restrict resource usage (CPU, RAM)."
      },
      {
        "id": 3,
        "question": "Compare horizontal and vertical scaling properties.",
        "options": [
          "Horizontal adds nodes; vertical adds resources to a single node.",
          "Horizontal uses 2-Phase Commit; vertical uses CouchDB MVCC.",
          "Horizontal is limited to Type-2 hypervisors; vertical is for Type-1.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Horizontal scaling adds more servers to a cluster, distributing workload. Vertical scaling increases capabilities (RAM/CPU) of a single node."
      },
      {
        "id": 4,
        "question": "Which of the following are true about Amdahl's Law? (multiple choice - multiple answers possible)",
        "options": [
          "Theoretical speedup is limited by the sequential portion of the code.",
          "It assumes a fixed problem size.",
          "Adding more processors always yields linear speedup.",
          "It represents GPU multithreaded pipelines."
        ],
        "answer": [0, 1],
        "explanation": "Amdahl's law demonstrates that sequential segments create speedup ceilings at scale, assuming a fixed problem size."
      },
      {
        "id": 5,
        "question": "In CAP theorem, what does Consistency represent?",
        "options": [
          "All nodes see the same data at the same time.",
          "All database queries respond without error.",
          "The database schema is locked to SQL.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "Consistency means every read receives the most recent write or an error across all active database nodes."
      },
      {
        "id": 6,
        "question": "Which database setups are CP (Consistency & Partition Tolerance) systems? (multiple choice - multiple answers possible)",
        "options": [
          "Elasticsearch clusters (requires Master/Quorum consensus)",
          "Relational databases using strict consensus models",
          "CouchDB leaderless multi-master replication",
          "Apache Cassandra loose consistency clusters"
        ],
        "answer": [0, 1],
        "explanation": "Consensus-based systems and strict relational clusters prioritize consistency during network partitions, blocking isolated nodes from accepting writes."
      },
      {
        "id": 7,
        "question": "What is the primary role of Keystone in OpenStack?",
        "options": [
          "Authentication and identity service.",
          "Virtual machine instance compute controller.",
          "Persistent block storage manager.",
          "Web dashboard interface."
        ],
        "answer": 0,
        "explanation": "Keystone manages credentials, issues authentication tokens, and maintains the directory of service endpoints in OpenStack."
      },
      {
        "id": 8,
        "question": "What operations are managed by OpenStack Neutron? (multiple choice - multiple answers possible)",
        "options": [
          "Virtual network port creation",
          "Security group firewall rules",
          "Floating IP assignments",
          "Glance image template creation"
        ],
        "answer": [0, 1, 2],
        "explanation": "Neutron handles virtual networking resources (ports, subnets, routers, security groups, floating IPs) in OpenStack."
      },
      {
        "id": 9,
        "question": "What does a Docker image layer represent?",
        "options": [
          "A read-only, immutable slice of the filesystem created by instructions in a Dockerfile.",
          "A virtual RAM block in a Type-2 hypervisor.",
          "An index mapping table inside Elasticsearch.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Docker images are built from stacked, read-only layers. Each build instruction (like RUN, COPY) generates a new immutable layer."
      },
      {
        "id": 10,
        "question": "In Docker, what happens to data written inside a container's default read-write layer when it is deleted?",
        "options": [
          "The data is permanently lost.",
          "The data is automatically saved to a host directory.",
          "The data is replicated to other containers.",
          "The data is moved to a Cinder volume."
        ],
        "answer": 0,
        "explanation": "A container's read-write layer is ephemeral. Deleting the container destroys this layer; persistence requires Docker volumes or bind mounts."
      },
      {
        "id": 11,
        "question": "What is the primary goal of Continuous Integration (CI)?",
        "options": [
          "Automating tests to merge updates safely and catch bugs early.",
          "Running sbatch scripts on Spartan clusters.",
          "Configuring virtual organization trust structures.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "CI automates compiles and tests for code updates, allowing developers to verify changes daily and avoid code regression."
      },
      {
        "id": 12,
        "question": "In CI/CD scans, what is a code Vulnerability?",
        "options": [
          "An identified security weakness that can be exploited by attackers to compromise a system.",
          "A syntax error preventing compilation.",
          "A high-latency loop partition queue.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Vulnerabilities are confirmed security flaws (like hardcoded keys, SQL injections, insecure packages) that pose immediate security risks."
      },
      {
        "id": 13,
        "question": "What is a Kubernetes Pod?",
        "options": [
          "The smallest deployable unit representing one or more containers sharing network and storage resources.",
          "A physical node inside a cluster.",
          "A static volume claim endpoint.",
          "A REST API resource model."
        ],
        "answer": 0,
        "explanation": "Pods schedule tightly coupled container workloads that execute on the same host and share the network stack (IP/ports)."
      },
      {
        "id": 14,
        "question": "What is a Kubernetes Ingress?",
        "options": [
          "An API object that manages external access to internal Services, typically routing HTTP traffic.",
          "An internal load-balancer IP for pods.",
          "A persistent drive claim template.",
          "A Keystone token generator."
        ],
        "answer": 0,
        "explanation": "Ingress objects manage routing rules for incoming HTTP/S connections, forwarding traffic to corresponding Services."
      },
      {
        "id": 15,
        "question": "What are the characteristics of RESTful APIs? (multiple choice - multiple answers possible)",
        "options": [
          "Resource-centric URLs (nouns).",
          "Stateless communication (no session stored on server).",
          "Execution verbs in URL paths.",
          "SSH key authorizations on every endpoint."
        ],
        "answer": [0, 1],
        "explanation": "REST design utilizes resource-centric paths, standard HTTP verbs, and ensures calls are stateless to support horizontal scalability."
      },
      {
        "id": 16,
        "question": "What is Fission?",
        "options": [
          "A FaaS (Function as a Service) serverless framework running on top of Kubernetes.",
          "A database clustering engine using two-phase commit.",
          "An OpenStack command-line interface helper.",
          "A batch scheduler for SLURM jobs."
        ],
        "answer": 0,
        "explanation": "Fission is a serverless FaaS framework built on Kubernetes, enabling rapid execution of short-lived, state-free functions."
      },
      {
        "id": 17,
        "question": "What is a Big Data 'Volume'?",
        "options": [
          "The overall scale and storage size of the collected dataset.",
          "The speed of new record generation.",
          "The diversity of file formats.",
          "The reliability of dataset sources."
        ],
        "answer": 0,
        "explanation": "Volume refers to massive data scale, ranging from terabytes to exabytes, which typical local filesystems cannot process."
      },
      {
        "id": 18,
        "question": "Which of the following database options are AP (Availability & Partition Tolerance) systems? (multiple choice - multiple answers possible)",
        "options": [
          "CouchDB multi-master replication setups",
          "Apache Cassandra column databases",
          "Single-node PostgreSQL databases",
          "Elasticsearch index shards"
        ],
        "answer": [0, 1],
        "explanation": "Cassandra and CouchDB prioritize writes during partitions, allowing eventual consistency reconciliations after recovery."
      },
      {
        "id": 19,
        "question": "How does Elasticsearch optimize search queries over large text volumes?",
        "options": [
          "By building inverted indexes matching terms to documents.",
          "By executing relational table joins.",
          "By running Type-1 hardware virtualizations.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "Elasticsearch uses inverted indexes to parse text, mapping words to documents to perform near-instant keyword searching."
      },
      {
        "id": 20,
        "question": "Why is cursor pagination preferred over offset pagination for search engines?",
        "options": [
          "It avoids scanning and sorting all preceding records, providing constant-time page fetches.",
          "It enables secure password hashing.",
          "It prevents primary shard partitions.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Offset pagination forces engines to read all records up to the target offset. Cursors point directly to the page boundaries, saving CPU resources."
      },
      {
        "id": 21,
        "question": "What is the Popek-Goldberg hypervisor Fidelity property?",
        "options": [
          "Virtual software runs identically to raw hardware execution (except for timing details).",
          "The VM boots in under three seconds.",
          "Hypervisors encrypt guest memory lines.",
          "The VMM automatically runs on SLURM."
        ],
        "answer": 0,
        "explanation": "Fidelity dictates that virtualized code experiences identical logical state transitions as on bare metal, maintaining software correctness."
      },
      {
        "id": 22,
        "question": "According to Popek-Goldberg virtualization rules, what is a sensitive instruction?",
        "options": [
          "An instruction whose behavior depends on active privilege modes or coordinates hardware directly.",
          "An instruction causing CPU clock speed throttling.",
          "An instruction modifying a Docker environment variable.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "Sensitive instructions interface directly with system controls (e.g. MMU, page tables, hardware states) or behave differently in user space."
      },
      {
        "id": 23,
        "question": "What is an AWS private subnet?",
        "options": [
          "A subnet without direct routing paths to an internet gateway.",
          "A subnet hosted on a Type-2 desktop hypervisor.",
          "A subnet restricted to container images.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Private subnets lack direct route entries for Internet Gateways, securing internal databases and applications from direct public access."
      },
      {
        "id": 24,
        "question": "What is a Public Key Infrastructure (PKI) Certification Authority?",
        "options": [
          "A trusted issuer that signs public keys to verify owner identity.",
          "A hardware security module decrypting private keys.",
          "A network controller managing routing tables.",
          "A database proxy for Keystone instances."
        ],
        "answer": 0,
        "explanation": "CAs verify entities, signing their certificate packages to assure users that public keys indeed map to the declared owners."
      },
      {
        "id": 25,
        "question": "What are the common challenges of cross-provider single sign-on (SSO)? (multiple choice - multiple answers possible)",
        "options": [
          "Federating trust relationships across distinct security domains.",
          "Aligning user attributes and metadata schemas.",
          "Synchronizing local Cinder storage mounts.",
          "None of the above."
        ],
        "answer": [0, 1],
        "explanation": "SSO across organizations is difficult due to varying trust scopes and differences in identity schemas (attributes, logins) needing federation."
      },
      {
        "id": 26,
        "question": "Compare Supercomputers and Cluster networks.",
        "options": [
          "Supercomputers are single-address-space systems; Clusters connect separate hosts via high-speed LANs.",
          "Supercomputers use Docker volumes; Clusters use Type-2 hypervisors.",
          "Supercomputers run on Fission; Clusters run on AWS ECS.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "Supercomputers act as singular, highly optimized systems. Clusters group separate server hardware using middleware networks (e.g. MPI) to coordinate compute."
      },
      {
        "id": 27,
        "question": "What is the SLURM command 'sbatch' utilized for?",
        "options": [
          "Submitting batch job scripts to the scheduling queue.",
          "Stopping containerized docker instances.",
          "Creating new OpenStack virtual subnets.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "sbatch sends resource-defined job scripts to the SLURM queue scheduler for asynchronous runtimes on compute worker nodes."
      },
      {
        "id": 28,
        "question": "Which of the following represent horizontal scaling operations? (multiple choice - multiple answers possible)",
        "options": [
          "Adding three compute nodes to a Kubernetes cluster",
          "Scaling out a stateless web server deployment using autoscalers",
          "Upgrading instance CPU cores from 4 to 16 vCPUs",
          "Mounting a larger block volume drive"
        ],
        "answer": [0, 1],
        "explanation": "Horizontal scaling involves adding more node instances to a cluster pool rather than upgrading hardware capacity of single servers."
      },
      {
        "id": 29,
        "question": "What does 'nova-conductor' do in OpenStack?",
        "options": [
          "Acts as a secure database proxy for worker compute daemons to protect credentials.",
          "Schedules VM host placement on hypervisors.",
          "Manages Glance virtual image templates.",
          "Tracks floating IP route configurations."
        ],
        "answer": 0,
        "explanation": "nova-conductor sits between compute nodes and the database, preventing compute hosts from accessing DB credentials directly for security hardening."
      },
      {
        "id": 30,
        "question": "In Docker, what is bridge network mode?",
        "options": [
          "An isolated virtual network bridge where containers obtain internal IP addresses.",
          "A network path running directly on Type-1 hypervisors.",
          "A file mount pipeline between Cinder and Glance.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Bridge mode establishes isolated subnets inside the host, utilizing network address translations (NAT) to forward external ports to containers."
      },
      {
        "id": 31,
        "question": "What is a Kubernetes Persistent Volume Claim (PVC)?",
        "options": [
          "A user/application request for storage resources specifying requirements.",
          "The actual physical storage block provisioned by administrators.",
          "A route trigger linking function endpoints to URLs.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "PVCs declare storage requests (e.g. size, read-write access modes) that Kubernetes matches and binds to appropriate PV backends."
      },
      {
        "id": 32,
        "question": "In REST, when is the PUT method preferred over POST?",
        "options": [
          "When updating or creating a resource at a client-defined specific URL destination.",
          "When server creates resources at randomly generated paths.",
          "When the call modifies state without idempotency.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "PUT is idempotent and is used when the client specifies the exact resource path URL, overwriting or creating it there."
      },
      {
        "id": 33,
        "question": "In Fission, what is the role of PoolManager compared to NewDeploy?",
        "options": [
          "PoolManager loads packages into warm pre-started containers instantly; NewDeploy spawns dedicated pods dynamically.",
          "PoolManager is for Type-2 desktop runs; NewDeploy is for bare-metal systems.",
          "PoolManager requires SLURM scripts; NewDeploy runs on OpenStack Nova.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "PoolManager minimizes cold starts using warm pools but scales poorly. NewDeploy autoscales dedicated pods but incurs cold-start latency."
      },
      {
        "id": 34,
        "question": "What are the Big Data characteristics: 'Volume' and 'Variety'?",
        "options": [
          "Volume is data size scale; Variety is diversity of data formats and models.",
          "Volume is dataset generation velocity; Variety is database security levels.",
          "Volume is query throughput; Variety is consensus cluster quorums.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Volume tracks scale (terabytes/petabytes). Variety tracks format complexity (structured SQL databases, unstructured log text, image binaries)."
      },
      {
        "id": 35,
        "question": "What CAP properties describe a Federated PostgreSQL setup using FDWs?",
        "options": [
          "Consistency and Availability (CA), refusing operations during partitions.",
          "Availability and Partition Tolerance (AP), writing to any partition.",
          "Consistency and Partition Tolerance (CP), allowing local reads.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "Federated FDWs require 2-phase commits across all nodes. In partitions, the master aborts updates, preserving consistency (C) and availability (A) locally but failing partition tolerance (P)."
      }
    ],
    "shortAnswers": [
      {
        "id": 1,
        "question": "Compare Fission's PoolManager and NewDeploy execution strategies in terms of cold-start latency, resource consumption, and scaling under high concurrency. [5]",
        "maxMarks": 5,
        "sampleAnswer": "1. **Cold-start Latency**: PoolManager has very low latency because it keeps generic warm pods pre-loaded. Code is injected instantly. NewDeploy has higher latency because it creates dedicated pods, containers, and services dynamically.\n2. **Resource Consumption**: PoolManager keeps warm environment instances running constantly, consuming memory even when idle. NewDeploy can scale down to zero, releasing compute resources when idle.\n3. **High Concurrency Scaling**: PoolManager does not autoscale function pods well under high concurrency (it queues requests or Specializes a single pod). NewDeploy uses Kubernetes Horizontal Pod Autoscaling (HPA) to scale pods dynamically, handling high concurrency."
      },
      {
        "id": 2,
        "question": "Describe the CAP theorem tradeoffs in CouchDB databases. Explain how CouchDB resolves write conflicts after a network partition is healed. [5]",
        "maxMarks": 5,
        "sampleAnswer": "1. **CAP Tradeoff**: CouchDB is an AP database. During a network partition, all nodes continue accepting writes to maintain high Availability, sacrificing Consistency.\n2. **MVCC model**: CouchDB uses Multi-Version Concurrency Control. Every write creates a new revision of the document.\n3. **Conflict Storage**: When partitioned, different nodes receive updates, creating divergent revision histories. CouchDB stores all conflicting revisions on document replication.\n4. **Conflict Resolution**: CouchDB selects a deterministic 'winning revision' automatically so all nodes output consistent data, but retains conflicts. The application developer must merge or delete the conflicting revisions manually using document API loops."
      },
      {
        "id": 3,
        "question": "Explain how Linux namespaces and control groups (cgroups) collaborate to isolate and manage resources inside a Docker container. [5]",
        "maxMarks": 5,
        "sampleAnswer": "1. **Namespaces Role (Isolation)**: Namespaces establish virtual boundaries, wrapping processes so they cannot see resources of other processes. PID namespace isolates process IDs (making app process PID 1). Net namespace isolates networks (ports/interfaces). Mount isolates filesystems, etc.\n2. **Control Groups Role (Resource Limits)**: cgroups track, restrict, and allocate physical CPU, memory, network, and disk I/O usage. This prevents a single container from starving other containers (Noisy Neighbor problem).\n3. **Collaboration**: Together, namespaces isolate what a process can *see/access* while cgroups isolate what resource capacity a process can *consume*, establishing complete container sandboxing without hypervisors."
      }
    ]
  },
  {
    "id": "exam_ai_4",
    "title": "Accurate AI Exam 4 - Practice Paper",
    "type": "AI Generated",
    "questionsCount": 35,
    "mcqs": [
      {
        "id": 1,
        "question": "Under course definitions, which of the following is one of the five NIST essential characteristics of Cloud Computing?",
        "options": [
          "Broad network access",
          "Multithreaded pipelines",
          "Type-1 hyper-threading",
          "None of the above"
        ],
        "answer": 0,
        "explanation": "NIST essential characteristics are: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, and Measured service."
      },
      {
        "id": 2,
        "question": "What distributed memory programming model represents processes running asynchronously on separate nodes communicating explicitly via messages?",
        "options": [
          "OpenMP",
          "Message Passing Interface (MPI)",
          "SLURM batch scheduler",
          "All of the above"
        ],
        "answer": 1,
        "explanation": "MPI (Message Passing Interface) is designed for distributed-memory parallel systems, requiring processes to send and receive messages explicitly."
      },
      {
        "id": 3,
        "question": "Which of the following represents vertical scaling? (multiple choice - multiple answers possible)",
        "options": [
          "Upgrading a VM from 8 vCPUs to 32 vCPUs",
          "Replacing a 2.0 GHz CPU with a 4.0 GHz CPU on a node",
          "Adding three worker VMs to a cluster",
          "Replicating database indexes across shards"
        ],
        "answer": [0, 1],
        "explanation": "Vertical scaling (scaling up) involves increasing resource capacity (CPU, RAM, core speeds) of a single node rather than adding more servers."
      },
      {
        "id": 4,
        "question": "Which of the following are true about Gustafson-Barsis's Law? (multiple choice - multiple answers possible)",
        "options": [
          "It assumes that problem size scales as computing resources grow.",
          "It counters Amdahl's fixed-workload speedup limitations.",
          "It is optimized for single-threaded CPUs.",
          "It assumes network bandwidth is infinite."
        ],
        "answer": [0, 1],
        "explanation": "Gustafson-Barsis argues that users scale problems to fit larger cluster sizes, enabling linear speedups on scaled datasets, countering Amdahl's pessimistic ceilings."
      },
      {
        "id": 5,
        "question": "In CAP theorem, what does Partition Tolerance represent?",
        "options": [
          "The system operates correctly despite message loss or network splits.",
          "The database automatically scales shards.",
          "All nodes run identical OS versions.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Partition tolerance means the database cluster continues to run and serve requests even during connection dropouts or divisions between nodes."
      },
      {
        "id": 6,
        "question": "Which databases operate as CP systems under CAP? (multiple choice - multiple answers possible)",
        "options": [
          "Elasticsearch (rejects writes on partitioned side lacking quorum)",
          "Paxos-based distributed key-value stores",
          "CouchDB leaderless multi-master setups",
          "Apache Cassandra dynamic consistency setups"
        ],
        "answer": [0, 1],
        "explanation": "Elasticsearch and Paxos/Raft systems require majority quorums. Partitions blocking quorum abort writes, prioritizing consistency (C) over availability (A)."
      },
      {
        "id": 7,
        "question": "Which OpenStack compute daemon runs directly on hypervisor hosts to manage instances?",
        "options": [
          "nova-compute",
          "nova-api",
          "nova-scheduler",
          "Keystone"
        ],
        "answer": 0,
        "explanation": "nova-compute interfaces with hypervisors (like Libvirt/KVM) to instantiate, build, and destroy virtual instances on the physical node."
      },
      {
        "id": 8,
        "question": "Which services are managed by OpenStack Glance? (multiple choice - multiple answers possible)",
        "options": [
          "Virtual machine OS image templates",
          "VM volume snapshots for backup restorations",
          "Neutron virtual router definitions",
          "Floating IP subnets"
        ],
        "answer": [0, 1],
        "explanation": "Glance provides virtual machine image discovery, storing OS templates, kernel images, and volume snapshots used to spawn new hosts."
      },
      {
        "id": 9,
        "question": "What is the purpose of cgroups (Control Groups) in Linux container runtimes?",
        "options": [
          "To throttle and restrict resources (CPU, memory, storage I/O) consumed by container processes.",
          "To isolate process IDs and network namespace interfaces.",
          "To compile Fission functions into packages.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "cgroups limit resource allocations per container, preventing any single app from exhausting host resources (Noisy Neighbor issue)."
      },
      {
        "id": 10,
        "question": "What Docker instruction sets the default command that runs when a container starts up, which can be appended with CMD parameters?",
        "options": [
          "ENTRYPOINT",
          "FROM",
          "RUN",
          "ENV"
        ],
        "answer": 0,
        "explanation": "ENTRYPOINT sets the principal executable path for the container, and CMD provides default arguments that users can override at runtime."
      },
      {
        "id": 11,
        "question": "What is the primary benefit of Continuous Delivery (CD)?",
        "options": [
          "Automating the release of tested code changes to production or staging servers.",
          "Compiling MPI code scripts on login nodes.",
          "Synchronizing LDAP user accounts across CAs.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "CD automates deployment procedures, delivering tested builds directly to user-facing environments securely."
      },
      {
        "id": 12,
        "question": "In CI/CD scans, what is a Vulnerability?",
        "options": [
          "A confirmed security flaw in software code or package dependencies.",
          "A warning about code formatting spacing.",
          "A high-latency loop partition queue.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Vulnerabilities represent security bugs (like CVEs, credentials in plaintext) that permit immediate software compromise."
      },
      {
        "id": 13,
        "question": "What K8s object represents internal networking abstractions providing stable IPs and load-balancing?",
        "options": [
          "Service",
          "Pod",
          "Namespace",
          "Ingress"
        ],
        "answer": 0,
        "explanation": "Services establish stable endpoints for sets of Pods, load-balancing connections as pods are rescheduled."
      },
      {
        "id": 14,
        "question": "What is a Kubernetes Persistent Volume (PV)?",
        "options": [
          "The actual storage resource provisioned by cluster administrators.",
          "A user request for container storage.",
          "An ingress route trigger path.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "PVs represent hardware-backed storage resources (e.g. NFS volumes, AWS EBS drives) managed by the Kubernetes control plane."
      },
      {
        "id": 15,
        "question": "What are characteristics of RPC APIs? (multiple choice - multiple answers possible)",
        "options": [
          "Focus on execution verbs and remote actions (e.g. getUser()).",
          "Tight coupling between client actions and server procedures.",
          "Focus on noun-based resource path URLs.",
          "Stateless resource representations."
        ],
        "answer": [0, 1],
        "explanation": "RPC models expose remote procedures as verbs. Clients request specific action calls, tightly coupling the API interface to local code structures."
      },
      {
        "id": 16,
        "question": "In Fission, what is the role of PoolManager compared to NewDeploy?",
        "options": [
          "PoolManager specializes generic warm container pools; NewDeploy dynamically provisions dedicated Services and pods.",
          "PoolManager requires Type-2 hypervisors; NewDeploy runs on Type-1 bare metal hosts.",
          "PoolManager is for SLURM jobs; NewDeploy runs on OpenStack Nova compute nodes.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "PoolManager handles rapid, low-latency cold starts using generic pools. NewDeploy autoscales dedicated pods based on CPU/concurrency triggers."
      },
      {
        "id": 17,
        "question": "What Big Data characteristic refers to the diversity and format formats of datasets?",
        "options": [
          "Variety",
          "Velocity",
          "Volume",
          "Veracity"
        ],
        "answer": 0,
        "explanation": "Variety reflects format types, ranging from structured SQL relational schemas to semi-structured JSONs and unstructured media blobs."
      },
      {
        "id": 18,
        "question": "Which database setups are CA systems under CAP? (multiple choice - multiple answers possible)",
        "options": [
          "Federated PostgreSQL using 2-Phase Commit",
          "Single-node PostgreSQL databases",
          "CouchDB leaderless multi-master setups",
          "Apache Cassandra cluster architectures"
        ],
        "answer": [0, 1],
        "explanation": "CA databases mandate global consensus (like 2PC). If any node splits off (partition), writes fail, sacrificing partition tolerance (P)."
      },
      {
        "id": 19,
        "question": "In Elasticsearch, what is Dynamic Mapping?",
        "options": [
          "Automatically identifying field data types from JSON document content.",
          "Automatically sharding indices across physical nodes.",
          "Encrypting user certificates at runtime.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Dynamic mapping detects structures in new JSON records (e.g. strings, integers, dates), automatically formatting schema fields."
      },
      {
        "id": 20,
        "question": "Why does Elasticsearch restrict many-to-many document joins?",
        "options": [
          "Because cross-index relational joins are slow and degrade search latency across distributed cluster nodes.",
          "Because joins violate Paxos consensus algorithms.",
          "Because joined documents cannot be sharded.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "ES is optimized for fast search index scanning. Relational M:N joins across nodes degrade performance; users should denormalize data."
      },
      {
        "id": 21,
        "question": "According to Popek-Goldberg hypervisor virtualization theorem, a CPU is virtualizable if and only if:",
        "options": [
          "All sensitive instructions are a subset of privileged instructions.",
          "It runs Docker containers natively in user space.",
          "It has separate L1 and L2 cache lines.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "A processor is virtualizable only if all instructions that modify/read hardware settings (sensitive) trigger hardware traps when run in user space (privileged)."
      },
      {
        "id": 22,
        "question": "What is the role of a Type-1 hypervisor?",
        "options": [
          "Running directly on raw physical server hardware to manage VMs.",
          "Running as an application on a host OS (hosted).",
          "Deploying container namespaces inside Docker.",
          "Managing SLURM sbatch queues."
        ],
        "answer": 0,
        "explanation": "Type-1 hypervisors execute on raw server hardware (bare metal), controlling physical resources directly to optimize virtualization performance."
      },
      {
        "id": 23,
        "question": "In AWS VPC, what is an Internet Gateway?",
        "options": [
          "A VPC component that enables communication between public subnets and the internet.",
          "An SSH gateway for database instances.",
          "A Docker container bridge interface.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Internet Gateways route traffic from public VPC subnets to the public web, mapping private IPs to public IP records."
      },
      {
        "id": 24,
        "question": "What does a PKI Certification Authority digitally sign to establish trust?",
        "options": [
          "Public keys, validating key ownership records.",
          "Private keys, decrypting SSH tunnels.",
          "Glance image snapshots.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "CAs sign public certificates, binding user identities to keys to build cryptographic trust webs (like TLS/HTTPS)."
      },
      {
        "id": 25,
        "question": "What is a Shibboleth Identity Provider (IdP) in SAML SSO systems? (multiple choice - multiple answers possible)",
        "options": [
          "A server that authenticates users (e.g. login credentials) and issues SAML assertions.",
          "An administrative hub managing core LDAP directory records.",
          "A resources gatekeeper consuming AAF certificates.",
          "An OpenStack database proxy node."
        ],
        "answer": [0, 1],
        "explanation": "IdPs authenticate users against local directory records (LDAP/AD) and issue signed assertions containing user identity details."
      },
      {
        "id": 26,
        "question": "Compare supercomputer LINPACK benchmarks to HPC cluster architectures.",
        "options": [
          "Supercomputer speeds are measured in FLOPS; Clusters group individual hosts via LANs to execute parallel MPI code.",
          "Supercomputers use local Docker volumes; Clusters use Type-2 hypervisors.",
          "Supercomputers run Fission; Clusters run on AWS Nitro.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "Supercomputers are benchmarked on peak floating-point execution. Clusters link standard commodity systems via network frameworks to share workloads."
      },
      {
        "id": 27,
        "question": "In SLURM scripts, what specifies the queue partition to run a job?",
        "options": [
          "#SBATCH -p <partition>",
          "#SBATCH -t <walltime>",
          "#SBATCH -n <nodes>",
          "None of the above"
        ],
        "answer": 0,
        "explanation": "The `-p` directive specifies the target partition queue (like `sapphire` or `gpu`) for job scheduling."
      },
      {
        "id": 28,
        "question": "What operations represent vertical scaling? (multiple choice - multiple answers possible)",
        "options": [
          "Upgrading an EC2 VM instance type to double CPU cores",
          "Increasing physical RAM allocated to a hypervisor host node",
          "Adding five VM instances to a public cloud cluster",
          "Replicating indexes across database clusters"
        ],
        "answer": [0, 1],
        "explanation": "Vertical scaling upgrades resource sizes (RAM, cores, hardware power) of a single node rather than horizontal cluster expansions."
      },
      {
        "id": 29,
        "question": "In OpenStack, what component exposes REST APIs to receive VM creation requests?",
        "options": [
          "nova-api",
          "nova-compute",
          "nova-scheduler",
          "Glance"
        ],
        "answer": 0,
        "explanation": "nova-api accepts user REST requests, verifies authorizations, and coordinates VM operations using the AMQP messaging bus."
      },
      {
        "id": 30,
        "question": "What is the primary role of Docker Volumes?",
        "options": [
          "To provide persistent storage directories managed by the Docker daemon.",
          "To expose containers directly to host interfaces.",
          "To build multi-tenant hypervisor environments.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Volumes bypass copy-on-write container layers, storing data directly on the host to ensure persistence across container lifecycles."
      },
      {
        "id": 31,
        "question": "What K8s resource is a request for storage containing requirements (like size and access modes)?",
        "options": [
          "PersistentVolumeClaim (PVC)",
          "PersistentVolume (PV)",
          "StorageClass",
          "Ingress"
        ],
        "answer": 0,
        "explanation": "PVCs represent developer storage requests. The control plane matches claims to appropriate cluster PVs."
      },
      {
        "id": 32,
        "question": "Which HTTP method should be used to fetch resource representations from REST endpoints without modifying database state?",
        "options": [
          "GET",
          "POST",
          "PUT",
          "DELETE"
        ],
        "answer": 0,
        "explanation": "GET operations must be safe and idempotent, returning read-only representations without triggering side effects."
      },
      {
        "id": 33,
        "question": "What does a Fission route Trigger link?",
        "options": [
          "An HTTP request method and URL path to a target Fission Function.",
          "A Cinder volume to an active Glance image template.",
          "A sbatch script to a Sapphire queue partition.",
          "None of the above."
        ],
        "answer": 0,
        "explanation": "Routes translate incoming web calls (URL, method) into triggers that specialization daemons handle to run target functions."
      },
      {
        "id": 34,
        "question": "What Big Data characteristic refers to the velocity of dataset updates and real-time processing requirements?",
        "options": [
          "Velocity",
          "Volume",
          "Variety",
          "Veracity"
        ],
        "answer": 0,
        "explanation": "Velocity measures streaming speed (records per second) where systems must process inputs on the fly (e.g. IoT updates, log streams)."
      },
      {
        "id": 35,
        "question": "In CAP, how does CouchDB multi-master replication operate?",
        "options": [
          "As an AP system, permitting concurrent writes to any partition and reconciling conflicts asynchronously.",
          "As a CA system, running two-phase commits to lock indices.",
          "As a CP system, aborting writes if a partition loses its quorum.",
          "All of the above."
        ],
        "answer": 0,
        "explanation": "CouchDB allows independent writes on divided nodes. When connection recovers, replication shares document revision histories for eventual consistency checks."
      }
    ],
    "shortAnswers": [
      {
        "id": 1,
        "question": "Describe the security roles: Authentication, Authorisation, and Audit in distributed cloud security architectures. [5]",
        "maxMarks": 5,
        "sampleAnswer": "1. **Authentication**: Confirms user identity (e.g. verifying credentials, passwords, or public SSH keys). Prevents spoofing.\n2. **Authorisation**: Enforces permission bounds (what resources/actions the authenticated user can access). E.g. read-only permissions on a DB.\n3. **Audit**: Records logs of user operations (who did what, when, and where). Vital for threat hunting and tracking administrative commands."
      },
      {
        "id": 2,
        "question": "Explain how OpenStack Nova API, Scheduler, and Hypervisors collaborate to process a new virtual machine instance launch request. [5]",
        "maxMarks": 5,
        "sampleAnswer": "1. **nova-api**: Receives request REST calls, authenticates users with Keystone, registers database VM records, and publishes a build job to the AMQP message bus.\n2. **nova-scheduler**: Fetches the job, filters hypervisor hosts by resource requirements (cores, ram), and publishes the VM build command to a specific hypervisor's message queue.\n3. **nova-compute**: Active daemon on the host grabs the message and executes virtualization commands (using libvirt/QEMU) to allocate memory, spawn vCPUs, mount volumes, and boot the VM instance."
      },
      {
        "id": 3,
        "question": "Discuss the advantages and security risks of multi-tenant public cloud services compared to private cloud environments. [5]",
        "maxMarks": 5,
        "sampleAnswer": "1. **Advantages**: Public clouds offer rapid elasticity, low upfront costs (pay-as-you-go), and offload hardware maintenance. High physical reliability and geographical scaling options.\n2. **Security Risks**: Shared physical hardware introduces side-channel attacks (cache leakage, Meltdown). Misconfigurations can expose internal networks to co-hosted tenants. Data residency compliance is harder to control.\n3. **Private Cloud Comparison**: Private clouds offer complete physical hardware isolation, zero shared tenancy risks, and strict data control, but have high capital expense, scale peak loads poorly, and require dedicated administrative staff."
      }
    ]
  }
];
