# Intro to DevOps Workshop - Tuwaiq Academy

![Untitled](Intro%20to%20DevOps%20Workshop%20-%20Tuwaiq%20Academy%202507ea4f63f44777b914490049ff68cd/Untitled.png)

## Table of content

# Useful Links

[https://github.com/abdulrahmanAlotaibi/intro-devops-tuwaiq](https://github.com/abdulrahmanAlotaibi/intro-devops-tuwaiq)

# DevOps Overview

## What is DevOps

> DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity -AWS Blog
> 

## How Organizations Worked Before DevOps

- Miscommunication between Dev and Ops teams
- Delayed software deployments: huge release timeline of new features, bug fixes, and enhancements
- Constant human /manual monitoring of apps maintenance(see if there is any bugs) or performance
- Releases are nightmares (no feature flags/launch darkly, huge feature releases)
- Recovery time is huge
- Lack  of security: Since it’s manual, it’s prune to errors
    - DevOps values are sometimes applied to teams other than development. When security teams adopt a DevOps approach, security is an active and integrated part of the development process. This is called [DevSecOps](https://www.atlassian.com/continuous-delivery/principles/devsecops)

## What DevOps Brings to the Organization

- [Continuous Integration](https://aws.amazon.com/devops/what-is-devops/#integration)
- [Continuous Delivery](https://aws.amazon.com/devops/what-is-devops/#cd)
- [Microservices](https://aws.amazon.com/devops/what-is-devops/#microservices)
- [Infrastructure as Code](https://aws.amazon.com/devops/what-is-devops/#iac)
- [Monitoring and Logging](https://aws.amazon.com/devops/what-is-devops/#monitoring)
- [Communication and Collaboration](https://aws.amazon.com/devops/what-is-devops/#communication)

<aside>
💡 DevOps teams use practices to automate processes that historically have been manual and slow

</aside>

> Since DevOps is a cultural shift where development and operations work as an integrated unit, there isn’t a single tool that enables DevOps principles and practices.
> 

> ****DevOps isn't any single person's job. It's everyone's job. - HEAD OF ENGINEERING, DEVOPS AT ATLASSIAN****
> 

## **DevOps as a Culture Vs Site Reliability Engineering (SRE)**

### **DevOps Cultural Philosophy**

Transitioning to DevOps requires a change in culture and mindset. At its simplest, DevOps is about removing the barriers between two traditionally siloed teams, development and operations.

- UI Designer and UX Designer
- UI Designer with Frontend developer
- Frontend developer with Backend developer
- Product Manager and his/her team

### **Values**

- increased transparency
- communication
- shared responsibilities
- feedback
- automation

[DevOps Culture | Atlassian](https://www.atlassian.com/devops/what-is-devops/devops-culture)

### SRE Responsibilities

- Availably
- Performance
- Monitoring
- Incident Response
- Preparation

For example at Tweeq, this is an actual SRE job post (and all of it are real indicators)

**Minimum qualifications:**

- Bachelor's degree in Computer Science or Software Engineering
- 2 years of experience as a software engineer.
- Experience programming in one or more of the following languages: Go, Java, or Python.
- Experience with Unix/Linux systems internals and administration and familiarity with standard IT security practices (such as encryption, certificates, key management).
- Experience with containers and Kubernetes.
- Experience with configuration management, deployment and orchestration technologies (such as Ansible, Terraform, Flux etc).
- Experience with cloud providers such as OCI, GCP or AWS
- Experience with scalable networking technologies (e,g., Load Balancers, Firewalls) and web standards
- Experience in designing, analyzing, and troubleshooting large-scale distributed systems.
- Ability to debug, optimize code, and automate routine tasks.

## Additional Research

![Untitled](Intro%20to%20DevOps%20Workshop%20-%20Tuwaiq%20Academy%202507ea4f63f44777b914490049ff68cd/Untitled%201.png)

![Untitled](Intro%20to%20DevOps%20Workshop%20-%20Tuwaiq%20Academy%202507ea4f63f44777b914490049ff68cd/Untitled%202.png)

[What is DevOps? - Amazon Web Services (AWS)](https://aws.amazon.com/devops/what-is-devops/)

[What is DevOps? | Atlassian](https://www.atlassian.com/devops)

---

# Shell Basics

## What is a Shell

> A shell is a command interpreter that exposes an interface to the user to work with the underlying operating system. It allows you to execute operations using text and commands
> 
- Shell command consist of one or more words , the first is the command the rest is arguments(parameters)
- Files
    - Regular files: just text files
    - Executable files : non-human-readable)
- Directories: tree-like structure

<aside>
💡 Different kinds of shells : Bash, Csh, Zsh

</aside>

## Installation

### Linux

You have terminal by default, no need to do anything

### MacOS

`command + space` , then write ‘terminal’ 

### Windows

We are not going to use windows default terminal (Powershell) since it’s not used outside Windows ecosystem and the terminal is the most useful and common type of terminals for engineers

So you can download t bash terminal (simulator) either by :

1. Downloading Git, you will have a bash terminal installed with it 
    
    [Git for Windows](https://gitforwindows.org/)
    
2. Downloading Hyperjs
    
    [Hyper™](https://hyper.is/)
    
3. Also if you are using VS Code, there is a lot of plugins that will let you use Shell terminal on Windows
4. WSL & Ubunto & Windows Terminal

## Linux Filesystem Structure

![Untitled](Intro%20to%20DevOps%20Workshop%20-%20Tuwaiq%20Academy%202507ea4f63f44777b914490049ff68cd/Untitled%203.png)

![Untitled](Intro%20to%20DevOps%20Workshop%20-%20Tuwaiq%20Academy%202507ea4f63f44777b914490049ff68cd/Untitled%204.png)

## Common Terminal Commands

1. `man`
2. `cd`
3. `mkdir`
4. `touch`
5. `cp`
6. `mv`
7. `rm`
8. `curl`
9. `grep`
10. `less`, `cat`
11. `awk`, `tr`, `sed`
12. `rmdir`
13. `htop`
14. `alias`

[tldr](https://formulae.brew.sh/formula/tldr)

## Command Line Options

```bash
ls -l # command:ls , option: l
```

## Connecting Commands Together with Pipes

So what is going on here? A general philosophy of (unix) command line tools is that they print text to the terminal (also referred to "printing to standard output" or `STDOUT`
). A good deal of commands can also read content from streamed input (known as "standard input" or `STDIN` ) 

```bash
wc -l myfile.txt
```

```bash
ls  | wc -l  
```

## Global Configuration with Bash Profile

The **Bash profile** is a file on your computer that Bash runs every time a new Bash session is created. This is useful because we need to run certain code every time before starting to work.

```bash
nano /home/dhmy/.bashrc
nano ~/.bashrc # Or this way
```

## PATH

The first edit to your Bash profile is to correct your [PATH](https://en.wikipedia.org/wiki/PATH_%28variable%29). `PATH` is an **environment variable**, which simply means that it represents some small bit of data while you use Terminal. Specifically, `PATH` contains a list of file system paths where the operating system can find programs to run.

When a developer runs a program in Bash, the operating system will sequentially look for the program in each of the paths that `PATH` contains, starting with the first path listed. If the operating system can’t find the program in the first path, it looks for the same program in the second path, and so on, until either eventually finding and running the program or returning an error if the program couldn’t be found.

[Bash Shell Variables and Aliases (and how to setup your $PATH variable)](https://www.zachgollwitzer.com/posts/bash-shell-variables)

## Commands Cheatsheet

![Untitled](Intro%20to%20DevOps%20Workshop%20-%20Tuwaiq%20Academy%202507ea4f63f44777b914490049ff68cd/Untitled%205.png)

## Additional Research

[](https://linuxcommand.org/tlcl.php)

[The Linux Command Handbook - Learn Linux Commands for Beginners](https://www.freecodecamp.org/news/the-linux-commands-handbook/#introductiontolinuxandshells)

[https://quickref.me/chmod](https://quickref.me/chmod)

[Chmod Command Cheat Sheet & Quick Reference](https://quickref.me/chmod)

---

# Bash scripting

### If statements conditions reference

[Conditions in bash scripting (if statements)](https://acloudguru.com/blog/engineering/conditions-in-bash-scripting-if-statements)

## Additional Research

[Open-Source Introduction to Bash Scripting Ebook/Guide](https://devdojo.com/bobbyiliev/open-source-introduction-to-bash-scripting-ebook-guide)

# Creating Virtual Machines and  Cloud Fundamentals

[DigitalOcean | The Cloud for Builders](https://www.digitalocean.com/)

# CI/CD

## ****Continuous Integration****

> Continuous integration (CI) is the process of automatically building and testing code every time a team member commits code changes to [version control](https://learn.microsoft.com/en-us/devops/develop/git/what-is-version-control)
. A code commit to the main or trunk branch of a shared repository triggers the automated build system to build, test, and validate the full branch.
> 

## ****Continuous Delivery?****

> is the process of automating build, test, configuration, and deployment from a build to a production environment. A *release pipeline*
 can create multiple testing or staging environments to automate infrastructure creation and deploy new builds. Successive environments support progressively longer-running integration, load, and user acceptance testing activities.
> 

![Untitled](Intro%20to%20DevOps%20Workshop%20-%20Tuwaiq%20Academy%202507ea4f63f44777b914490049ff68cd/Untitled%206.png)

## Yaml language

[YAML Syntax - Ansible Documentation](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)

[YAMLlint - The YAML Validator](http://www.yamllint.com/)

## CI/CD With Github Actions

### Use cases:

- Code cov
- build, test, lint, deploy, and create notifications
- code owners
- scan packages

# Docker Basics

[Sample application](https://docs.docker.com/get-started/02_our_app/)

### What is a Container ?

what *is* a container? Simply put, a container is a sandboxed process on your machine that is isolated from all other processes on the host machine.

- uses Linux Utilities :
    - namespace
    - c-group
    - chroot
    - JSON security profiles
- is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI.
- can be run on local machines, virtual machines or deployed to the cloud.
- is portable (can be run on any OS).
- is isolated from other containers and runs its own software, binaries, and configurations.

## What is a Container Image ?

Image contains the container’s filesystem, it must contain everything needed to run an application,

all dependencies, configurations, scripts, binaries, etc. Also, contains other configuration for the container, such as environment variables, a default command to run, and other metadata.

## Docker CLI Basics

### Build an image

```bash
docker build -t <name-of-image> .
```

### Run the Containerized App

```bash
docker run -p 3000 <name-of-image>
```

### Other Commands

- `ps`
- `kill`
- `tag`
- `image`
- `container`
- `create`
- `logs`
- `restart`
- `rm`
- `rmi`
- `push`
- `search`

### Additional Research

[](https://www.docker.com/wp-content/uploads/2022/03/docker-cheat-sheet.pdf)

[The Ultimate Docker Cheat Sheet](https://dockerlabs.collabnix.com/docker/cheatsheet/)

---

# Extra: Docker Compose

## Intro

[Overview](https://docs.docker.com/compose/)

## Docker compose commands reference

[Overview of docker compose CLI](https://docs.docker.com/compose/reference/)

# GitOps

[GitOps](https://www.gitops.tech/)

# DevSecOps

[https://i.blackhat.com/USA-19/Thursday/us-19-Shrivastava-DevSecOps-What-Why-And-How.pdf](https://i.blackhat.com/USA-19/Thursday/us-19-Shrivastava-DevSecOps-What-Why-And-How.pdf)

# Exercises ⚡

<aside>
💡 **You need to finish these exercises in order to start your project**

</aside>

## Bash CLI

1. Save all your current relative directories and files into a file called rel.txt
2. Save all your current absolute directories and files into a file called abs.txt
3. Create a new alias command called `yourname`  which show all directories and files including hidden ones
4. Show the file content
5. Create a folder and `move` the file to it

## Bash Scripting

### Pre-requisites

- Clone project Github Repository
- Open the file `13_setup_machine`

1. You need to implement `installPackages`  and `createShortcuts` functions
    1. Follow the comments inside each function to help you implement what you need
    2. Run the script to test your result
        1. `cd ./scripts`
        2. `chmod +x ./13_setup_machine.sh`
        3. `./13_setup_machine.sh`

## Docker Basics

1. Containerize your application in your favorite programming language ❤
    1. Create a Dockerfile to define your image
    2. Expose port 80 for your container
    3. Run this command inside your container `ls`
    4. Execute your app with the default command (`CMD`)
2. Build your image
3. Run Your image

**Extra** ⚡**:**

1. Create a Dockerhub user
2. Build the image with a tag starting with `dockerhub_username`/`<choose_a_name>` 
3. Push your image into the docker registry

# Project

Project Overview Diagram: 

![DevOps-project.png](Intro%20to%20DevOps%20Workshop%20-%20Tuwaiq%20Academy%202507ea4f63f44777b914490049ff68cd/DevOps-project.png)

# Workshop Contributors

- Abdulrahman Awadh
    - Creating workshop project diagram to explain to students how the project is going to be implemented

# Conclusion

## Where to Go From here

[DevOps Roadmap: Learn to become a DevOps Engineer or SRE](https://roadmap.sh/devops)

[The Twelve-Factor App](https://12factor.net/)
