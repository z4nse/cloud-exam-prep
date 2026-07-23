window.MC_QUIZ_QUESTIONS = [
  {
    "id": 1,
    "week": 1,
    "question": "Your pipeline processes a 400GB log set comfortably on one 512GB-RAM server in 20 minutes. By the course's definition, this dataset is:",
    "options": [
      "big data, because logs are unstructured",
      "big data, because it exceeds 100GB",
      "not big only if it is under 1TB",
      "not really 'big', since a single server handles it"
    ],
    "answer": 3,
    "explanation": "Course quip: if a single server can process it, it isn't big."
  },
  {
    "id": 2,
    "week": 1,
    "question": "A colleague reruns last year's analysis code and gets different numbers. The most course-relevant explanation is:",
    "options": [
      "Python is non-deterministic by design",
      "the CPU is faster now",
      "the data doubled overnight",
      "software/compiler/option drift broke reproducibility"
    ],
    "answer": 3,
    "explanation": "The Ten-Year Reproducibility Challenge: versions/compilers/options drift."
  },
  {
    "id": 3,
    "week": 1,
    "question": "You move a working serial program onto SPARTAN expecting it to run faster automatically. It does not. Why?",
    "options": [
      "the scheduler does not parallelise your code for you",
      "the login node is faster",
      "serial code is banned",
      "SPARTAN throttles serial code"
    ],
    "answer": 0,
    "explanation": "SLURM allocates resources; you must parallelise the code yourself."
  },
  {
    "id": 4,
    "week": 1,
    "question": "Which observations would each count as a distinct 'Big X' driver in the course framing? (Select all that apply) *(Select all that apply)*",
    "options": [
      "a faster single CPU clock (Big Speed)",
      "a dataset too large for one machine (Big Data)",
      "a simulation needing thousands of cores (Big Compute)",
      "cross-institution data sharing (Big Collaboration)"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "There is no 'Big Speed' driver; the others map to the course's set."
  },
  {
    "id": 5,
    "week": 1,
    "question": "A volunteer-computing project (idle home PCs worldwide) versus a fast-interconnect HPC rack differ mainly in that the former is:",
    "options": [
      "tightly coupled with shared memory",
      "loosely coupled with pooled, intermittent resources",
      "a single SMP machine",
      "an MPI ring on one node"
    ],
    "answer": 1,
    "explanation": "Volunteer computing (SETI@home/BOINC) is loosely coupled resource pooling."
  },
  {
    "id": 6,
    "week": 1,
    "question": "A distributed job intermittently produces wrong totals under load. The most course-relevant root cause is:",
    "options": [
      "using Python instead of Java",
      "too few CPU cores",
      "delayed or lost messages / shared-state issues",
      "disk fragmentation"
    ],
    "answer": 2,
    "explanation": "Distributed systems risk lost/delayed messages and shared-state problems."
  },
  {
    "id": 7,
    "week": 1,
    "question": "Reading a 2GB file fully into a dict works for the small test file but the big file crashes the node. The fix that also scales horizontally is to:",
    "options": [
      "stream/process line-by-line without loading all into memory",
      "request a bigger login node",
      "compress the file first",
      "switch to a relational database"
    ],
    "answer": 0,
    "explanation": "Streaming avoids RAM exhaustion and scales out across nodes."
  },
  {
    "id": 8,
    "week": 1,
    "question": "Which scenarios are explicitly within the course's stated outcomes? (Select all that apply) *(Select all that apply)*",
    "options": [
      "deploying a scalable app on the cloud",
      "submitting MPI jobs on an HPC system",
      "building a team software system end-to-end",
      "fabricating a custom GPU"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Chip fabrication is not an outcome; the others are."
  },
  {
    "id": 9,
    "week": 1,
    "question": "Adding a second node to your HPC job gives almost no speedup over one node. The most plausible reason is:",
    "options": [
      "two nodes share one core",
      "nodes always halve performance",
      "inter-node communication overhead offsets the gains for this workload",
      "the data shrank automatically"
    ],
    "answer": 2,
    "explanation": "Cross-node overhead can erase benefit when the workload doesn't need it."
  },
  {
    "id": 10,
    "week": 1,
    "question": "You run heavy compute directly on the shared login node 'just this once'. The course's objection is that this:",
    "options": [
      "makes your code faster but is rude",
      "is the only correct way to submit",
      "uses no resources",
      "degrades the shared node for all other users"
    ],
    "answer": 3,
    "explanation": "The login node is shared; running jobs there harms everyone."
  },
  {
    "id": 11,
    "week": 1,
    "question": "You benchmark on a busy HPC node Monday morning, then again Sunday night, and get very different times. The most defensible way to report performance is to:",
    "options": [
      "quote the slowest run only",
      "run multiple trials and acknowledge shared-system contention",
      "assume timing is deterministic",
      "quote the single fastest run"
    ],
    "answer": 1,
    "explanation": "Contention means you report multiple trials and note variability."
  },
  {
    "id": 12,
    "week": 1,
    "question": "A startup says 'we have big data - it's 50GB'. By the course's lens, the better question to ask is:",
    "options": [
      "is it on the cloud?",
      "is it encrypted?",
      "can a single server still process it comfortably?",
      "is it in JSON?"
    ],
    "answer": 2,
    "explanation": "The threshold is whether one server can handle it, not raw GB."
  },
  {
    "id": 13,
    "week": 1,
    "question": "Which is the clearest example of 'Big Distribution' rather than 'Big Compute'?",
    "options": [
      "a single huge matrix multiply on one supercomputer",
      "one server with 128 cores",
      "a faster CPU clock",
      "data and services spread across many geographic sites"
    ],
    "answer": 3,
    "explanation": "Big Distribution = geographically/organisationally spread resources."
  },
  {
    "id": 14,
    "week": 1,
    "question": "Your reproducibility breaks because a library minor-version bump changed a default. The course framing calls this:",
    "options": [
      "a network partition",
      "software/version drift undermining reproducibility",
      "a scheduling bug",
      "a hardware fault"
    ],
    "answer": 1,
    "explanation": "Version/option drift is the classic reproducibility hazard."
  },
  {
    "id": 15,
    "week": 1,
    "question": "A loosely coupled system's defining weakness compared to a tightly coupled HPC rack is:",
    "options": [
      "it must use one OS image",
      "it cannot pool resources",
      "it has no CPUs",
      "higher latency / unreliable interconnects between nodes"
    ],
    "answer": 3,
    "explanation": "Loosely coupled nodes lack the fast, reliable interconnects of HPC."
  },
  {
    "id": 16,
    "week": 1,
    "question": "Which best distinguishes Big Compute from Big Data as drivers?",
    "options": [
      "Big Compute is about FLOPs/cores; Big Data is about volume/distribution of data",
      "Big Compute needs no CPU",
      "they are the same thing",
      "Big Data needs no storage"
    ],
    "answer": 0,
    "explanation": "Compute-bound vs data-bound problems are different drivers."
  },
  {
    "id": 17,
    "week": 1,
    "question": "A program is embarrassingly parallel but you still see poor speedup. A likely non-algorithmic cause on a shared cluster is:",
    "options": [
      "the data is too small to matter",
      "resource contention/IO bottlenecks rather than the parallel logic",
      "Python cannot parallelise",
      "MPI is broken"
    ],
    "answer": 1,
    "explanation": "On shared systems, contention/IO can dominate even ideal parallelism."
  },
  {
    "id": 18,
    "week": 1,
    "question": "Which would you classify as a hybrid setup?",
    "options": [
      "loosely coupled volunteer nodes feeding a tightly coupled HPC backend",
      "a single laptop",
      "one SMP server",
      "a single VM"
    ],
    "answer": 0,
    "explanation": "Mixing coupling styles is the 'hybrid combinations' case."
  },
  {
    "id": 19,
    "week": 1,
    "question": "The strongest reason the course pairs teamwork with technical content is that real systems are:",
    "options": [
      "always built solo",
      "built without version control",
      "built collaboratively by teams, like industry",
      "never deployed"
    ],
    "answer": 2,
    "explanation": "Team development mirrors professional practice."
  },
  {
    "id": 20,
    "week": 1,
    "question": "A dataset fits in RAM today but is projected to 10x next year. The forward-looking design choice is to:",
    "options": [
      "store it in a single file only",
      "stream/partition so the same code scales out later",
      "buy one giant server forever",
      "hard-code the in-memory approach"
    ],
    "answer": 1,
    "explanation": "Designing for streaming/partitioning future-proofs for growth."
  },
  {
    "id": 21,
    "week": 2,
    "question": "A teammate flags as a 'bug' that your 4-process MPI HelloWorld prints ranks in the order 2,0,3,1. Your best response:",
    "options": [
      "explain that asynchronous independent processes interleave I/O non-deterministically",
      "switch to single-process mode",
      "add a sleep to fix the bug",
      "agree - output must be ordered by rank"
    ],
    "answer": 0,
    "explanation": "MIMD processes run asynchronously; print interleaving is expected, not a bug."
  },
  {
    "id": 22,
    "week": 2,
    "question": "A safety system runs several independent verification algorithms over the same incoming sensor stream and votes on results. In Flynn's taxonomy this is closest to:",
    "options": [
      "SIMD",
      "SISD",
      "MISD",
      "MIMD"
    ],
    "answer": 2,
    "explanation": "Multiple instruction streams over a single data stream = MISD (fault-tolerant niche)."
  },
  {
    "id": 23,
    "week": 2,
    "question": "You call MPI_COMM_RANK before MPI_Init in a C program. The most likely outcome is:",
    "options": [
      "it finalises the program",
      "undefined/erroneous behaviour because MPI isn't initialised",
      "it auto-initialises MPI",
      "it returns rank 0 safely"
    ],
    "answer": 1,
    "explanation": "MPI must be initialised (MPI_Init) before other MPI calls are valid."
  },
  {
    "id": 24,
    "week": 2,
    "question": "On a single shared-memory multicore server you need fine-grained threads sharing one address space. The better fit is:",
    "options": [
      "openMP multithreading",
      "a Docker SWARM",
      "openMPI message passing",
      "a distributed-memory MPI cluster"
    ],
    "answer": 0,
    "explanation": "Shared-memory threading = openMP; MPI suits distributed memory."
  },
  {
    "id": 25,
    "week": 2,
    "question": "Two MPI ranks on different nodes must exchange a value. Choosing 'just read each other's variable' fails because:",
    "options": [
      "the ranks are identical",
      "MPI forbids integers",
      "distributed-memory nodes share no address space; you must send/recv",
      "variables are read-only in MPI"
    ],
    "answer": 2,
    "explanation": "No shared memory across nodes; explicit message passing is required."
  },
  {
    "id": 26,
    "week": 2,
    "question": "Which would correctly classify under MIMD? (Select all that apply) *(Select all that apply)*",
    "options": [
      "a single vector unit applying one op to many elements",
      "a multi-node simulation with per-rank workloads",
      "a modern HPC cluster running different processes on different data",
      "an SMP server with independent threads on shared memory"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "The vector unit is SIMD; the rest are MIMD."
  },
  {
    "id": 27,
    "week": 2,
    "question": "Your SMP program is correct but slower than expected. A characteristic SMP cost you may have overlooked is:",
    "options": [
      "the lack of any shared memory",
      "inter-processor communication/coordination over the bus",
      "the inability to run an OS",
      "a missing hypervisor"
    ],
    "answer": 1,
    "explanation": "SMP adds inter-processor communication complexity/overhead atop CPU work."
  },
  {
    "id": 28,
    "week": 2,
    "question": "MPI_COMM_SIZE returns 1 even though you expected 4 processes. The most likely cause:",
    "options": [
      "the cluster has one core total",
      "MPI_COMM_SIZE always returns 1",
      "you launched without 'mpirun -np 4' (so only one process exists)",
      "rank 0 hides the others"
    ],
    "answer": 2,
    "explanation": "Without launching multiple processes, the communicator size is 1."
  },
  {
    "id": 29,
    "week": 2,
    "question": "You need one process to send the same configuration to all others at start-up. The most appropriate MPI pattern is:",
    "options": [
      "shared-memory write",
      "point-to-point only, in a loop you write",
      "a broadcast (one-to-many) collective",
      "MPI_Finalize"
    ],
    "answer": 2,
    "explanation": "Broadcast is the natural one-to-many collective for this."
  },
  {
    "id": 30,
    "week": 2,
    "question": "A program decomposes a problem into sub-tasks that split, run, then join results on one node. This pattern is most aligned with:",
    "options": [
      "disk sharding",
      "network routing",
      "shared-memory task decomposition (openMP-style)",
      "distributed message passing across nodes"
    ],
    "answer": 2,
    "explanation": "Split/join task decomposition fits shared-memory threading."
  },
  {
    "id": 31,
    "week": 2,
    "question": "Your MPI code deadlocks: every rank calls MPI_Recv before any MPI_Send. The root cause is:",
    "options": [
      "a classic send/recv ordering deadlock (all blocked waiting to receive)",
      "too few cores",
      "MPI_Init was skipped",
      "the data is too large"
    ],
    "answer": 0,
    "explanation": "All-receive-first with blocking calls deadlocks; pair sends/recvs correctly."
  },
  {
    "id": 32,
    "week": 2,
    "question": "A vectorised image filter applies the same operation to every pixel simultaneously. This is best classified as:",
    "options": [
      "MIMD",
      "MISD",
      "SISD",
      "SIMD"
    ],
    "answer": 3,
    "explanation": "One instruction over many data elements = SIMD."
  },
  {
    "id": 33,
    "week": 2,
    "question": "You scale an openMP program from 4 to 32 threads on one node but gains plateau. A likely cause is:",
    "options": [
      "memory-bandwidth/contention limits on the shared-memory node",
      "qcow2 overhead",
      "the network is slow",
      "MPI overhead"
    ],
    "answer": 0,
    "explanation": "Shared-memory bandwidth/contention often caps thread scaling on one node."
  },
  {
    "id": 34,
    "week": 2,
    "question": "Choosing between openMP and MPI for a job that spans 10 separate servers, you pick MPI because:",
    "options": [
      "MPI is multithreaded",
      "openMP needs Docker",
      "openMP threads can't span separate machines' memory; MPI passes messages between them",
      "openMP is slower in general"
    ],
    "answer": 2,
    "explanation": "openMP is single-node shared memory; MPI handles inter-node communication."
  },
  {
    "id": 35,
    "week": 2,
    "question": "MPI_COMM_WORLD represents:",
    "options": [
      "rank 0",
      "the master node only",
      "the default communicator containing all launched processes",
      "the finalize handle"
    ],
    "answer": 2,
    "explanation": "COMM_WORLD is the default group of all processes."
  },
  {
    "id": 36,
    "week": 2,
    "question": "Which pair of MPI calls is essential to bracket any MPI program? (Select all that apply) *(Select all that apply)*",
    "options": [
      "MPI_Init at the start",
      "MPI_Comm_rank to get an ID",
      "MPI_Sleep between sends",
      "MPI_Finalize at the end"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Init/Finalize bracket the program; rank is needed to identify processes; there's no MPI_Sleep requirement."
  },
  {
    "id": 37,
    "week": 2,
    "question": "A reviewer insists MISD is common in everyday computing. The accurate correction:",
    "options": [
      "MISD is the default for laptops",
      "MISD is rare; its niche is fault-tolerant redundant checking",
      "MISD cannot exist",
      "MISD equals MIMD"
    ],
    "answer": 1,
    "explanation": "MISD is uncommon; redundant fault-tolerance is its niche."
  },
  {
    "id": 38,
    "week": 2,
    "question": "Why is SMP described as 'more complex to program' than a uniprocessor despite a single OS?",
    "options": [
      "it cannot run threads",
      "it has no memory",
      "it needs a hypervisor",
      "you must reason about inter-processor coordination/communication, not just CPU logic"
    ],
    "answer": 3,
    "explanation": "Coordinating multiple processors over the bus adds complexity."
  },
  {
    "id": 39,
    "week": 2,
    "question": "A distributed-memory job's correctness depends on message ordering. The course warns this is risky because:",
    "options": [
      "ranks share one address space",
      "messages are always instant",
      "MPI guarantees global locks",
      "messages can be delayed or lost, and state isn't shared"
    ],
    "answer": 3,
    "explanation": "Delayed/lost messages and no shared state are core distributed risks."
  },
  {
    "id": 40,
    "week": 2,
    "question": "Data parallelism vs task parallelism: splitting one dataset across workers doing the same op is:",
    "options": [
      "MISD",
      "task parallelism",
      "SISD",
      "data parallelism"
    ],
    "answer": 3,
    "explanation": "Same operation over data partitions = data parallelism."
  },
  {
    "id": 41,
    "week": 3,
    "question": "Your sbatch script sets '--ntasks=4' but the program still uses only one core. The most likely cause:",
    "options": [
      "SLURM ignores ntasks",
      "the node has one core",
      "ntasks must be 1",
      "you ran 'python script.py' instead of launching it under mpirun/srun"
    ],
    "answer": 3,
    "explanation": "ntasks allocates slots, but you must launch with mpirun/srun to use them."
  },
  {
    "id": 42,
    "week": 3,
    "question": "Two identical runs of your benchmark on SPARTAN give noticeably different wall times. The best explanation:",
    "options": [
      "the binary changed between runs",
      "wall time is random in Linux",
      "contention from other users' jobs on the shared system perturbs timing",
      "your timer is broken"
    ],
    "answer": 2,
    "explanation": "Shared-system contention makes reproducible benchmarking hard."
  },
  {
    "id": 43,
    "week": 3,
    "question": "A job sits in the queue, then fails instantly with a module error. The most likely fix is to:",
    "options": [
      "increase --time",
      "reduce --ntasks to 0",
      "submit from the login node directly",
      "load the required modules (compiler/MPI/mpi4py) in the script"
    ],
    "answer": 3,
    "explanation": "Missing 'module load' lines cause runtime module errors."
  },
  {
    "id": 44,
    "week": 3,
    "question": "You set '--nodes=2 --ntasks=8' and your byte-partitioned MPI app runs no faster than '--nodes=1 --ntasks=8'. The most plausible reason:",
    "options": [
      "the file got smaller",
      "SLURM caps at one node",
      "8 cores is the hardware ceiling",
      "inter-node communication overhead cancels the extra node's benefit here"
    ],
    "answer": 3,
    "explanation": "For this workload, cross-node overhead offsets the second node."
  },
  {
    "id": 45,
    "week": 3,
    "question": "Rank 0 computes byte boundaries and scatters them; ranks process and return counts. If a chunk boundary lands mid-record, the correct handling is to:",
    "options": [
      "ignore partial records silently",
      "discard the whole chunk",
      "have each rank adjust to the nearest newline before processing",
      "merge all chunks on rank 1"
    ],
    "answer": 2,
    "explanation": "Each rank aligns to a newline so records aren't split across ranks."
  },
  {
    "id": 46,
    "week": 3,
    "question": "Which SLURM directives would you legitimately combine in one A1 script? (Select all that apply) *(Select all that apply)*",
    "options": [
      "--ntasks and --cpus-per-task",
      "--job-name and --time",
      "--nodes for multi-node runs",
      "--docker-image to pull a container"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "There is no --docker-image directive in SLURM."
  },
  {
    "id": 47,
    "week": 3,
    "question": "You want 100 near-identical parameter runs without writing 100 scripts. The cleanest SLURM mechanism is:",
    "options": [
      "running them on the login node",
      "one giant sequential job",
      "a job array",
      "a Docker Compose stack"
    ],
    "answer": 2,
    "explanation": "Job arrays handle many similar tasks efficiently."
  },
  {
    "id": 48,
    "week": 3,
    "question": "Your A1 report shows 1->8 cores gave ~10x speedup but optimised JSON parsing then cut times further. This illustrates that:",
    "options": [
      "speedup is fixed by node count",
      "adding cores is the only lever",
      "optimisation never helps",
      "algorithmic/library choices (e.g. faster JSON) also drive performance"
    ],
    "answer": 3,
    "explanation": "Both parallelism and per-task efficiency (orjson vs json) matter."
  },
  {
    "id": 49,
    "week": 3,
    "question": "Job B must run only after Job A succeeds. The SLURM feature to use is:",
    "options": [
      "a job array",
      "a job dependency",
      "a higher --time on A",
      "running both on the login node"
    ],
    "answer": 1,
    "explanation": "Dependencies sequence jobs (B after A)."
  },
  {
    "id": 50,
    "week": 3,
    "question": "On a shared HPC facility, the A1 instructions say to measure runtime as:",
    "options": [
      "the fastest single rank",
      "only rank 0's time",
      "first-job start to last-job finish, queue time ignored",
      "including queue time"
    ],
    "answer": 2,
    "explanation": "First-start to last-finish; queue time may be ignored."
  },
  {
    "id": 51,
    "week": 3,
    "question": "Your A1 app reads the whole file into a list on rank 0 then scatters strings; it OOMs on the big file. The better design:",
    "options": [
      "use a bigger flavor",
      "have each rank stream its own byte range from disk, aligning to newlines",
      "run on the login node",
      "convert to CSV"
    ],
    "answer": 1,
    "explanation": "Per-rank streaming of byte ranges avoids loading the whole file."
  },
  {
    "id": 52,
    "week": 3,
    "question": "A job dies after exactly 10 minutes though the work needs 30. The most likely cause:",
    "options": [
      "the '--time' limit was set too low and SLURM killed it",
      "missing module load",
      "too many cores",
      "wrong availability zone"
    ],
    "answer": 0,
    "explanation": "Exceeding --time causes SLURM to terminate the job."
  },
  {
    "id": 53,
    "week": 3,
    "question": "You request '--ntasks=8' on one node but the node only has 4 cores. The likely effect:",
    "options": [
      "the job is rejected as illegal syntax",
      "SLURM adds cores",
      "oversubscription/contention as 8 tasks share 4 cores",
      "it runs 8 fully parallel cores"
    ],
    "answer": 2,
    "explanation": "More tasks than cores leads to oversubscription/contention."
  },
  {
    "id": 54,
    "week": 3,
    "question": "Two ranks must combine partial language counts into a global total. The natural MPI step is:",
    "options": [
      "MPI_Finalize",
      "a gather/reduce of local counts to rank 0",
      "broadcast from every rank",
      "each rank writes its own file and you merge by hand"
    ],
    "answer": 1,
    "explanation": "Gather/reduce aggregates per-rank results at the root."
  },
  {
    "id": 55,
    "week": 3,
    "question": "Your speedup from 1 to 8 cores is ~6x, not 8x. The most principled explanation:",
    "options": [
      "Amdahl-style serial fractions/overhead limit ideal linear speedup",
      "the cluster is broken",
      "JSON is unparseable",
      "you used too few nodes"
    ],
    "answer": 0,
    "explanation": "Serial portions and overhead prevent perfect linear scaling."
  },
  {
    "id": 56,
    "week": 3,
    "question": "You see the job running on the login node by mistake. The correct remedy:",
    "options": [
      "cancel it and resubmit via sbatch to compute nodes",
      "switch to Docker",
      "add more --time",
      "leave it - login nodes are for compute"
    ],
    "answer": 0,
    "explanation": "Compute belongs on worker nodes via sbatch, not the login node."
  },
  {
    "id": 57,
    "week": 3,
    "question": "Which combination correctly scales a single MPI program across two servers? (Select all that apply) *(Select all that apply)*",
    "options": [
      "launching via mpirun/srun",
      "--nodes=2",
      "adding --network host",
      "--ntasks set to span both nodes"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "--network host is Docker, not SLURM; the rest are needed."
  },
  {
    "id": 58,
    "week": 3,
    "question": "orjson replaced json and cut parse time substantially. This demonstrates that on HPC:",
    "options": [
      "per-task library/algorithm efficiency also drives wall time",
      "parsing is free",
      "optimisation is pointless",
      "only core count matters"
    ],
    "answer": 0,
    "explanation": "Faster libraries improve performance alongside parallelism."
  },
  {
    "id": 59,
    "week": 3,
    "question": "A job array of 100 tasks each processes one input shard. The benefit over a manual loop is:",
    "options": [
      "the scheduler manages and parallelises the many similar tasks",
      "it needs no SLURM",
      "it runs on the login node",
      "it serialises everything"
    ],
    "answer": 0,
    "explanation": "Job arrays let the scheduler handle many similar tasks efficiently."
  },
  {
    "id": 60,
    "week": 3,
    "question": "Reporting A1 timing, you exclude queue wait because the assignment focuses on:",
    "options": [
      "queue optimisation",
      "network latency",
      "the application's run time and HPC benchmarking lessons",
      "billing"
    ],
    "answer": 2,
    "explanation": "Focus is run-time/benchmarking; queue time may be ignored."
  },
  {
    "id": 61,
    "week": 4,
    "question": "You launch an MRC VM with the default network and try to SSH from home but it times out. The most likely cause:",
    "options": [
      "the image has no SSH server by default",
      "the flavor is too small",
      "Nova is down",
      "the private IP needs the UniMelb VPN from off-campus"
    ],
    "answer": 3,
    "explanation": "Default-network private IPs require the VPN when off-campus."
  },
  {
    "id": 62,
    "week": 4,
    "question": "Your 'openstack server create' command fails with an authentication error before doing anything. The first thing to check:",
    "options": [
      "whether you sourced the OpenRC file (auth env vars)",
      "the availability zone",
      "the flavor name",
      "the security group"
    ],
    "answer": 0,
    "explanation": "Without sourcing OpenRC, the CLI has no credentials."
  },
  {
    "id": 63,
    "week": 4,
    "question": "You created a 10GB volume but the VM still shows the original disk size. The missing step is most likely:",
    "options": [
      "attaching (and then mounting) the volume to the instance",
      "creating a new security group",
      "resizing the flavor",
      "rebooting Nova"
    ],
    "answer": 0,
    "explanation": "A created volume must be attached and mounted to be usable."
  },
  {
    "id": 64,
    "week": 4,
    "question": "Web traffic to your instance on port 80 is refused, though the app is running. The most likely fix:",
    "options": [
      "switch image format to qcow2",
      "change the flavor",
      "add a security-group rule allowing inbound TCP/80",
      "source a different OpenRC"
    ],
    "answer": 2,
    "explanation": "Security groups gate traffic; TCP/80 must be allowed."
  },
  {
    "id": 65,
    "week": 4,
    "question": "Which of these correctly attribute an OpenStack responsibility? (Select all that apply) *(Select all that apply)*",
    "options": [
      "Keystone handles identity",
      "Cinder provides object storage",
      "Nova spawns/schedules VMs",
      "Glance serves disk images"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Cinder is block storage; Swift is object storage."
  },
  {
    "id": 66,
    "week": 4,
    "question": "You need thin-provisioned VM disks that only consume space as data is written. The image format to prefer:",
    "options": [
      "csv",
      "qcow2",
      "vhd-fixed",
      "raw"
    ],
    "answer": 1,
    "explanation": "qcow2 uses copy-on-write lazy allocation (thin provisioning)."
  },
  {
    "id": 67,
    "week": 4,
    "question": "Two students both 'openstack server create' but one says object-action feels backwards. The correct convention is:",
    "options": [
      "action-object, like kubectl",
      "object-action (e.g. 'server create')",
      "verb-only",
      "there is no convention"
    ],
    "answer": 1,
    "explanation": "OpenStack uses object-action; kubectl uses action-object."
  },
  {
    "id": 68,
    "week": 4,
    "question": "Your project can't launch the large flavor you want. The most likely reason:",
    "options": [
      "the volume is detached",
      "the image is missing",
      "your project quota caps compute/memory/storage",
      "the VPN is off"
    ],
    "answer": 2,
    "explanation": "Quotas constrain which/how many flavors you can run."
  },
  {
    "id": 69,
    "week": 4,
    "question": "A teammate claims PaaS gives you raw VMs to administer. The accurate correction:",
    "options": [
      "that's IaaS; PaaS abstracts the platform so you deploy apps without managing the OS",
      "they're identical",
      "PaaS manages your application logic for you",
      "PaaS gives bare metal only"
    ],
    "answer": 0,
    "explanation": "IaaS = manage VMs/OS; PaaS = managed platform/runtime."
  },
  {
    "id": 70,
    "week": 4,
    "question": "You want repeatable, reviewable cloud provisioning instead of clicking the Horizon UI. The right category of tool:",
    "options": [
      "a container registry",
      "a hypervisor",
      "Infrastructure-as-Code (Terraform/Ansible)",
      "a word processor"
    ],
    "answer": 2,
    "explanation": "IaC tools give repeatable, version-controlled provisioning."
  },
  {
    "id": 71,
    "week": 4,
    "question": "Your instance has a public-looking task but only a private IP. A teammate off-campus can't reach it. Besides VPN, a valid alternative the course notes is constrained by:",
    "options": [
      "limited resource allocation may prevent assigning externally-accessible IPs",
      "unlimited public IPs for all",
      "Glance image formats",
      "the flavor's RAM"
    ],
    "answer": 0,
    "explanation": "Resource limits can prevent public IPs, leaving VPN-only access (as in the friends report)."
  },
  {
    "id": 72,
    "week": 4,
    "question": "You attached a volume but 'df -h' shows no extra space. The remaining step is to:",
    "options": [
      "resize the flavor",
      "restart Keystone",
      "create another volume",
      "format and mount the attached volume in the guest"
    ],
    "answer": 3,
    "explanation": "An attached block volume must be formatted/mounted to appear."
  },
  {
    "id": 73,
    "week": 4,
    "question": "'openstack server create' succeeds but the VM is unreachable on SSH (port 22). Most likely:",
    "options": [
      "the flavor is too big",
      "no security-group rule allows inbound TCP/22",
      "the image lacks a kernel",
      "OpenRC wasn't sourced (it would have failed earlier)"
    ],
    "answer": 1,
    "explanation": "SSH needs an allowed inbound 22 rule in the security group."
  },
  {
    "id": 74,
    "week": 4,
    "question": "Mapping OpenStack services: which assignment is wrong?",
    "options": [
      "Glance = identity/auth",
      "Neutron = networking",
      "Cinder = block storage",
      "Swift = object storage"
    ],
    "answer": 0,
    "explanation": "Glance is the image service; Keystone is identity/auth."
  },
  {
    "id": 75,
    "week": 4,
    "question": "You want repeatable cloud provisioning that a reviewer can diff in Git. The friends report used:",
    "options": [
      "Ansible (Infrastructure as Code) for bootstrapping",
      "a single shell command run once",
      "manual Horizon clicks",
      "no automation"
    ],
    "answer": 0,
    "explanation": "Ansible IaC gives repeatable, reviewable provisioning."
  },
  {
    "id": 76,
    "week": 4,
    "question": "A thin-provisioned image grows as data is written; a colleague picks 'raw' and wastes space. Better choice and why:",
    "options": [
      "raw, because it's compressed",
      "qcow2, because copy-on-write allocates lazily",
      "csv, because it's small",
      "vhd-fixed, because it pre-allocates"
    ],
    "answer": 1,
    "explanation": "qcow2 thin-provisions; raw/fixed pre-allocate."
  },
  {
    "id": 77,
    "week": 4,
    "question": "Which steps belong to provisioning a usable VM with extra disk? (Select all that apply) *(Select all that apply)*",
    "options": [
      "add a security-group rule for needed ports",
      "create the instance",
      "create and attach a volume",
      "push a Docker image to Hub"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pushing to Docker Hub isn't part of OpenStack VM provisioning."
  },
  {
    "id": 78,
    "week": 4,
    "question": "Your CLI commands suddenly fail with 'Missing value auth-url' mid-session. The cause:",
    "options": [
      "the volume detached",
      "the AZ is wrong",
      "the flavor expired",
      "the OpenStack auth env vars (OpenRC) aren't sourced in this shell"
    ],
    "answer": 3,
    "explanation": "A new shell needs OpenRC sourced for credentials."
  },
  {
    "id": 79,
    "week": 4,
    "question": "Magnum's relationship to your Week 6 k8s cluster is that it:",
    "options": [
      "provisions the cluster's VMs/resources from a template",
      "runs your containers directly",
      "replaces kubectl",
      "stores images"
    ],
    "answer": 0,
    "explanation": "Magnum provisions k8s clusters via templates (openstack coe)."
  },
  {
    "id": 80,
    "week": 4,
    "question": "You need block storage that persists if the VM is deleted. The service:",
    "options": [
      "Neutron networks",
      "Swift object storage only",
      "Glance images",
      "Cinder block volumes"
    ],
    "answer": 3,
    "explanation": "Cinder volumes provide persistent block storage."
  },
  {
    "id": 81,
    "week": 5,
    "question": "You start two containers each with '-p 8080:80' on the same host; the second fails to bind. The reason:",
    "options": [
      "host port 8080 is already taken by the first container",
      "Docker forbids two containers",
      "port 80 is illegal",
      "images can't be reused"
    ],
    "answer": 0,
    "explanation": "A host port can map to only one container at a time."
  },
  {
    "id": 82,
    "week": 5,
    "question": "'curl localhost:80' reaches your nginx container with '--network host' on an Ubuntu server, but the same trick fails on Docker Desktop for Mac. Why?",
    "options": [
      "nginx is Linux-only",
      "Macs block port 80",
      "host mode needs a SHA",
      "Docker Desktop runs in a hidden Linux VM, so 'host' is the VM's network, not the laptop's"
    ],
    "answer": 3,
    "explanation": "Host networking refers to the hidden VM on Docker Desktop."
  },
  {
    "id": 83,
    "week": 5,
    "question": "Your image runs locally but a teammate's 'docker pull yourname/app' fails. The most likely omission:",
    "options": [
      "you never tagged and pushed the image to the registry",
      "you didn't run the container",
      "you used the wrong CPU",
      "the Dockerfile lacked EXPOSE"
    ],
    "answer": 0,
    "explanation": "To share, you must tag and push to a registry."
  },
  {
    "id": 84,
    "week": 5,
    "question": "After editing only the last line of a long Dockerfile, the rebuild is fast and reuses earlier steps. This is because Docker:",
    "options": [
      "always rebuilds everything",
      "caches unchanged layers and rebuilds from the first changed instruction",
      "compresses the image",
      "skips the build"
    ],
    "answer": 1,
    "explanation": "Layer caching rebuilds only from the first changed instruction onward."
  },
  {
    "id": 85,
    "week": 5,
    "question": "You want each container to have its own IP yet still expose ports to the host on a single machine. The default driver that fits:",
    "options": [
      "none",
      "overlay",
      "host",
      "bridge"
    ],
    "answer": 3,
    "explanation": "bridge gives per-container IPs with host port exposure; host shares one IP."
  },
  {
    "id": 86,
    "week": 5,
    "question": "Which statements about containers vs VMs hold in a troubleshooting context? (Select all that apply) *(Select all that apply)*",
    "options": [
      "a container sharing the host kernel explains its small footprint",
      "a container starting in seconds vs a VM in minutes is expected",
      "needing stronger isolation may justify a VM over a container",
      "a container can boot a different OS kernel than the host"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Containers share the host kernel, so no foreign kernel."
  },
  {
    "id": 87,
    "week": 5,
    "question": "You need to manage cooperating containers (nginx + app + db) on a single host for local dev. The right tool:",
    "options": [
      "Docker Compose",
      "Kubernetes Ingress",
      "Docker SWARM",
      "Magnum"
    ],
    "answer": 0,
    "explanation": "Compose manages multi-container apps on one host; SWARM spans hosts."
  },
  {
    "id": 88,
    "week": 5,
    "question": "A reviewer says SWARM and Kubernetes are interchangeable. The fair correction:",
    "options": [
      "SWARM is a database",
      "both manage containers across nodes, but K8s adds far richer abstractions/tooling",
      "SWARM has more abstractions than K8s",
      "K8s only runs on one host"
    ],
    "answer": 1,
    "explanation": "Same core role; K8s adds much more for complex systems."
  },
  {
    "id": 89,
    "week": 5,
    "question": "Your CI passes tests but nothing reaches production automatically. To get auto-deploy after CI you need:",
    "options": [
      "a bigger VM",
      "a new registry",
      "a Continuous Delivery (CD) stage",
      "more unit tests"
    ],
    "answer": 2,
    "explanation": "CD automates deployment after CI passes."
  },
  {
    "id": 90,
    "week": 5,
    "question": "'docker ps' shows nothing though you just 'docker create'd a container. Why?",
    "options": [
      "create also starts it",
      "the image was deleted",
      "ps is broken",
      "create makes the container but doesn't start it; use 'docker ps -a' or 'docker start'"
    ],
    "answer": 3,
    "explanation": "create != start; ps shows only running containers."
  },
  {
    "id": 91,
    "week": 5,
    "question": "Your Dockerfile installs deps in an early layer, then copies code last. After a code-only change, rebuild is fast because:",
    "options": [
      "the image is recompressed",
      "Docker rebuilds everything anyway",
      "the dependency layer is cached; only the changed code layer rebuilds",
      "layers are ignored"
    ],
    "answer": 2,
    "explanation": "Ordering stable steps first maximises layer-cache reuse."
  },
  {
    "id": 92,
    "week": 5,
    "question": "Two containers must both serve on port 80 of the host. The clean solution is to:",
    "options": [
      "delete one image",
      "use --network host for both",
      "run them in the same container",
      "map them to different host ports (e.g. 8080:80 and 8081:80) or use a reverse proxy"
    ],
    "answer": 3,
    "explanation": "Distinct host ports (or a proxy) avoid the host-port clash."
  },
  {
    "id": 93,
    "week": 5,
    "question": "A CI build passes but the deployed container behaves differently from local. A common Docker cause is:",
    "options": [
      "the registry is down",
      "an unpinned base image tag (':latest') pulled a different version",
      "ports are illegal",
      "Compose is required"
    ],
    "answer": 1,
    "explanation": "':latest' drift causes 'works locally, breaks in CI/prod'."
  },
  {
    "id": 94,
    "week": 5,
    "question": "Choosing an orchestrator: you only need several cooperating containers on one dev laptop. Overkill would be:",
    "options": [
      "a full Kubernetes cluster",
      "Docker Compose",
      "docker run with -p",
      "a single Dockerfile"
    ],
    "answer": 0,
    "explanation": "Compose suffices on one host; K8s is overkill there."
  },
  {
    "id": 95,
    "week": 5,
    "question": "Which are accurate about Docker isolation? (Select all that apply) *(Select all that apply)*",
    "options": [
      "isolation is process-level, lighter than a VM",
      "it uses kernel namespaces and cgroups",
      "containers share the host kernel",
      "each container boots its own kernel"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Containers don't boot their own kernel."
  },
  {
    "id": 96,
    "week": 5,
    "question": "A teammate can build your image but can't run it because a needed env var is missing. The fix in the run command is:",
    "options": [
      "docker ps -a",
      "docker rm",
      "docker tag",
      "docker run -e VAR=value (or set it in the image/compose)"
    ],
    "answer": 3,
    "explanation": "Pass environment variables at run (or bake/compose them)."
  },
  {
    "id": 97,
    "week": 5,
    "question": "'docker run' on Docker Desktop (Mac) with '-p 8080:80' works to reach the app, but '--network host' doesn't expose to the laptop. Why the difference?",
    "options": [
      "port-mapping (-p) is bridged out of the VM, while 'host' refers to the hidden VM's network",
      "-p is illegal on Mac",
      "host mode is faster",
      "both should behave identically"
    ],
    "answer": 0,
    "explanation": "Published ports are forwarded from the VM; host networking is the VM's."
  },
  {
    "id": 98,
    "week": 5,
    "question": "You want the smallest possible footprint and fastest start for a stateless microservice. Prefer:",
    "options": [
      "a full VM per service",
      "a hypervisor per service",
      "a container sharing the host kernel",
      "bare metal install"
    ],
    "answer": 2,
    "explanation": "Containers start fast and are lightweight for stateless services."
  },
  {
    "id": 99,
    "week": 5,
    "question": "CI vs CD in one line:",
    "options": [
      "CI deploys; CD tests",
      "CD is manual only",
      "they are identical",
      "CI integrates/tests changes; CD auto-releases after CI passes"
    ],
    "answer": 3,
    "explanation": "CI = integrate/test; CD = automated release post-CI."
  },
  {
    "id": 100,
    "week": 5,
    "question": "A repository on Docker Hub holds many tagged builds of one app. 'app:1.2' vs 'app:latest' differ in that:",
    "options": [
      "they are always identical",
      "tags are random",
      "':latest' is the oldest",
      "tags label specific versions; ':latest' is a moving pointer"
    ],
    "answer": 3,
    "explanation": "Tags identify versions; ':latest' floats to the newest pushed."
  },
  {
    "id": 101,
    "week": 6,
    "question": "You updated a ConfigMap but pods still serve the old value. The correct way to apply it without downtime:",
    "options": [
      "delete the namespace",
      "scale replicas to 0 permanently",
      "edit etcd directly",
      "kubectl rollout restart the deployment (rolling, one pod at a time)"
    ],
    "answer": 3,
    "explanation": "Pods must restart to load new config; rollout restart is graceful."
  },
  {
    "id": 102,
    "week": 6,
    "question": "A pod's Service exists, but an external browser can't reach it. The most likely missing piece:",
    "options": [
      "an Ingress (or a port-forward) for external access",
      "a second replica",
      "a Secret",
      "a ConfigMap"
    ],
    "answer": 0,
    "explanation": "ClusterIP Services are internal; external access needs Ingress/port-forward."
  },
  {
    "id": 103,
    "week": 6,
    "question": "'kubectl apply -f app.yaml' reports success but 'kubectl get pods' shows nothing. The likely cause:",
    "options": [
      "you're looking in the wrong namespace (forgot -n)",
      "pods take days to appear",
      "apply doesn't create pods",
      "the manifest was empty"
    ],
    "answer": 0,
    "explanation": "Resources land in a namespace; you may be querying a different one."
  },
  {
    "id": 104,
    "week": 6,
    "question": "'kubectl top pods' shows a pod using '480Mi' and '7m'. This means:",
    "options": [
      "480 mebibytes RAM and 7 millicores CPU",
      "480 cores and 7 GB",
      "480 MB disk and 7 MB RAM",
      "480 megabits and 7 milliseconds"
    ],
    "answer": 0,
    "explanation": "Memory in Mi (2^20 bytes); CPU in millicores."
  },
  {
    "id": 105,
    "week": 6,
    "question": "You need to reach a pod's port from your laptop for a quick test but have no Ingress set up. The simplest tool:",
    "options": [
      "create a public LoadBalancer",
      "edit the firewall",
      "kubectl port-forward to localhost",
      "redeploy as a DaemonSet"
    ],
    "answer": 2,
    "explanation": "port-forward tunnels a port to localhost without an Ingress."
  },
  {
    "id": 106,
    "week": 6,
    "question": "A Deployment with 'replicas: 3' loses a pod to a node crash. Kubernetes will:",
    "options": [
      "schedule a replacement to restore three",
      "scale to zero",
      "leave two pods running",
      "delete the deployment"
    ],
    "answer": 0,
    "explanation": "A Deployment self-heals to the desired replica count."
  },
  {
    "id": 107,
    "week": 6,
    "question": "You want to preview the YAML a command would create, without changing the cluster. The flag:",
    "options": [
      "--dry-run=client -o yaml",
      "--force",
      "--wait",
      "--all-namespaces"
    ],
    "answer": 0,
    "explanation": "Dry-run generates the manifest without applying it."
  },
  {
    "id": 108,
    "week": 6,
    "question": "Which objects can you legitimately place inside a namespace? (Select all that apply) *(Select all that apply)*",
    "options": [
      "a ConfigMap",
      "a Node",
      "a Deployment",
      "a Service"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Nodes (and PVs) are cluster-scoped, not namespaced."
  },
  {
    "id": 109,
    "week": 6,
    "question": "You provisioned a k8s cluster on MRC and now want to add worker nodes. The right command family:",
    "options": [
      "fission specs apply",
      "docker swarm join",
      "kubectl scale deployment",
      "openstack coe cluster resize (Magnum)"
    ],
    "answer": 3,
    "explanation": "Magnum resizes the cluster's node count."
  },
  {
    "id": 110,
    "week": 6,
    "question": "An external request to your app traverses which order?",
    "options": [
      "client -> node -> configmap -> pod",
      "client -> ingress -> service -> pod",
      "client -> secret -> service -> pod",
      "client -> pod -> service -> ingress"
    ],
    "answer": 1,
    "explanation": "Ingress routes to a Service, which targets a Pod's containers."
  },
  {
    "id": 111,
    "week": 6,
    "question": "Your app pods read a DB password from a Secret. After rotating the Secret, pods still use the old value because:",
    "options": [
      "kubectl apply deletes them",
      "Secrets are write-only",
      "Secrets can't change",
      "mounted/injected values are read at pod start; pods need a restart to pick up changes"
    ],
    "answer": 3,
    "explanation": "Pods must restart (e.g. rollout restart) to load updated Secrets/ConfigMaps."
  },
  {
    "id": 112,
    "week": 6,
    "question": "A Service of type ClusterIP works inside the cluster but a browser on your laptop can't reach it. The two valid ways to reach it are: (Select all that apply) *(Select all that apply)*",
    "options": [
      "use kubectl port-forward",
      "change it to a public hostname via Ingress routing",
      "add an Ingress",
      "delete the namespace"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Ingress (incl. host/path routing) or port-forward expose it; deleting the namespace is wrong."
  },
  {
    "id": 113,
    "week": 6,
    "question": "'kubectl get pods' shows nothing right after a successful apply. Before assuming failure, check:",
    "options": [
      "that pods take hours",
      "that apply doesn't make pods",
      "whether you specified the correct namespace (-n)",
      "the cluster is deleted"
    ],
    "answer": 2,
    "explanation": "Resources are namespaced; you may be in the wrong namespace."
  },
  {
    "id": 114,
    "week": 6,
    "question": "A node reports 'cpu 1315m (16%)'. The '1315m' means:",
    "options": [
      "1315 MB",
      "1315 watts",
      "1315 MHz",
      "1315 millicores (~1.3 vCPU)"
    ],
    "answer": 3,
    "explanation": "Millicores: 1000m = 1 vCPU."
  },
  {
    "id": 115,
    "week": 6,
    "question": "You need to keep three replicas of a stateless web pod healthy and self-healing. The right object:",
    "options": [
      "an Ingress",
      "a Deployment with replicas: 3",
      "a bare Pod",
      "a Secret"
    ],
    "answer": 1,
    "explanation": "Deployments maintain and self-heal the desired replica count."
  },
  {
    "id": 116,
    "week": 6,
    "question": "Rolling restart proceeds pod-by-pod 'only if the restart is successful' so that:",
    "options": [
      "the deployment is deleted",
      "all pods die at once",
      "config is ignored",
      "the service stays available during the restart"
    ],
    "answer": 3,
    "explanation": "One-at-a-time, success-gated restarts preserve availability."
  },
  {
    "id": 117,
    "week": 6,
    "question": "To generate a YAML manifest from an imperative command without applying it, you add:",
    "options": [
      "--wait",
      "--force",
      "-A",
      "--dry-run=client -o yaml"
    ],
    "answer": 3,
    "explanation": "Dry-run + -o yaml emits the manifest for later apply."
  },
  {
    "id": 118,
    "week": 6,
    "question": "Which are cluster-scoped (NOT namespaced) in Kubernetes? (Select all that apply) *(Select all that apply)*",
    "options": [
      "Nodes",
      "the cluster itself",
      "Persistent Volumes",
      "Deployments"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Deployments are namespaced; nodes/PVs/cluster are not."
  },
  {
    "id": 119,
    "week": 6,
    "question": "Magnum 'openstack coe cluster resize' versus 'kubectl scale': the former changes:",
    "options": [
      "container ports",
      "the number of cluster nodes (infrastructure)",
      "ConfigMap values",
      "pod replica counts"
    ],
    "answer": 1,
    "explanation": "Magnum resizes nodes; kubectl scale changes replicas."
  },
  {
    "id": 120,
    "week": 6,
    "question": "An Ingress routing '/api' to one Service and '/web' to another demonstrates:",
    "options": [
      "volume mounting",
      "external host/path-based routing into the cluster",
      "internal-only ClusterIP behaviour",
      "Secret injection"
    ],
    "answer": 1,
    "explanation": "Ingress provides external path-based routing to services."
  },
  {
    "id": 121,
    "week": 7,
    "question": "A function works in 'fission fn test' but a route to it returns nothing from outside the cluster. The most likely cause:",
    "options": [
      "the function code is broken",
      "no port-forward/ingress has been set up to reach the Router externally",
      "the executor must be NewDeploy",
      "the package is a source archive"
    ],
    "answer": 1,
    "explanation": "fn test runs in-cluster; external calls need port-forward/ingress to the Router."
  },
  {
    "id": 122,
    "week": 7,
    "question": "A NewDeploy function with minscale=0 loads a 2GB model. The first morning request times out; later ones succeed. Best single fix:",
    "options": [
      "convert to a source archive so it loads at build time",
      "switch to PoolManager so the warm pool loads the model",
      "set minscale>=1 to keep a warm, pre-initialised pod",
      "shrink the model under fntimeout"
    ],
    "answer": 2,
    "explanation": "minscale>=1 avoids the cold-start + model-load timeout on the first call."
  },
  {
    "id": 123,
    "week": 7,
    "question": "A timer fires every 30s; the function usually takes 10s but spikes to 50s under load. Over a busy period you will most likely see:",
    "options": [
      "concurrent runs accumulating pods until resources are exhausted",
      "occasional harmless dropped runs",
      "the cron auto-throttling to 50s",
      "Fission serialising the runs automatically"
    ],
    "answer": 0,
    "explanation": "Runtime exceeding the interval makes runs overlap and pile up."
  },
  {
    "id": 124,
    "week": 7,
    "question": "You deleted a route from your specs files and ran plain 'fission specs apply'. On the cluster the old route:",
    "options": [
      "is converted to a function",
      "triggers an error",
      "still exists (plain apply never deletes)",
      "is removed"
    ],
    "answer": 2,
    "explanation": "Plain apply is additive; --delete is needed to prune."
  },
  {
    "id": 125,
    "week": 7,
    "question": "A teammate hand-created a function via CLI (not in specs). You run 'fission specs apply --delete'. That function:",
    "options": [
      "is imported into specs",
      "is preserved because CLI-made",
      "blocks the apply",
      "is deleted because it isn't declared in specs"
    ],
    "answer": 3,
    "explanation": "--delete reconciles the cluster to specs, pruning anything not declared."
  },
  {
    "id": 126,
    "week": 7,
    "question": "You set '--requestsperpod 10' on a PoolManager function. Under 40 concurrent requests, you should expect roughly:",
    "options": [
      "exactly 10 pods pre-warmed",
      "40 pods (one per request)",
      "1 pod handling all 40 serially",
      "about 4 pods (10 concurrent each)"
    ],
    "answer": 3,
    "explanation": "requestsperpod is per-pod concurrency; 40/10 ~ 4 pods."
  },
  {
    "id": 127,
    "week": 7,
    "question": "A function packaged with --sourcearchive but no build command fails at runtime with missing dependencies. Why?",
    "options": [
      "source archives ignore dependencies",
      "without a build command the install step never runs",
      "deploy archives are required for deps",
      "the Router strips imports"
    ],
    "answer": 1,
    "explanation": "Source archives need a build command to install/compile deps."
  },
  {
    "id": 128,
    "week": 7,
    "question": "Which are genuine FaaS anti-patterns the lecturer admitted to? (Select all that apply) *(Select all that apply)*",
    "options": [
      "validating request JSON against a schema",
      "storing the ES password in a plain ConfigMap",
      "exposing /wipedatabase to the public internet",
      "returning the raw ElasticSearch response to clients"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "Schema validation is the GOOD practice; the rest are anti-patterns."
  },
  {
    "id": 129,
    "week": 7,
    "question": "You need a function to run automatically whenever pods are created or deleted (e.g. to log scaling). The right trigger:",
    "options": [
      "a watch trigger on pods",
      "a route (HTTP) trigger",
      "the async WebSocket pattern",
      "a timer trigger"
    ],
    "answer": 0,
    "explanation": "Watch triggers fire on K8s resource lifecycle events."
  },
  {
    "id": 130,
    "week": 7,
    "question": "Choosing an executor: a function is rarely called and must respond instantly when it is. The best fit:",
    "options": [
      "PoolManager (warm generic pool)",
      "NewDeploy with minscale=0",
      "NewDeploy with maxscale=0",
      "no executor"
    ],
    "answer": 0,
    "explanation": "PoolManager's warm pool gives low latency for sporadic calls."
  },
  {
    "id": 131,
    "week": 7,
    "question": "In the async long-job pattern, returning HTTP 202 immediately (instead of holding the request) is needed because:",
    "options": [
      "WebSockets are simply faster",
      "202 is mandatory for POSTs",
      "a long-held HTTP request risks timeouts; results are pushed later via WebSocket",
      "HTTP can't carry JSON"
    ],
    "answer": 2,
    "explanation": "Decoupling avoids HTTP timeouts; the WebSocket delivers the result later."
  },
  {
    "id": 132,
    "week": 7,
    "question": "PoolManager copes poorly with one function under sustained heavy concurrency because its warm pods are:",
    "options": [
      "always cold",
      "generic and not designed for many concurrent instances of one function",
      "unable to read ConfigMaps",
      "dedicated per function"
    ],
    "answer": 1,
    "explanation": "Shared generic pool isn't built for sustained single-function concurrency; NewDeploy is."
  },
  {
    "id": 133,
    "week": 7,
    "question": "Route '/user/{id:[0-9]+}' is hit with '/user/bob'. The function:",
    "options": [
      "is not invoked because the regex requires digits",
      "runs with id=0",
      "crashes the Router",
      "runs with id='bob'"
    ],
    "answer": 0,
    "explanation": "The [0-9]+ constraint means non-numeric paths don't match the route."
  },
  {
    "id": 134,
    "week": 7,
    "question": "You want your cluster's Fission resources to be reproducible and reviewable in Git. The mechanism:",
    "options": [
      "a specs directory (declarative IaC) with apply/--delete",
      "manual CLI commands",
      "more routes",
      "a bigger environment image"
    ],
    "answer": 0,
    "explanation": "Specs are Infrastructure-as-Code: versionable and reconcilable."
  },
  {
    "id": 135,
    "week": 7,
    "question": "A function adds a pre-built binary and a static data file that need no install. The correct archive:",
    "options": [
      "deploy archive (unzipped as-is)",
      "a ConfigMap",
      "source archive (it will build them)",
      "either, identical"
    ],
    "answer": 0,
    "explanation": "Deploy archive is unzipped without a build; source would needlessly try to build."
  },
  {
    "id": 136,
    "week": 7,
    "question": "With minscale=0, your NewDeploy function is fast all day but the first request each morning is slow. The cause:",
    "options": [
      "overnight idle scaled pods to zero, so the first request cold-starts",
      "the archive rebuilds each morning",
      "fntimeout resets daily",
      "the cron fires at night"
    ],
    "answer": 0,
    "explanation": "Scale-to-zero overnight forces a morning cold start."
  },
  {
    "id": 137,
    "week": 7,
    "question": "Under the hood, when an external request hits a Fission route, the component that maps method/path to a function is the:",
    "options": [
      "Executor pool only",
      "Builder",
      "Router",
      "Kafka broker"
    ],
    "answer": 2,
    "explanation": "The Router matches the route and dispatches to the function (via ingress)."
  },
  {
    "id": 138,
    "week": 7,
    "question": "You expect a function to scale with CPU load and tolerate cold starts. The executor/config that fits best:",
    "options": [
      "NewDeploy with the Kubernetes HPA",
      "a timer trigger",
      "a watch trigger",
      "PoolManager only"
    ],
    "answer": 0,
    "explanation": "NewDeploy autoscales via the K8s HPA on metrics like CPU."
  },
  {
    "id": 139,
    "week": 7,
    "question": "'fission specs destroy' vs 'apply --delete' - you want a complete teardown of everything the specs define. Use:",
    "options": [
      "fn test",
      "specs destroy",
      "route delete",
      "apply --delete"
    ],
    "answer": 1,
    "explanation": "destroy tears down all spec-defined resources; --delete only prunes extras while applying."
  },
  {
    "id": 140,
    "week": 7,
    "question": "A function returns thousands of records in one response and the client struggles. The relevant anti-pattern is:",
    "options": [
      "no schema checking",
      "raw DB leak",
      "missing pagination",
      "public test route"
    ],
    "answer": 2,
    "explanation": "Returning huge result sets at once is the missing-pagination anti-pattern."
  },
  {
    "id": 141,
    "week": 8,
    "question": "During a network partition, your ElasticSearch cluster stops accepting writes while a CouchDB cluster keeps serving. In CAP terms, they respectively favoured:",
    "options": [
      "both favoured availability",
      "both favoured partition-intolerance",
      "ES favoured availability; CouchDB consistency",
      "ES favoured consistency; CouchDB favoured availability"
    ],
    "answer": 3,
    "explanation": "ES holds elections/quorum (consistency-leaning); CouchDB keeps accepting writes (availability-leaning)."
  },
  {
    "id": 142,
    "week": 8,
    "question": "A 'healthy' node is briefly slow and the cluster declares it failed, triggering an election. This illustrates that:",
    "options": [
      "elections are random",
      "hard partitions are the only kind",
      "every partition is ultimately detected by a timeout (soft partitions)",
      "slow nodes are ignored"
    ],
    "answer": 2,
    "explanation": "Soft partitions arise from latency; timeouts (e.g. ES 500ms) decide a node is down."
  },
  {
    "id": 143,
    "week": 8,
    "question": "You write to what you think is a replica shard in ElasticSearch and it's redirected. Why?",
    "options": [
      "writes for an index go to the primary-shard node, then propagate to replicas",
      "CouchDB rules apply",
      "ES rejects all writes",
      "replicas accept writes too"
    ],
    "answer": 0,
    "explanation": "ES routes writes through the primary shard; replicas are read/propagation copies."
  },
  {
    "id": 144,
    "week": 8,
    "question": "Your ES query response includes a '_score' field you never requested. The reason:",
    "options": [
      "you enabled it in mappings",
      "search adds _score (relevancy) by default while omitting most metadata",
      "it's the shard number",
      "it's the document ID"
    ],
    "answer": 1,
    "explanation": "Default search omits most metadata but adds _score."
  },
  {
    "id": 145,
    "week": 8,
    "question": "You created an index with too few primary shards and now can't spread updates across more nodes. The lesson:",
    "options": [
      "primary-shard count caps the nodes that can update an index, so don't under-shard",
      "replicas fix this automatically",
      "shard count never matters",
      "you can split primaries live trivially"
    ],
    "answer": 0,
    "explanation": "Primary-shard count limits update parallelism; under-sharding constrains scaling."
  },
  {
    "id": 146,
    "week": 8,
    "question": "You need to combine fields from two different ES indexes in one query. The accurate expectation:",
    "options": [
      "joins are impossible entirely",
      "only limited one-to-many joins exist (parent-child, enrich, lookup)",
      "it behaves exactly like PostgreSQL JOIN",
      "full many-to-many SQL joins work"
    ],
    "answer": 1,
    "explanation": "ES supports limited one-to-many joins only."
  },
  {
    "id": 147,
    "week": 8,
    "question": "Querying three related indexes: doing 'GET /index1,index2,index3/_search' versus three separate queries is:",
    "options": [
      "identical in cost",
      "only valid for one index",
      "slower",
      "more efficient than sequential per-index queries"
    ],
    "answer": 3,
    "explanation": "Multi-index queries beat sequential per-index queries."
  },
  {
    "id": 148,
    "week": 8,
    "question": "In a PostgreSQL foreign-data-wrapper federation, one remote node goes down and part of your data becomes unreachable. This reflects that FDW federation:",
    "options": [
      "replicates everything by default",
      "can have a failed node hinder the whole cluster",
      "never depends on remote nodes",
      "is fully partition-tolerant"
    ],
    "answer": 1,
    "explanation": "A failed FDW node can break the cluster / make data inaccessible."
  },
  {
    "id": 149,
    "week": 8,
    "question": "Which correctly pair an ES term with its meaning? (Select all that apply) *(Select all that apply)*",
    "options": [
      "index = a single document",
      "mapping = schema (field types/indexing)",
      "replica = copy of a shard",
      "shard = horizontal partition of an index"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "An index is like a database; a document is a record."
  },
  {
    "id": 150,
    "week": 8,
    "question": "You want even document distribution without specifying placement. ElasticSearch by default uses:",
    "options": [
      "round-robin by arrival",
      "hash sharding on the document ID",
      "alphabetical by a field",
      "range sharding on a date"
    ],
    "answer": 1,
    "explanation": "Default is hash sharding on _id; routing can override to range."
  },
  {
    "id": 151,
    "week": 8,
    "question": "You raise a CouchDB cluster from 3 to 5 nodes for an existing database and expect automatic rebalancing. Reality:",
    "options": [
      "it auto-reshards existing DBs instantly",
      "shards vanish",
      "for existing DBs, resharding is manual (moving/splitting shards)",
      "CouchDB refuses new nodes"
    ],
    "answer": 2,
    "explanation": "New DBs auto-balance; existing ones need manual resharding."
  },
  {
    "id": 152,
    "week": 8,
    "question": "During a partition you must keep accepting writes everywhere and reconcile later. Which system's default behaviour aligns?",
    "options": [
      "PostgreSQL FDW (node failure hinders cluster)",
      "CouchDB (every node accepts writes)",
      "none can",
      "ElasticSearch (quorum/elections)"
    ],
    "answer": 1,
    "explanation": "CouchDB leans availability; ES leans consistency."
  },
  {
    "id": 153,
    "week": 8,
    "question": "A 0.5s delay from a master node triggers an ElasticSearch election. This shows that the cluster treats:",
    "options": [
      "all delays as success",
      "latency as irrelevant",
      "a timeout as evidence of a (soft) partition/failure",
      "elections as optional"
    ],
    "answer": 2,
    "explanation": "ES interprets a 500ms delay as a crashed master, forcing an election."
  },
  {
    "id": 154,
    "week": 8,
    "question": "You design an index expecting to scale updates across 10 nodes later, but create it with 1 primary shard. The problem:",
    "options": [
      "ES auto-splits primaries live",
      "replicas will fix it",
      "shards are irrelevant",
      "primary-shard count caps update parallelism, so 1 primary limits you to ~1 updating node"
    ],
    "answer": 3,
    "explanation": "Primary shards bound the nodes that can update an index."
  },
  {
    "id": 155,
    "week": 8,
    "question": "Which ES write/replication facts are correct? (Select all that apply) *(Select all that apply)*",
    "options": [
      "replicas serve reads in parallel",
      "any replica accepts direct writes",
      "changes propagate to replicas before the transaction completes",
      "writes go through the primary shard"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Replicas don't accept direct writes; writes route via the primary."
  },
  {
    "id": 156,
    "week": 8,
    "question": "You need a relational-style join across two ES indexes. The realistic option:",
    "options": [
      "limited mechanisms (parent-child, enrich, lookup) - one-to-many only",
      "no joins of any kind",
      "a full many-to-many JOIN like SQL",
      "joins identical to PostgreSQL"
    ],
    "answer": 0,
    "explanation": "ES joins are limited and one-to-many."
  },
  {
    "id": 157,
    "week": 8,
    "question": "Sharding vs replication, applied: to survive a node failure without data loss you primarily rely on:",
    "options": [
      "range sharding",
      "replicas (copies of shards on other nodes)",
      "more shards",
      "fewer nodes"
    ],
    "answer": 1,
    "explanation": "Replicas provide the redundancy for fault tolerance."
  },
  {
    "id": 158,
    "week": 8,
    "question": "A query over 'logs-2025-*' treats many daily indexes as one. This grouping is called:",
    "options": [
      "a replica",
      "a data stream / index pattern",
      "a mapping",
      "a shard"
    ],
    "answer": 1,
    "explanation": "Pattern-named indexes queried together form a data stream."
  },
  {
    "id": 159,
    "week": 8,
    "question": "ES assigns a document no explicit ID. What happens?",
    "options": [
      "the write is rejected",
      "the shard is deleted",
      "ES generates a unique _id automatically",
      "all docs share one ID"
    ],
    "answer": 2,
    "explanation": "ES auto-assigns a unique _id when none is given."
  },
  {
    "id": 160,
    "week": 8,
    "question": "The CAP-based reason traditional single-site DBMSs ignored partitions is that they assumed:",
    "options": [
      "global geo-distribution",
      "a small co-located cluster of high-quality servers",
      "commodity servers across tenancies",
      "no network at all"
    ],
    "answer": 1,
    "explanation": "Classic DBMSs assumed co-located reliable servers, so partitions were rare."
  },
  {
    "id": 161,
    "week": 9,
    "question": "You try to run a Windows-kernel workload inside a Linux Docker container and it won't work. The fundamental reason:",
    "options": [
      "Docker forbids Windows apps",
      "containers share the host kernel, so a different OS kernel isn't possible",
      "the image is too large",
      "you need more RAM"
    ],
    "answer": 1,
    "explanation": "OS-level virtualisation shares one kernel; a foreign kernel needs a full VM."
  },
  {
    "id": 162,
    "week": 9,
    "question": "A guest OS in a VM 'writes to its hard disk'. Physically, what happens?",
    "options": [
      "it writes to the network card",
      "the VMM translates the write to the virtual/host disk",
      "it writes straight to the bare disk",
      "the data is dropped"
    ],
    "answer": 1,
    "explanation": "The hypervisor mediates and translates guest disk I/O."
  },
  {
    "id": 163,
    "week": 9,
    "question": "You need stronger isolation between two tenants than process-level namespaces provide. The better choice:",
    "options": [
      "one container with more CPU",
      "a single process",
      "two VMs, each with its own full OS",
      "two containers on one kernel"
    ],
    "answer": 2,
    "explanation": "VMs give full-OS isolation; containers share the kernel (weaker boundary)."
  },
  {
    "id": 164,
    "week": 9,
    "question": "A cloud provider runs the VMM directly on the physical server with no underlying OS. This is a:",
    "options": [
      "hosted (Type 2) hypervisor",
      "bare-metal (Type 1) hypervisor",
      "container runtime",
      "guest OS"
    ],
    "answer": 1,
    "explanation": "Type 1 runs directly on hardware; Type 2 runs atop a host OS."
  },
  {
    "id": 165,
    "week": 9,
    "question": "On your laptop you install VirtualBox on top of Windows to run Linux VMs. That hypervisor is:",
    "options": [
      "bare-metal (Type 1)",
      "hosted (Type 2)",
      "a container",
      "OS-level virtualisation"
    ],
    "answer": 1,
    "explanation": "A hypervisor on top of a host OS is Type 2 (hosted)."
  },
  {
    "id": 166,
    "week": 9,
    "question": "You want VM images that only consume disk as data is actually written. Choose:",
    "options": [
      "a fixed VHD",
      "raw (fully pre-allocated)",
      "JPEG",
      "qcow2 (copy-on-write)"
    ],
    "answer": 3,
    "explanation": "qcow2 thin-provisions via copy-on-write."
  },
  {
    "id": 167,
    "week": 9,
    "question": "Which Docker-vs-VM resource claims are correct? (Select all that apply) *(Select all that apply)*",
    "options": [
      "Docker uses MBs of disk; a VM GBs",
      "Docker boots in seconds; a VM in minutes",
      "Docker boots a full guest OS per container",
      "VMs give full-OS isolation; Docker process-level"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Containers don't boot a full guest OS; they share the host kernel."
  },
  {
    "id": 168,
    "week": 9,
    "question": "Why might you deliberately run containers inside cloud VMs rather than on bare metal?",
    "options": [
      "to layer lightweight OS-level isolation on top of hardware virtualisation",
      "VMs require containers to boot",
      "containers can't run alone",
      "it's the only legal option"
    ],
    "answer": 0,
    "explanation": "Containers-in-VMs combine container agility with VM isolation."
  },
  {
    "id": 169,
    "week": 9,
    "question": "Your colleague expects 'docker run --network host' on Docker Desktop (Mac) to expose to the laptop's localhost, but it doesn't. Explain:",
    "options": [
      "nginx can't bind port 80",
      "host mode is disabled on Mac",
      "the engine runs in a hidden Linux VM, so host networking is the VM's, not the laptop's",
      "Macs have no localhost"
    ],
    "answer": 2,
    "explanation": "Docker Desktop's hidden VM changes what 'host' means."
  },
  {
    "id": 170,
    "week": 9,
    "question": "A well-designed hypervisor imposes on the guest:",
    "options": [
      "zero overhead always",
      "a large, noticeable slowdown",
      "better-than-native speed",
      "only a minor performance decrease"
    ],
    "answer": 3,
    "explanation": "The lecture notes only a minor performance decrease."
  },
  {
    "id": 171,
    "week": 9,
    "question": "You must run a legacy app that needs its own kernel and full OS isolation on shared hardware. The right virtualisation:",
    "options": [
      "an OS-level container",
      "a full virtual machine under a hypervisor",
      "a qcow2 file alone",
      "a Docker bridge network"
    ],
    "answer": 1,
    "explanation": "A foreign kernel + strong isolation needs a full VM, not a container."
  },
  {
    "id": 172,
    "week": 9,
    "question": "A bare-metal (Type 1) hypervisor must itself handle device drivers and hardware management because it:",
    "options": [
      "runs on top of Windows",
      "is a container",
      "has no VMs",
      "boots and runs directly on the physical machine"
    ],
    "answer": 3,
    "explanation": "Type 1 sits on hardware, so it manages devices directly."
  },
  {
    "id": 173,
    "week": 9,
    "question": "You snapshot a VM and the image file is far smaller than the disk size shown inside the guest. This is consistent with:",
    "options": [
      "a JPEG",
      "a corrupted image",
      "a raw fully-allocated image",
      "a qcow2 copy-on-write image storing only written data"
    ],
    "answer": 3,
    "explanation": "qcow2 stores only allocated/written blocks, so files are smaller."
  },
  {
    "id": 174,
    "week": 9,
    "question": "Containers boot in seconds and VMs in minutes mainly because containers:",
    "options": [
      "use raw images",
      "have faster CPUs",
      "share the host kernel instead of booting a full guest OS",
      "skip networking"
    ],
    "answer": 2,
    "explanation": "No full-OS boot per container -> fast startup."
  },
  {
    "id": 175,
    "week": 9,
    "question": "Which correctly contrast Type 1 and Type 2 hypervisors? (Select all that apply) *(Select all that apply)*",
    "options": [
      "Type 1 runs directly on hardware",
      "Type 2 runs on a host OS",
      "Type 2 needs no host OS",
      "Type 1 typically offers better performance/closeness to hardware"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Type 2 by definition runs on a host OS."
  },
  {
    "id": 176,
    "week": 9,
    "question": "You want to run Linux containers on a Windows laptop via Docker Desktop. Under the hood this works by:",
    "options": [
      "running them natively on the Windows kernel",
      "emulating each syscall",
      "running a hidden Linux VM whose kernel hosts the containers",
      "using a Type 1 hypervisor on bare metal"
    ],
    "answer": 2,
    "explanation": "Docker Desktop runs a hidden Linux VM to provide the Linux kernel."
  },
  {
    "id": 177,
    "week": 9,
    "question": "The performance penalty of a good hypervisor is described as minor because the guest:",
    "options": [
      "runs without any mediation",
      "shares the host kernel",
      "runs faster than native",
      "is given the perception of a whole machine with only small overhead"
    ],
    "answer": 3,
    "explanation": "Hypervisors present a whole-machine illusion with minor overhead."
  },
  {
    "id": 178,
    "week": 9,
    "question": "OS-level virtualisation can't run a Windows guest on a Linux host because:",
    "options": [
      "Windows is open source",
      "all containers share the single host kernel",
      "qcow2 is incompatible",
      "containers are too small"
    ],
    "answer": 1,
    "explanation": "A shared kernel can't simultaneously be Linux and Windows."
  },
  {
    "id": 179,
    "week": 9,
    "question": "Combining a cloud hypervisor with containers (containers inside VMs) gives you:",
    "options": [
      "weaker isolation than either alone",
      "VM-level isolation plus container agility/density",
      "no isolation at all",
      "elimination of the kernel"
    ],
    "answer": 1,
    "explanation": "You get VM isolation boundaries with container packaging benefits."
  },
  {
    "id": 180,
    "week": 9,
    "question": "Glance stores VM disk images; choosing a format matters because it affects:",
    "options": [
      "the guest's IP address",
      "the security group",
      "the SSH key",
      "storage efficiency and features (e.g. raw vs qcow2 thin provisioning)"
    ],
    "answer": 3,
    "explanation": "Format choice (raw/qcow2/vmdk) affects size/features."
  },
  {
    "id": 181,
    "week": 10,
    "question": "A verified user with valid credentials is blocked from installing a patch on certain VMs. This boundary is enforced by:",
    "options": [
      "encryption",
      "authentication",
      "authorisation",
      "a CA"
    ],
    "answer": 2,
    "explanation": "Deciding what an authenticated user may DO is authorisation."
  },
  {
    "id": 182,
    "week": 10,
    "question": "You want users to log in once and then reach SPARTAN, MRC and other resources without re-entering credentials. The concept:",
    "options": [
      "single sign-on (prove identity once, access many)",
      "per-service accounts",
      "anonymous access",
      "a shared password file"
    ],
    "answer": 0,
    "explanation": "SSO = authenticate once, access distributed resources."
  },
  {
    "id": 183,
    "week": 10,
    "question": "Inter-operating across two clouds is hard partly because, unlike a single org, there is:",
    "options": [
      "one global identity provider",
      "no single ubiquitous CA - many exist with differing trust",
      "no use for identity",
      "one universal CA everyone trusts"
    ],
    "answer": 1,
    "explanation": "Federation must reconcile many CAs/identity sources with graded trust."
  },
  {
    "id": 184,
    "week": 10,
    "question": "Before deploying a downloaded VM image to production, a key security check is whether it is:",
    "options": [
      "high-resolution",
      "named correctly",
      "free of trojans/malware (provenance/integrity)",
      "the right colour"
    ],
    "answer": 2,
    "explanation": "Image integrity/provenance must be verified."
  },
  {
    "id": 185,
    "week": 10,
    "question": "Your MRC and SPARTAN access were each granted on the basis of:",
    "options": [
      "anonymous public access",
      "a public API key",
      "an Amazon account",
      "proving your UoM/COMP90024 affiliation (entitlement)"
    ],
    "answer": 3,
    "explanation": "Access is entitlement-based on verified affiliation."
  },
  {
    "id": 186,
    "week": 10,
    "question": "A survey shows most orgs leave known vulnerabilities unpatched. The lecture's explanation:",
    "options": [
      "patching is illegal",
      "patches don't exist",
      "everything auto-patches",
      "side-effects, complexity and job disruption deter patching"
    ],
    "answer": 3,
    "explanation": "Operational disruption causes chronic under-patching."
  },
  {
    "id": 187,
    "week": 10,
    "question": "Which underpin secure access to distributed cloud resources? (Select all that apply) *(Select all that apply)*",
    "options": [
      "vetting and patching of images/software",
      "established identity and graded trust",
      "ignoring security once deployed",
      "single sign-on across resources"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Security is continuous; ignoring it post-deploy is wrong."
  },
  {
    "id": 188,
    "week": 10,
    "question": "A CA's role in PKI is to:",
    "options": [
      "run VMs",
      "vouch for the binding between an identity and a public key",
      "host container images",
      "store passwords in plaintext"
    ],
    "answer": 1,
    "explanation": "A CA attests identity-to-public-key bindings."
  },
  {
    "id": 189,
    "week": 10,
    "question": "IaaS access commonly relies on which PKI artefact rather than a typed password?",
    "options": [
      "a key pair",
      "a plaintext token in the URL",
      "a disk image",
      "a CAPTCHA"
    ],
    "answer": 0,
    "explanation": "IaaS instance access typically uses key pairs."
  },
  {
    "id": 190,
    "week": 10,
    "question": "Two identity providers vouch for a user, but you trust one far less. The principle at work:",
    "options": [
      "trust is irrelevant",
      "degrees of trust must be weighed when granting access",
      "all providers are equally trustworthy",
      "only one provider can exist"
    ],
    "answer": 1,
    "explanation": "Federated identity requires grading trust across providers."
  },
  {
    "id": 191,
    "week": 10,
    "question": "A user authenticates successfully but is denied deleting a production database. This separation is the point of distinguishing:",
    "options": [
      "shards from replicas",
      "encryption from hashing",
      "Type 1 from Type 2",
      "authentication (who you are) from authorisation (what you may do)"
    ],
    "answer": 3,
    "explanation": "AuthN proves identity; authZ governs permitted actions."
  },
  {
    "id": 192,
    "week": 10,
    "question": "Federating identity across MRC, SPARTAN and a partner cloud is hard because there is no single CA, so you must:",
    "options": [
      "trust everyone equally",
      "disable authentication",
      "use one global password",
      "weigh degrees of trust across multiple CAs/identity providers"
    ],
    "answer": 3,
    "explanation": "Many CAs/providers -> graded trust is required."
  },
  {
    "id": 193,
    "week": 10,
    "question": "Before running a community VM image in production, the security-minded step is to:",
    "options": [
      "verify it is free of malware/trojans (provenance/integrity)",
      "increase its resolution",
      "check its colour scheme",
      "shorten its name"
    ],
    "answer": 0,
    "explanation": "Image integrity/provenance must be vetted."
  },
  {
    "id": 194,
    "week": 10,
    "question": "Most organisations leave known CVEs unpatched. The lecture attributes this chiefly to:",
    "options": [
      "automatic patching everywhere",
      "patches not existing",
      "operational side-effects, complexity, and disruption to running jobs",
      "patches being illegal"
    ],
    "answer": 2,
    "explanation": "Disruption/complexity drive chronic under-patching."
  },
  {
    "id": 195,
    "week": 10,
    "question": "Which artefacts/concepts directly support secure cloud access? (Select all that apply) *(Select all that apply)*",
    "options": [
      "leaving images unvetted",
      "a CA binding identities to public keys",
      "single sign-on across resources",
      "key pairs for IaaS access"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "Leaving images unvetted is a risk, not a safeguard."
  },
  {
    "id": 196,
    "week": 10,
    "question": "Tools like Puppet/Cfengine/Pakiti help manage patching and config, but the lecture stresses they don't remove the need to:",
    "options": [
      "use containers",
      "authenticate users",
      "actually vet images and apply patches despite operational friction",
      "buy more VMs"
    ],
    "answer": 2,
    "explanation": "Tooling assists, but vetting/patching discipline is still required."
  },
  {
    "id": 197,
    "week": 10,
    "question": "SSO's security value is that a user proves identity once; the corresponding risk to manage is that:",
    "options": [
      "passwords multiply",
      "identity becomes irrelevant",
      "a compromised single credential can unlock many resources",
      "nobody can log in"
    ],
    "answer": 2,
    "explanation": "SSO concentrates risk on the single credential, so it must be protected."
  },
  {
    "id": 198,
    "week": 10,
    "question": "A CA-signed certificate lets a relying party trust that a public key belongs to a claimed identity. Without a shared CA across clouds, the consequence is:",
    "options": [
      "all keys are public",
      "encryption becomes unnecessary",
      "trust must be brokered/negotiated, complicating interoperability",
      "instant interoperability"
    ],
    "answer": 2,
    "explanation": "No common CA means trust must be established across domains."
  },
  {
    "id": 199,
    "week": 10,
    "question": "Authorisation also covers operational decisions, e.g.:",
    "options": [
      "the disk image format",
      "who may install a patch, when, and how many VMs it affects",
      "the VM's wallpaper",
      "the SSH banner text"
    ],
    "answer": 1,
    "explanation": "AuthZ extends to operational change control and blast radius."
  },
  {
    "id": 200,
    "week": 10,
    "question": "Your access to shared HPC/cloud was entitlement-based. The general security principle this reflects:",
    "options": [
      "trust by default",
      "open access for all",
      "least privilege / access tied to verified entitlement",
      "no authentication needed"
    ],
    "answer": 2,
    "explanation": "Access tied to verified entitlement reflects least-privilege thinking."
  }
];
