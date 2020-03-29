# encoding: utf-8
# -*- mode: ruby -*-
# vi: set ft=ruby :
# Box / OS
# Username on your host machine
LOGGED_IN_USER = 'marlon'
# HOST Port — uncomment this to use NAT instead of DHCP - will be forwarded to GUEST_PORT on VM
HOST_PORT = 8080
# Host folder to sync
HOST_PATH = '/Users/' + LOGGED_IN_USER + '/gitrepos/mean-stack-tutorial-thinkster/' + VM_NAME

# Where to sync to on Guest — 'vagrant' is the default user name
GUEST_PATH = '/home/' + VM_USER + '/' + VM_NAME
VAGRANT_BOX = 'ubuntu/trusty64'

# Memorable name for your
VM_NAME = 'mean-tutorial-vm'

# VM User — 'vagrant' by default
VM_USER = 'vagrant'

# Port on guest that will be redirected to HOST_POR
GUEST_PORT = 8888

Vagrant.configure(2) do |config|
  # Vagrant box from Hashicorp
  config.vm.box = VAGRANT_BOX

  # Actual machine name
  config.vm.hostname = VM_NAME
  # Set VM name in Virtualbox
  config.vm.provider "virtualbox" do |v|
    v.name = VM_NAME
    v.memory = 2048
  end
  #DHCP — comment this out if planning on using NAT instead
  # config.vm.network "private_network", type: "dhcp"
  # # Port forwarding — uncomment this to use NAT instead of DHCP
  config.vm.network "forwarded_port", guest: GUEST_PORT, host: HOST_PORT

  # Sync folder
  config.vm.synced_folder HOST_PATH, GUEST_PATH

  # Disable default Vagrant folder, use a unique path per project
  config.vm.synced_folder '.', '/home/'+VM_USER+'', disabled: true

  # Install Git, Node.js 6.x.x, Latest npm
  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y git
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    apt-get install -y nodejs
    apt-get install -y build-essential
    npm install -g npm
    apt-get update
    apt-get upgrade -y
    apt-get autoremove -y
  SHELL

  $http_script = <<-'SCRIPT'
    pid=$(sudo fuser ${GUEST_PORT_VAR}/tcp 2>/dev/null)
    kill $pid
    cd $VM_NAME_VAR
    python -m SimpleHTTPServer $GUEST_PORT_VAR
  SCRIPT

  config.vm.provision "shell", inline: $http_script, env: {"VM_NAME_VAR" => VM_NAME, "GUEST_PORT_VAR" => GUEST_PORT}, run: 'always'

end
