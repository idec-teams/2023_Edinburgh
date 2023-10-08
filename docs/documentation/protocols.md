# Protocols

## Primer Sequences 

| Primer              | x | Sequence (5’--> 3’)                              |
| ------------------- | - | ------------------------------------------------ |
| Genomic Forward     | GF| CAGTGAAGACATAATGAATTCATCCCTTGTGATCC             |
| Genomic Reverse     | GR| CAGTGAAGACATAAGCATTGGCGATCGCCTACAT             |
| Level 0 Forward     | L0F| TTGAGTGAGCTGATACCGCT                             |
| Level 0 Reverse     | L0R| GTCTCATGAGCGGATACATATTTGAATG                    |
| Level 1 Forward     | L1F| GAACCCTGTGGTTGGCATGCACATAC                       |
| Level 1 Reverse     | L1R| CTGGTGGCAGGATATATTGTGGTG                         |
| Level T Forward     | LTF| TAGTGAGTGGGTTGCGCTC                             |
| Level T Reverse     | LTR| GTTACCACCGCTGCGTTC                             |
| P1 Primer           | P1|                                                  |
| P2 Primer           | P2|                                                  |

## Preparation of NaCl Lysogeny Broth and BL21 Growth Curve

1.	Prepare Sterile 34% (w/v) Saline stock solution
2.	Add Saline solution in increasing amounts to LB to a falcon tube to create medium of varying salt concentrations and then inoculate with 1ml of overnight culture BL21 using the table below:

| Concentration of NaCl in LB media (w/v) | Volume of 34% Saline Solution (mL) | Volume of LB media (mL) | Volume of BL21 in LB |
| --------------------------------------- | --------------------------------- | ----------------------- | --------------------- |
| 0.5%                                  | 0                                 | 29                      | 1                     |
| 1%                                    | 0.441                             | 28.559                  | 1                     |
| 1.5%                                  | 0.882                             | 28.118                  | 1                     |
| 2%                                    | 1.323                             | 27.677                  | 1                     |
| 2.5%                                  | 1.764                             | 27.236                  | 1                     |
| 3%                                    | 2.205                             | 26.795                  | 1                     |
| 3.5%                                  | 2.646                             | 26.354                  | 1                     |
| 4%                                    | 3.087                             | 25.913                  | 1                     |
| 4.5%                                  | 3.528                             | 25.472                  | 1                     |
| 5%                                    | 3.969                             | 25.031                  | 1                     |
| 5.5%                                  | 4.380                             | 24.590                  | 1                     |
| 6%                                    | 4.821                             | 24.149                  | 1                     |

3.	Take an initial OD600 from each of the cultures
4.	Incubate the cultures at 37°C 250rpm 
5.	Take a 1ml sample every hour and record the OD600 of each culture. If the OD600 of a culture is significantly more than 1, dilute the sample and measure the OD600.

## Preparation of TOP10 and BL21 Competent cells 

1.	Pick a single colony of TOP10 or BL21 and inoculate 10ml LB before culturing overnight at 37°C 250rpm
2.	Inoculate 100ml of LB with 1ml of this overnight culture 
3.	Incubate at 37°C 200rpm until the OD600 is between 0.3 and 0.6
4.	Transfer equal volumes of the media into 2x 50ml falcon tubes and leave on ice for 30 minutes
5.	Centrifuge at 4000g at 4°C for 5 minutes
6.	Pour off the supernatant and gently resuspend the pellet in 25ml ice cold 0.1M MgCl2
7.	Incubate on ice for 30 minutes
8.	Centrifuge at 4000g at 4°C for 5 minutes
9.	Pour off the supernatant and gently resuspend the pellet in 25ml ice cold 0.1M CaCl2
10.	Incubate on ice for 30 minutes
11.	Centrifuge at 4000g at 4°C for 5 minutes
12.	Pour off the supernatant and gently resuspend the pellet in 1.25ml ice cold 0.1M CaCl2/Glycerol solution (1.7ml 0.1M CaCl2, 0.3ml 100% Glycerol)
13.	Aliquot 100 μl and flash freeze on dry ice or on liquid nitrogen before storing at -80°C


## PCR Extraction of ggpS from synechocystis sp. PCC 6803 Genome

1.	Centrifuge 200μl of synechocystis culture In a microcentrifuge at 13,000rpm for 1 minute.
2.	Drain the supernatant and resuspend the pellet in 200μl double distilled water.
3.	Transfer 20μl of this to a PCR tube and freeze at -20°C for 10 minutes to lyse the cells.
4.	Create a reacton mix using the following:

| Reaction Component         | Volume   |
| -------------------------- | -------- |
| 5x Q5 Reaction Buffer      | 5μl      |
| 10mM dNTP mix             | 0.5μl    |
| 10μM GF Primer            | 1.25μl   |
| 10μM GR Primer            | 1.25μl   |
| Lysed Synechocystis       | 10μl     |
| Q5 Polymerase (Add Last)  | 0.25μl   |
| ddH2O                     | 6.75μl   |

5.	Run the PCR reaction with the thermocycler set to run an initial denaturation of 98°C for 30 seconds followed by 35 cycles of 98°C  for 10 seconds, 66°C for 30 seconds and 72°C for 30 seconds before a final extension at 72°C for 2 minutes and hold the reaction at 4°C.
6.	Make a 1% Agarose Gel and run the reaction product using Gel electrophoresis.
7.	Extract the product of the correct size using the QI-Aquick gel extraction kit (Qiagen)

## Cyanogate level 0 Assembly 

1.	Create a reaction mix in a PCR tube with the following components:

| Reaction Component              | Amount   |
| ------------------------------- | -------- |
| ggpS gene insert                | 200 ng   |
| PICH41308 acceptor vector       | 100 ng   |
| 10x T4 ligase buffer            | 2μl      |
| bbsI-HF                         | 1μl      |
| T4 Ligase - HF                  | 1μl      |
| ddH2O                           | Fill to 20μl |

2.	Set the Thermocycler to run in the following cycles: 15 cycles of 10 minutes at 37°C then 10 minutes at 16°C followed by one cycle at 37°C for 20 minutes and one cycle at 65°C for 10 minutes and hold at 16°C.

## Cyanogate level 1 Assembly 

1.	Create a reaction mix in a PCR tube with the following components:

| Reaction Component                        | Amount   |
| ----------------------------------------- | -------- |
| ggpS level 0                              | 200 ng   |
| PTRC10 Promoter level 0                   | 200 ng   |
| pC0.082 terminator level 0                | 200 ng   |
| pICH47732 acceptor vector                  | 100 ng   |
| 10x T4 ligase buffer                      | 2μl      |
| Bovine Serum Albumin                     | 2μl      |
| BsaI-HF                                  | 1μl      |
| T4 Ligase - HF                           | 1μl      |
| ddH2O                                    | Fill to 20μl |

2.	Set the Thermocycler to run in the following cycles: 15 cycles of 10 minutes at 37°C then 10 minutes at 16°C followed by one cycle at 37°C for 20 minutes and one cycle at 65°C for 10 minutes and hold at 16°C.

## Cyanogate stpA level T Assembly

1.	 Create a reaction mix in a PCR tube with the following components:

| Reaction Component            | Amount   |
| ----------------------------- | -------- |
| stpA Gene block               | 200 ng   |
| pSEVA421 acceptor vector      | 100 ng   |
| 10x T4 ligase buffer          | 2μl      |
| Bovine Serum Albumin         | 2μl      |
| BbsI-HF                      | 1μl      |
| T4 Ligase - HF               | 1μl      |
| ddH2O                        | Fill to 20μl |

2.	Set the Thermocycler to run in the following cycles: 15 cycles of 10 minutes at 37°C then 10 minutes at 16°C followed by one cycle at 37°C for 20 minutes and one cycle at 65°C for 10 minutes and hold at 16°C.

## Plasmid transformations

1.	Make 50μl aliquots of BL21 or TOP10 cells
2.	Add 5μl of assembly reaction mix or 1μl of plasmid miniprep 
3.	Incubate these cells on ice for 30 minutes 
4.	In a water bath, heat shock the cells at 42°C for 30 seconds 
5.	Return the cells to ice for 2 minutes
6.	Add 450μl SOC media and incubate the cells at 37°C 200rpm for 1 hour
7.	Spread 50μl of the incubated cells on a plate with the correct antibiotic and for cyanogate containing IPTG and X-GAL for blue/white selection
8.	Spin the remaining cells at 6000rpm for 1 minute in a microcentrifuge
9.	Without disturbing the pellet remove the supernatant leaving 50μl of media behind
10.	Resuspend the pellet in the remining media
11.	Spread the remaining cells onto another LB agar plate as before.
12.	Incubate the cells overnight at 37°C


## Confirmation of Plasmid Assembly and Transformation by Colony PCR 

1.	Check the plates from the overnight culture. Colonies for cyanogate will have blue/white selection and colonies with the lacZ gene transformed will appear as white. For a JUMP assembly expose the plate to UV and the colonies will fluoresce if transformed with the GFP gene.
2.	Pick these white or fluorescent colonies and resuspend them in 50μL ddH20 in a PCR tube.
3.	Take 40ml of this and inoculate 1ml LB with this to create a stock of that colony 
4.	Freeze the remaining 10μl in the PCR tube at -20°C for 10 minutes
5.	Create a reaction mix in a PCR tube with the following components:

| Reaction Component           | Amount   |
| ---------------------------- | -------- |
| Lysed Cells                  | 10μl     |
| 5x Green GoTaq Buffer        | 5μl      |
| 10mM dNTP mix                | 0.5μl    |
| 10μM Forward Primer          | 2μl      |
| 10μM Reverse Primer          | 2μl      |
| GoTaq G2 DNA Polymerase      | 0.125μl  |
| ddH2O                        | Fill to 25μl |

6.	Set the thermocycler to run the following cycles: Initial denaturation step of 95°C for 2 minutes and then 35 cycles of 95°C for 1 minute, annealing at 42-65°C depending on the primer and an extension at 72°C for 2 minutes (1Min/Kb) with a final extension of 72°C for 5 minutes and finally hold at 4°C.
7.	Take the PCR product and run on 1% Agarose gel by gel electrophoresis and use a UV imager to image the bands on the gel, confirming bands of the expected size.

## JUMP Level 1 Assembly 

1.	Create a reaction mix in a PCR tube with the following components:

| Reaction Component                                   | Amount    |
| ---------------------------------------------------- | --------- |
| ggpS epPCR digest (20fmol/μl)                       | 1μl       |
| pJUMP29-1A acceptor vector (20fmol/μl)               | 1μl       |
| PJ23100 Promoter in level 0 (20fmol/μl)              | 1μl       |
| L3SAP51 terminator in level 0 (20fmol/μl)           | 1μl       |
| pET Ribosome Binding Site in level 0 (20fmol/μl)    | 1μl       |
| T4 DNA ligase - HF                                  | 0.25μl    |
| BsaI-HF                                             | 1μl       |
| T4 Ligase Buffer                                    | 2μl       |
| ddH2O                                               | Fill to 20μl |

2.	Set the Thermocycler to run in the following cycles: 1 cycle at 37°C for 15 minutes then 25 cycles at 37°C for 3 minutes and 16°C for 3 minutes. Then 1 cycle of 37°C for 15 minutes, 50°C for 5 minutes and 80°C for 5 minutes before a further 25 cycles of 37°C for 3 minutes and 16°C for 3 minutes and 1 cycle of  37°C for 15 minutes, 50°C for 5 minutes and 80°C for 5 minutes and finally hold the reaction at 4°C.


## Error Prone PCR 

1.	Create a reaction mix in a PCR tube with the following components: 

| Reaction Component                                      | Amount    |
| ------------------------------------------------------- | --------- |
| 10x NEB Taq DNA polymerase Thermopol buffer            | 5μl       |
| Genomic Forward Primer                                  | 1μl       |
| Genomic Reverse Primer                                  | 1μl       |
| Taq polymerase                                          | 0.5μl     |
| ggpS Level 0 Template DNA                              | 50ng      |
| MgCl2                                                   | 2.95mM    |
| MnCl2                                                   | 0.1mM     |
| ddH2O                                                   | Fill to 50μl |

2.	Set the thermocycler to have an initial denaturation at 95°C for 1 minute, 25 Cycles of 30 seconds at 95°C, 45 seconds at 53°C and 90 seconds at 68°C, a final elongation at 68°C for 5 minutes and hold at 4°C
3.	Puridy the product with the Monarch DNA Gel Extraction kit (New England Biolabs) and store at -20°C
