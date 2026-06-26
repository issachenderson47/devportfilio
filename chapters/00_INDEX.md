# CCNA Hub — Chapter & Section PDF Index

35 PDFs total: 16 extracted from Lowe's *Networking All-in-One For Dummies*, 19 original
study-note PDFs for topics Lowe doesn't cover.

## Part 1 — Lowe Book Chapters (raw extracts, `lowe_chapters/`)
Use these for conceptual background on the matching hub sections. None of these contain
Cisco IOS commands — they're vendor-neutral concept chapters.

| File | Lowe Chapter | Maps to Hub Section(s) |
|---|---|---|
| `lowe_bk1_ch1_welcome_to_networking.pdf` | Bk1 Ch1 | General intro / §3 |
| `lowe_bk1_ch2_network_infrastructure.pdf` | Bk1 Ch2 | §10 OSI Layer 1 |
| `lowe_bk1_ch3_switches_routers_and_vlans.pdf` | Bk1 Ch3 | §9 OSI L2, §11 Device Functions, §22 VLAN (background) |
| `lowe_bk1_ch4_cybersecurity.pdf` | Bk1 Ch4 | §32 Threat Landscape (background) |
| `lowe_bk1_ch5_servers_and_virtualization.pdf` | Bk1 Ch5 | General background (not core CCNA) |
| `lowe_bk1_ch6_cloud_computing.pdf` | Bk1 Ch6 | General background (not core CCNA) |
| `lowe_bk2_ch1_network_protocols_and_standards.pdf` | Bk2 Ch1 | §3 Host-to-Host, §6 OSI L3, §9 OSI L2, §10 OSI L1 |
| `lowe_bk2_ch2_tcp_ip_and_the_internet.pdf` | Bk2 Ch2 | §3 Host-to-Host (background) |
| `lowe_bk2_ch3_ip_addresses.pdf` | Bk2 Ch3 | §6 OSI L3, §7 IP Classes, §8 Subnetting, §29 NAT (intro) |
| `lowe_bk2_ch4_routing.pdf` | Bk2 Ch4 | §16 Routing Fundamentals |
| `lowe_bk2_ch5_dhcp.pdf` | Bk2 Ch5 | §23 DHCP |
| `lowe_bk2_ch6_dns.pdf` | Bk2 Ch6 | General background (not its own hub section) |
| `lowe_bk2_ch7_tcp_ip_tools_and_commands.pdf` | Bk2 Ch7 | §13 Troubleshooting, §18 Connectivity Troubleshooting (background) |
| `lowe_bk3_ch1_local_area_networks.pdf` | Bk3 Ch1 | §9/§10 background |
| `lowe_bk3_ch2_wide_area_networks.pdf` | Bk3 Ch2 | §31 WAN |
| `lowe_bk4_ch2_wireless_networks.pdf` | Bk4 Ch2 | §37 Wireless Networking |

## Part 2 — Original Study Notes (`new_sections/`)
Written from scratch to match your hub's format: Key Concepts, Command Reference,
Configuration Walkthrough, Worked Scenario, Common Mistakes, Exam Tips.

| File | Hub Section | Priority |
|---|---|---|
| `new_s4_the_cisco_ios_operating_system.pdf` | §4 IOS Operating System | High |
| `new_s12_the_life_of_a_packet.pdf` | §12 Life of a Packet | High |
| `new_s17_dynamic_routing_protocols.pdf` | §17 Dynamic Routing Protocols | High |
| `new_s19_igp_fundamentals.pdf` | §19 IGP Fundamentals | High |
| `new_s20_ospf.pdf` | §20 OSPF | **High** |
| `new_s24_hsrp.pdf` | §24 HSRP | High |
| `new_s25_stp.pdf` | §25 STP | **High** |
| `new_s26_etherchannel.pdf` | §26 EtherChannel | High |
| `new_s27_port_security.pdf` | §27 Port Security | **High** |
| `new_s28_acls.pdf` | §28 ACLs | **High** |
| `new_s30_ipv6.pdf` | §30 IPv6 | **High** |
| `new_s13_cisco_troubleshooting_methodology.pdf` | §13 Troubleshooting Methodology | Standard |
| `new_s14_cisco_router_and_switch_basics.pdf` | §14 Router/Switch Basics | Standard |
| `new_s15_cisco_device_management.pdf` | §15 Device Management | Standard |
| `new_s22_vlan_inter_vlan_routing.pdf` | §22 VLAN & Inter-VLAN Routing | Standard |
| `new_s32_the_security_threat_landscape.pdf` | §32 Security Threat Landscape | Standard |
| `new_s33_cisco_device_security.pdf` | §33 Cisco Device Security | Standard |
| `new_s34_network_device_management.pdf` | §34 Network Device Management | Standard |
| `new_s35_qos.pdf` | §35 QoS | Standard |

## Sections still without dedicated material
None — between Lowe's chapters and the 19 originals, all CCNA-relevant hub sections (§3,
4, 6–17, 19, 20, 22–35, 37) now have at least one PDF. §18 (Connectivity Troubleshooting)
and §5 (Transport Layer) ride along inside the Lowe TCP/IP tools and protocols chapters
respectively — flag if you'd like those split into their own dedicated PDFs too.

## File naming note
Your hub's `CHAP_FILES` JS object expects specific filenames matching the Odom OCG
structure (e.g. `v1_ch21_ospf_concepts.pdf`) inside a `chapters/` folder. These files are
named independently (`lowe_*` / `new_*` prefixes) so they won't collide with or overwrite
those slots — you'll need to either rename them to match `CHAP_FILES`, or add a new
"Supplementary Reading" section to the hub's JS that points at these filenames directly.
