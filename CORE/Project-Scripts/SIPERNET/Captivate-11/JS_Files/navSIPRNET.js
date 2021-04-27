$(document)
    .ready(function() {
        ///////////// Used to check for browser type ////////////////////////////////
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        var isEdge = !isIE && !!window.StyleMedia;
        var isChrome = navigator.webkitGetUserMedia; 

        /////////////// Component Properties ///////////////////////////
        
        // Turns Progress bar on and off
        var isProgress = true;

        // Controls position of CC text box
        var ccLeft = '0px';
        var ccHeight = '75px';
        var ccTop = null;        
        var ccRight = null;        
        var ccBottom = '40px';        
        var ccLeft = null;
        var ccWidth = '960px';
        var ccTextColor = 'grey';
        var ccBackgroundColor = 'white';        

        // Controls position of progress bar
        var proPos = 'fixed';        
        var proTop = null;
        var proRight = null;
        var proBottom = "62px";
        var proLeft = '0px';        
        var proWidth = '955px';
        var proHeight = '5px';
        var proZindex = '300';

        // CC Text

        // slide property corresponds to number of the slide
        // text property corresponds to cc text to display on screen
        // If slide does not have CC text do not include slide in array.
        var ccTextArray = [
            {
                slide: "Disaster on the Horizon",
                text: "The date is in the not too distant future and you are stationed at a major U.S. Army medical command activity. The world situation has remained tenuous, and recently a significant breach of security has resulted in a series of tragedies for the nation and the Army.",
            },

            {
                slide: "Possible SIPRNET Security Breach",
                text: "An initial senior-level critical intelligence review indicated a possible security breach in the Department of Defense SIPRNET backbone may be directly responsible for the compromise of information resulting in successful attacks against an unarmed medical evacuation flight and the two senior defense officials. As a result of this initial review, the Deputy Secretary of Defense directed each of the service secretaries to conduct thorough investigations into the possible security breach or compromise of information, and emphasize the importance of both initial SIPRNET security awareness training and SIPRNET annual refresher training. The Secretary of the Army and Vice Chief of Staff have directed the internal Army investigations be conducted by commanders, directors, and section leaders with their senior noncommissioned officers. They also directed them to immediately spot-check SIPRNET security training. This directive is not intended to slight the security and information technology departments, but rather to emphasize the seriousness of the security breach, and that the protection of classified and sensitive, but unclassified information is everyone’s responsibility. Your personal familiarity with the SIPRNET and your knowledge of the associated security requirements will be particularly important if you are tasked to conduct the investigation into those areas for which you are responsible and also spot-check the annual SIPRNET security refresher training.",
            },

            {
                slide: "The Threat",
                text: "The discussion of notional, but potentially real, attacks against a medical evacuation flight and two senior defense officials, possibly resulting from a SIPRNET security compromise or violation, offers an easy transition to briefly discussing the threat to–or against–our Army communications backbone. A frequent reaction from those not actively involved in intelligence or communications security matters is: What threat? For the purposes of this SIPRNET security refresher, we can classify the potential threat against MEDCOM and the MEDCOM SIPRNET communications backbone into four distinct areas: The intelligence services of a hostile or adversary state, such as Iran or North Korea which come quickly to mind. The intelligence services or commercial interests of a “friendly-competitor” state, and France and Israel serve as useful examples in this case. A U.S. person or persons attempting to compromise or steal classified information for ideological reasons, which can be difficult for loyal and law-abiding Americans to understand, or for criminal financial reasons, is a third category; Aldridge Ames, Robert Hanssen, and Army Private First Class Bradley Manning come quickly to mind. Finally, foreign hackers or anarchists who “purposefully acquire” and release classified U.S. Government information for their personal ideological or criminal financial purposes are a fourth category.",
            },

            {
                slide: "Cyber Command 1",
                text: "The alleged leaking of information to the Wiki-leaks organization by Army Private First Class Bradley Manning is a recent example. Another related example is the group “Anonymous,” who allegedly hacked into the website of the commercial open-source intelligence company “STRATFOR” and released the names, e-mail address, credit card numbers, and other background information of their commercial AND government customers onto the Internet.",
            },

            {
                slide: "Cyber Command 2",
                text: "The purpose of this discussion of potential threats in the “Cyber domain” is not to make you an expert, but rather only to sensitize you as an Army leader or responsible individual to the many potential individuals, ideology based groups, commercial concerns, and foreign governments who may attempt to breach our information security systems for a multitude of reasons.",
            },

            {
                slide: "Cyber Command 3",
                text: "Correctly safeguarding and securing our Classified Military Information, or “CMI” as it is frequently called, seems like a relatively straight forward and simple requirement. However, the tense and uncertain international situation coupled with the advent of modern automation communications, the social media environment, and related advanced and emerging “high-technology” associated devices have combined to make the issue of basic “Information Security” much more complicated than it might seem. For you to fully appreciate and understand your individual and leader requirements for this SIPRNET annual training, it is appropriate to first ask the basic question of “Why are you required to have this annual refresher training?\"",

            },

            {
                slide: "Cyber Command 4",
                text: "Most security violations involving SIPRNET security procedures across the Army result from people either not receiving or understanding their initial guidance and training or from not getting correct and updated guidance on policy changes.",
            },

            {
                slide: "Cyber Command 5",
                text: "Among the specific security violations we see are: not being able to correctly identify mismarked classified information or products; not understanding the requirements or how to transmit classified information using facsimile or scanner; mistakenly sending classified documents or information over the “Non-classified Internet Protocol (IP) Router Network” or NIPRNET; and using unauthorized external media storage devices such as thumb drives, flash drives, memory sticks, and other portable and removable storage media.",
            },

            {
                slide: "Why this Training",
                text: "The bottom line on why we conduct this annual SIPRNET security refresher training is really for three distinct but related reasons: One, because there are real and growing threats to our security that increasingly take place within our cyber domain; Two, we would like to eliminate, or at least minimize, minor security violations; Three, we are required to do so by MEDCOM policy.",
            },

            {
                slide: "SIPRNET Responsibility 1",
                text: "As you are already aware, the security of classified military information is not only a command responsibility, but is also the direct, individual responsibility of every Army leader and member of the Army team, whether Soldier, DA civilian, or contractor. As we previously noted, while this annual SIPRNET security refresher training is a “directed requirement,” we know that you will also be much more effective as a leader if you understand the reasons for the annual requirement, and personally grasp the difficult and potentially dangerous security environment in which our Army operates.",
            },

            {
                slide: "SIPRNET Responsibility 2",
                text: "Let’s state directly that the purpose of this annual SIPRNET refresher training, the Terminal Learning Objective, is to ensure that you, and all MEDCOM SIPRNET users, are aware of their responsibilities for the protection of classified data and systems in accordance with applicable Army regulations and MEDCOM Policy on SIPRNET Security Procedures. In addition to “being aware” of your responsibilities, you will also implement these best practices toward maintaining a secure SIPRNET environment. As with much Army training, to enhance your understanding and increase the interest of a potentially dry, but necessary training presentation, we will divide the Terminal Learning Objective into Enabling Learning Objectives or ELOs.",
            },

            {
                slide: "SIPRNET Responsibility 3",
                text: "The serious nature of the notional attacks has made an impression on you, and you think about how you might conduct either the investigation or the spot-checks. You mentally review the SIPRNET associated security requirements and procedures you believe are in place. You recently completed the command’s annual SIPRNET refresher training, so the specifics and learning objectives are fresh in your mind. In fact, you remember the Terminal Learning Objective almost verbatim: “To ensure that you, and all MEDCOM SIPRNET users, are aware of their responsibilities for the protection of classified data and systems in accordance with applicable Army regulations and MEDCOM Policy SIPRNET Security Procedures. In addition to “being aware” of your responsibilities, you will also implement these best practices toward maintaining a secure SIPRNET environment.” As you review the situation within your organization, a potential plan of action begins to form and you categorize items you could potentially check into 16 topics that cover most of the areas associated with SIPRNET security. That is a great deal of detailed information, but you do recognize potential areas that you could quickly spot check to ensure they are in compliance. Please select the Right Arrow to view the Enabling Learning Objectives.",
            },

            {
                slide: "Enabling Learning Objectives",
                text: "The Enabling Learning Objectives, or ELOs, are designed to organize the presentation and topics of discussion into “chunks” that are easy to both explain and understand; or in our case, to refresh your existing knowledge. The ELOs are: Define SIPRNET and identify personnel security requirements for SIPRNET users; identify SIPRNET users security training requirements for identifying, reproducing, transporting, storing, and destroying Classified Military Information, while taking all necessary precautions to ensure this information is not compromised; identify the procedures necessary to maintain the security of the SIPRNET system; identify SIPRNET operator procedures; identify SIPRNET Command and Control and access procedures; identify SIPRNET media storage guidelines; and Identify procedures for transporting classified materials and media. This may sound like a great deal of information, but remember that it is “annual refresher training” and is not designed to “re-teach” the many security procedures and policy with which you are already familiar.",
            },

            {
                slide: "Definition",
                text: "Although the definition and history of the SIPRNET were covered in your initial SIPRNET briefing and orientation, we have found that for the annual refresher training, a few basic definitions and related topics are worth addressing to enhance your knowledge and overall understanding. Briefly, and as background information, SIPRNET is the acronym for “Secret Internet Protocol Router Network”, and is a secure encrypted network authorized to process Classified Military Information up to and including U.S. Secret. The direct relevance to you as a MEDCOM SIPRNET user is that the SIPRNET is the communications system the Army most commonly uses for passing tactical and operational information at the SECRET classification level. SECRET is a medium level of security classification and is the “typical” level for sensitive doctrine and procedures for regular military action such as orders for troop movement and even “normal” combat operations, after action reports from conventional combat action, resource inventories of Soldiers, other personnel, and multiple classes of supply, and communications between MEDCOM and regional command or subordinate command units, responding to HQDA taskers, medical research, surety, and CBRN events.",
            },

            {
                slide: "How the SIPRNET Fits In",
                text: "Many Soldiers and Army civilians are often initially surprised to learn that the SIPRNET offers a “medium” level of security, so it is useful to confirm and visually show that unclassified, even sensitive but unclassified, information is correctly carried on the “Unclassified but Sensitive Internet Protocol Router Network” most often said as “NIPRNET”. The SIPRNET has become the core of our warfighting command and control capability. TOP SECRET operational and intelligence communications requirements are integrated into other communications backbones such as the Defense Intelligence Agency sponsored Joint Worldwide Intelligence Communications System, known by the acronym “JWICS”. We are presenting this “tiered communications system” only to help you visualize how the SIPRNET fits into our overall Army and Department of Defense communications infrastructure.",
            },

            {
                slide: "Transition and Engagement 1",
                text: "Good Day, I'm Colonel Jill Grant, and I’m the Director of the National Security Operations Center at the National Security Agency. Your MEDCOM Security Manager invited me here to help emphasize the importance of maintaining the security of our Information Networks, and in this specific case, your SIPRNET. As a way of introduction and background, the National Security Operations Center works closely with our Threat Operations Center to provide total situational awareness of world events and to identify network-based threats to protect United States and allied communications networks. I’ll tell you that protecting our communications from adversaries and hackers is a full time job. Moreover, your personal attention to basic SIPRNET and general security matters is the basis for a sound and successful security program. As a starter and to get you thinking, I am going to ask you to look at a graphic of a notional command suite at a major MEDCOM headquarters and see if you notice anything unusual or incorrect – from a security standpoint.",
            },

            {
                slide: "Transition and Engagement 2",
                text: "This could be the commander’s office in the command suite at your MEDCOM headquarters, or any of the major MEDCOM subordinate commands or health care facilities. You can see the general layout of the office and note the monitors for both the Commander’s NIPRNET and SIPRNET. The NIPRNET monitor has the green “Unclassified” sticker, and the SIPRNET monitor has the red “SECRET” sticker. Take a good look around the office and from a SIPRNET security focus, do you see anything that is incorrect—or something that you would correct if you were the commander? Now, I’ll show you something. Notice the shadows of the window blinds on the back of the commander’s chair and across the desk? Good for you if you did: one element of a good SIPRNET security practice and policy is to always locate your monitor where it is not visible from a window or door—where a person without a proper security clearance, the need-to-know, and access might be able to view it.Now that we’ve jumpstarted your security awareness let’s take a look at how SIPRNET access is granted and maintained.",
            },

            {
                slide: "Scenario",
                text: "Ms. Sue Ellen Thomas has recently been hired as an administrative assistant for the command group, and the Command Sergeant Major realizes that she will need access to the SIPRNET to perform her duties. How does Ms. Thomas get a SIPRNET account so she can perform her duties within the command group? In fact, how does any member of MEDCOM get a SIPRNET account and access to perform their required duties?",
            },

            {
                slide: "Basic Access Requirements",
                text: "As the Department of Defense, the Army, and MEDCOM increasingly use the SIPRNET for the core of their operational communications, a common requirement necessary to perform official duties will be access to the SIPRNET. To have access to the SIPRNET within the Army Medical Command, and be designated a “SIPRNET User,” there are basic requirements that must be met. A SIPRNET user must: have a mission requirement for SIPRNET access, a “need-to-know;” have a minimum of a SECRET security clearance; sign a Classified Information Nondisclosure Agreement; complete initial face-to-face SIPRNET training and do the annual refresher training; sign a statement of understanding of your security responsibilities; and sign the Computer User Agreement. If you have any doubts on who is “cleared” for classified information, you know to check with your organization’s Security Manager or S2 who maintains the security clearance access roster. This person or staff element also validates security clearances as Soldiers, civilians, and contractors transfer into or out of the organization.",
            },

            {
                slide: "Password Misplaced",
                text: "The ability to obtain and maintain a secret security clearance is a requirement for her new position, and Ms. Thomas had previously worked for the Federal Government in a position that required a secret clearance. The Command Sergeant Major nominated Ms. Thomas as a “SIPRNET user” and the command security manager was able to quickly activate her secret security clearance. Ms. Thomas completed the other administrative steps and training requirements and Sue Ellen was designated as a “MEDCOM SIPRNET user.” However, after receiving the SIPRNET token for her new account, she stopped in the ladies restroom and left her token on the sink as she walked out of the area. What happens now?",
            },

            {
                slide: "SIPRNET Access and Tokens",
                text: "This scenario with Ms. Thomas is a situation that occurs occasionally and presents us the opportunity to discuss SIPRNET tokens and personal identification numbers (PINs). The direct relevance to you is that in addition to having at least a secret security clearance and a SIPRNET user account, a basic security measure and requirement with which everyone can easily comply is ensuring that SIPRNET tokens are afforded the same protection as common access cards (CACs).  They should be treated as high-value, unclassified items.  Similar to CACs, SIPRNET tokens contain three individual public key infrastructure certificates used for identity verification, digitally signing email, and encrypting e-mail.  The PKI credentials encoded in the microchip of the SIPRNET token are protected by a PIN; not a password.  When inserted into the SIPRNET card reader and unlocked with the user PIN, the token is classified.  Never leave a token inserted into the card reader/workstation unattended. The 8-16 digit numeric PIN is chosen by and known only to the token holder.  Users will not carry their PINs on their person or share them with others.  PINs should be memorized to maintain the security of the network.  A PIN is not required to be changed unless it has been compromised.  After three consecutive, incorrect PIN entries, tokens will lock.  Locked tokens should be reported to the local Information Assurance Support Officer (IASO).",
            },

            {
                slide: "MEDCOM SIPRNET Cafe 1",
                text: "Now however, back to Ms. Sue Ellen Thomas and leaving her SIPRNET token in the ladies restroom and the question: “What happens now?” Whoever finds the token may recognize what it is: If they do, they should take custody of the token and safeguard it while reporting the discovery to their local Information Assurance Support Officer (IASO).  Damaged, lost, or stolen tokens should immediately be reported to the local IASO.  For lost/stolen tokens, the IASO should initiate certificate revocation and token reissuance.  This action renders the lost/stolen card useless to anyone who may find it or try to use it for illicit purposes. Ms. Thomas will probably be counseled on her failure to properly safeguard her token. If all other aspects of her duty performance have been satisfactory, she may be retrained on the importance of safeguarding her token. If the command again allows her access to the SIPRNET, it will be with a heightened awareness.",
            },

            {
                slide: "Facility and Terminal Security",
                text: "Within the Army Medical Command, SIPRNET computer terminals are usually located within a G3 area or Emergency Operations Center, or in certain circumstances, SIPRNET computers may be located with removable hard drives within a Command Suite. In general, these are controlled access areas where unaccompanied access is limited to identified and properly cleared personnel with recurring duties in the area. These areas are generally NOT approved for open storage of classified information, and classified material removed from storage will be kept under constant surveillance and control by authorized personnel. Another important policy item is that cellular telephones and other wireless devices are also prohibited. As a matter of good security practice, when you are using a SIPRNET terminal, you should ensure that your computer screen is not visible from windows or doorways; that uncleared personnel are not present when you are using the SIPRNET; and that computers and classified documents and notes are properly secured when not in use. This includes storing a removable hard-drive in a GSA-approved security container.",
            },

            {
                slide: "MEDCOM SIPRNET Cafe 2",
                text: "Another possible location for SIPRNET computers terminals is within the SIPRNET cafe.  While not all MEDCOM subordinate commands and organizations may have a SIPRNET cafe, you should picture it as an Internet cafe with multiple computers; only in this case, these are SIPRNET computers, and all the work is official government business that is classified and needs to be conducted via the SIPRNET. In many cases, the SIPRNET cafe may be the G3 Operations Center. The same security regulations and rules apply here as in the other restricted access areas: these are controlled access areas where unaccompanied access is limited to identified and properly cleared personnel with recurring duties in the area. These areas are generally NOT approved for open storage of classified information and classified material removed from storage will be kept under constant surveillance and control by authorized personnel. Also, cellular telephones and other wireless devices are prohibited, in accordance with Army Regulation 25-2. As a matter of good security practice, when you are using a SIPRNET terminal, you should ensure that the computer screen is not visible from doorways or windows; that uncleared personnel are not present when you are using the SIPRNET; and that computers and classified documents and notes are properly secured when not in use. This includes storing a removable hard-drive in a GSA-approved security container.",
            },

            {
                slide: "Unsecured SIPRNET Cafe",
                text: "Upon entering the SIPRNET Cafe, Mr. Johns, a contract physician with a Secret security clearance and a MEDCOM designated SIPRNET user, noticed no one was around, but the SIPRNET hard drives were inserted into the computers and the safe was open and unsecure. What should Mr. Johns do now? This situation presents an interesting question with a number of options depending on the “unknowns” about the headquarters. We can assume that Mr. Johns is fairly senior if he is a contract physician with a SECRET security clearance and SIPRNET access. If there is a telephone in the room he could easily notify the security manager or a staff member of the operations center. Another option is to wait and secure the room until an appropriately cleared individual arrives. At this time, Mr. Johns should report the situation to his supervisor and the Security Manager. At a minimum, the command should initiate a preliminary inquiry to determine how and why the SIPRNET cafe was left unsecured and take actions to prevent this in the future.",
            },

            {
                slide: "MEDCOM SIPRNET Responsibility",
                text: "As a MEDCOM SIPRNET user, you have a responsibility to ensure that classified information with which you are working, to include removable hard drives, is properly stored when not being personally used, and that the container is locked at the end of each working day. Regardless of your location within MEDCOM, you’ll frequently see that your local security SOP will note that all classified material will be stored in a “GSA-approved security container.” A question for you is: How do you know what is a GSA-approved security container? Procuring and selecting an approved container is generally not your responsibility, however, you can verify for yourself that your container or safe meets GSA standards because all GSA approved security containers will have the official GSA label affixed to the front of the door or drawer in the upper left hand corner. If you have a GSA-approved security container that does not have the official GSA label affixed to the door or drawer in the above fashion, then it is not considered certified. Therefore, it cannot be used to safeguard classified material or information.",
            },

            {
                slide: "Sharing Access and Information",
                text: "When Kevin comes into the SIPRNET Cafe, he allows John to follow him in, and then allows John to view his SIPRNET account information and classified sites on the terminal. Given only this information, is this permissible or is this a security violation?",
            },

            {
                slide: "Unauthorized access in SIPRNET area",
                text: "Unfortunately, for both the Army at large and occasionally within MEDCOM, we will have events and situations occur where the known and established rules and policies are either ignored – or for some reason – not followed. One example is an unauthorized individual who is allowed into the SIPRNET area. This person does not have the appropriate clearance and picks up documents off of a printer authorized to print classified material, and walks out. “What happens now?” This situation, as presented and at face value, has so much potentially wrong that you are tempted to read it again to make sure you read it correctly the first time. Regardless, it is an excellent example we can use to reinforce the importance of all SIPRNET users knowing, understanding, following, and enforcing proper SIPRNET and other related security procedures and policy.",
            },

            {
                slide: "Know Your Work Area 1",
                text: "Among the learning points from this situation are: Only authorized individuals are permitted unaccompanied access into the SIPRNET area; these individuals are normally identified by an organizational badge or other designation. Also, personnel within the restricted access areas must be aware of who is in the area and what they are doing. This situation also presents a number of questions that you should read to yourself. However, these questions also lend themselves to a discussion of what happens if you see or suspect a security violation within the context of your duties within MEDCOM, the Army, and the U.S. government in general.",
            },

            {
                slide: "Know Your Work Area 2",
                text: "An uncomfortable aspect of a security violation, infraction, compromise, or loss of classified information or material is the resulting preliminary inquiry, and possible subsequent command investigation in accordance with Army Regulation 15-6. The outcome of both of these involves potential adverse career effects for Soldiers, Army civilians, and MEDCOM contract personnel. Although not the primary reason we should adhere to known standards for handling and safeguarding classified information, the possible adverse administrative actions are real for egregious violations of SIPRNET related security policy and standards. This is just one reason that it is useful to have a brief discussion of Army and MEDCOM policy for the unauthorized disclosure of classified information and other security incidents.",
            },

            {
                slide: "Handling Unauthorized Disclosure",
                text: "Chapter 10 of Army Regulation (AR) 380-5, the Department of the Army Information Security Program, contains both the Army policy for handling the unauthorized disclosure of classified information and other security incidents, and general guidance or “how to” for commanders. We won’t go into all the details contained in AR 380-5, but will familiarize you with how serious the Army views security incidents so you understand the possible repercussions of your actions, and also what to do should you discover non-secured classified information in the course of your duties. Anyone finding classified information out of proper control will take custody of, and safeguard the material. In addition, they should immediately notify the appropriate security authorities. Within MEDCOM, this would include your supervisor, commander, security manager, local Information Technology Office, and the Network Enterprise Center.",
            },

            {
                slide: "Preliminary Inquiry",
                text: "When an incident of possible loss or compromise of classified information is reported, Army policy requires commanders to immediately initiate a preliminary inquiry with the focus on answering: When, where, and how did the incident occur? What specific classified information was involved? What is the level of classification of the information? What persons, situations, or conditions caused or contributed to the incident? And who is the Original Classification Authority or owner of the information or material? If you are an officer, senior noncommissioned officer, or senior Army civilian in MEDCOM, it is possible that you may be appointed to conduct this type of preliminary inquiry. The person appointed to conduct the preliminary inquiry must have the appropriate security clearance, and should not have been previously involved—directly or indirectly—in the incident. Also, the command security manager will generally not be appointed to conduct the preliminary inquiry.",
            },

            {
                slide: "Preliminary Inquiry Outcome",
                text: "The intended outcome of the preliminary inquiry is a judgment about whether any compromise did occur and what if any potential damage to national security may have occurred. AR 380-5 prescribes that one of the following will be chosen: Compromise of classified information did not occur; compromise of classified information may have occurred; Compromise of classified information did occur, but there is no reasonable possibility of damage to national security; compromise of classified information did occur and damage to national security may result. The conduct of a preliminary investigation usually goes quite rapidly. However, if it is judged that there was a possible or actual loss of classified information—with potential damage to national security—another extensive investigation is triggered which is beyond the scope of this refresher training. As we mentioned when we began this discussion of the preliminary inquiry, the purpose of addressing this information is to both make you aware of the process and the potential adverse administrative action that might result from careless SIPRNET related security practices.",
            },

            {
                slide: "Debriefing Unauthorized Access of Disclosure",
                text: "There is one other circumstance we are going to cover that is related to security violations: this is debriefing in cases of unauthorized access. Within the Army and MEDCOM, occasionally classified information will be inadvertently released to individuals without either the need-to-know or without an appropriate security clearance. If the unauthorized access was by a person with the appropriate security clearance, but without the need to know, a formal debriefing is usually unnecessary. This is a decision for the organization’s commanding officer working with the counsel of the security manager. However, if the unauthorized access was by U.S. government personnel, whether civilian or military, without the appropriate security clearance, a formal debriefing will be accomplished. If the person who had unauthorized access is an employee of a cleared contractor participating in the national industrial security program, the same guidelines apply as for U.S. government personnel.",
            },

            {
                slide: "Emailing Classified Information",
                text: "In many ways, the SIPRNET and NIPRNET have changed the way we communicate. However, with all the positive things these new communication systems have accomplished, have also come difficulties, pitfalls, and the opportunity for security violations and compromise. For example: A Soldier received information via the SIPRNET and printed, scanned, and placed this information on the NIPRNET and sent it to 35 other—and different individuals without validating the classification of the document. In another case: A Soldier printed award paperwork which was classified “SECRET,” then scanned the document, and emailed it to over 30 individuals on the NIPRNET. Each of these two events is a violation of specific Army and MEDCOM SIPRNET security policy that could have been prevented with the proper knowledge and adherence to known and published SIPRNET security policy and standards by the individuals involved.",
            },

            {
                slide: "Removable Media Transfer and Storage 1",
                text: "One area of ALL government automation security that has received increased attention and emphasis is the prohibition on the use of removable media and temporary media storage devices. Because of the ability of these relatively modern and increasingly compact devices to store huge amounts of classified information, and the difficulty of detecting their surreptitious use, Department of Defense and Army policy has increasingly become more restrictive on their use, and even presence, within areas where classified information is discussed or widely used. For the purpose of MEDCOM policy and SIPRNET annual refresher training, the use of thumb drives, flash drives, memory cards, memory sticks, floppy disks, or similar portable or removable storage devices is expressly prohibited.",
            },

            {
                slide: "Removable Media Transfer and Storage 2",
                text: "Two additional security concerns related to modern communications and information systems are the issues of Spillage and Spyware. The major security concern that requires emphasis is the issue of data transfer across security domains. This is known as “spillage,” and is defined as a security incident that results in the transfer of classified information onto an information system that is not accredited (meaning authorized) for that level of classified data or information. Within MEDCOM, transferring any data from a SIPRNET computer to an unclassified system is prohibited. Another security concern is spyware, software that is secretly or surreptitiously installed into an information system to gather information on individuals or organizations without their knowledge; it is a type of malicious code. The three most common means of entering this code on a communications or information system are by the use of an unauthorized removable media storage device, entering a prohibited website, or through opening a contaminated attachment. This is an additional reason that removable modern media storage devices are prohibited on MEDCOM SIPRNET computers.",
            },

            {
                slide: "Knowing, Understanding, and Adhering",
                text: "Each of the two situations we presented earlier are probably the result of spillage. In each case, information was taken from the SIPRNET, scanned, and then transferred to the NIPRNET to send as unclassified email. This is a clear violation of SIPRNET security policy and resulted in embarrassment and lost time for the Soldiers, recipients of the emails, and their command. Knowing, understanding, and adhering to regulations and policy is the responsibility of every MEDCOM Soldier, civilian, and contractor.",
            },

            {
                slide: "Marking Classified Documents 1",
                text: "Although historically not a major area of security compromise or violation, it is prudent to remind MEDCOM SIPRNET users that classified documents with which they work or create must be both marked correctly and properly destroyed. All documents to include PowerPoint slides, presentations, and email messages must be marked to reflect the highest classification of those products, to include products which are entirely unclassified. The products or documents will include the following markings: The overall highest classification, individual paragraph classification marking, page or individual view-graph marking, the classification authority, and declassification instructions. Select the right arrow for an example of correctly marking a classified document. If you have additional questions, your organization security manager or S2 will be pleased to provide detailed guidance.",
            },

            {
                slide: "Sample Classification Markings",
                text: "This example shows the correct classification marking of a sample document. Please note the highest classification at both the top and bottom of the page, the marking of individual paragraphs with the highest classification of data or information within that paragraph, the classification authority of the document, and the specific declassification instructions for the overall document. As we have mentioned previously, if you have questions or difficulty with properly marking a document or even an e-mail message, your security manager, or S2 has the specific knowledge, training, and experience to assist you with correctly marking your document whether it is a visual presentation, e-mail, or formal written publication.",
            },

            {
                slide: "Marking Classified Documents 2",
                text: "MEDCOM SIPRNET users often create PowerPoint presentations on their SIPRNET computer, and it is important to remember that these presentations, if they contain classified information, must also be marked to accurately and correctly reflect the classification of the presentation. The classification marking must include the portions that are both classified and unclassified. As an example: for this classified presentation, note the title page has the highest classification of the presentation, the classification authority, and declassification instructions. For each page within the presentation, it is marked with the information addressed in that frame. Remember that each bullet must also be marked with the specific security classification that applies, especially if there are different security classifications for each point on that page.",
            },

            {
                slide: "E-mail and E-mail Attachments",
                text: "Communicating classified information by e-mail on the SIPRNET is very common. Although bothersome, you should take the same care with accurately and correctly marking your e-mail that you would do with a “formal” classified document. This is an example of a correctly marked, classified e-mail: Note that it is marked top and bottom with the highest classification it contains, the classification authority, and declassification instructions, and also that each line or paragraph is marked with the correct classification. This following e-mail is an example of an unclassified e-mail with a classified attachment. Please note the correct page and paragraph classification markings, and also the declaration that the e-mail is unclassified when separated from the classified attachment. These specific instructions and guidance may seem complicated and confusing if you don’t do this on a regular basis. As a point of guidance, remember to ask your Security Manager or S2 if you have any questions. It is their job to help you get this right and they want to help.",
            },

            {
                slide: "Information and Material Removal",
                text: "Transporting classified information or material requires great care, and a general rule is to minimize hand-carrying classified information or material outside of a classified working area. We have previously addressed the prohibition on portable media and storage devices, and it is also useful to review how to correctly move or transfer a classified document or other information. Hand-carrying classified information out of a classified working area is limited to situations of absolute necessity when no other secure means of transmission or movement is available. The proper procedures for hand-carrying will be briefed by you organization’s security manager and you will also need to be designated as a “courier” for classified information and have a Department of Defense Courier Card, DD 25-0-1, in your possession. If the material needs to be sent by mail with the U.S. Postal Service, your security manager will ensure this is done correctly. Hand-carrying the material within your facility or organization is permissible without single or double wrapping provided you take the correct and adequate measures to protect against unauthorized disclosure. As a minimum, you should use an opaque folder and the proper classified cover sheet.",
            },

            {
                slide: "Classified Document Cover Sheets",
                text: "Major Paul, who is medical planner, requires frequent access to the SIPRNET cafe to perform his duties planning for a major deployment of a MEDCOM subordinate unit to southern Afghanistan. Major Paul is in a hurry to get to a video teleconference on the deployment and after printing a classified document, he walks out of the restricted access SIPRNET cafe without a cover sheet.",
            },

            {
                slide: "Constant Surveillance and Control",
                text: "Good security practices are well documented in both Army regulations and in MEDCOM Policy Memorandums. AR 380-5 requires that all classified material removed from storage be kept under constant surveillance and control by authorized personnel. Classified document cover sheets, Standard Forms 704 (SECRET Cover Sheet) and 705 (CONFIDENTIAL Cover Sheet), will be placed on classified documents or files not in security storage. In addition, all items containing classified information, such as drafts, notes, worksheets, etc., will be destroyed immediately after they have served their purpose, or protected as required for the level of classified information they contain. Our bottom line is that even though Major Paul had the classified document under his personal control and observation, he was incorrect in walking out of the SIPRNET cafe without the proper cover sheet. Major Paul knew the proper security procedure, and we expect him to show better judgment and be a good example.",
            },

            {
                slide: "Destroying Classified Documents and Papers",
                text: "Properly destroying or disposing of classified material, whether documents and papers or non-paper based products, is also an area that requires your personal attention and knowledge. Sergeant First Class Kearns is the noncommissioned officer in charge of the personnel administrative section in a regional medical command headquarters. She does not normally work with classified documents, but does have a SECRET security clearance and is designated as a MEDCOM SIPRNET user. SFC Kearns printed a classified document in the SIPRNET cafe and returned with it to her office area. After reviewing the document for the material she needed, she proceeded to shred the document in her office shredder that is not authorized for destroying classified material. Do you know if anything is wrong with this example?",
            },

            {
                slide: "Classified Waste",
                text: "Depending on your specific job or function within MEDCOM and its subordinate commands and organizations, you might see and use a large amount of classified information and create a great deal of classified waste, or none at all. However, an area where mistakes frequently result in an administrative type security violation, and can easily result in the loss or compromise of sensitive or classified information, is properly disposing of or destroying classified waste. Army and MEDCOM regulations and policy directives state that classified material will be destroyed completely to preclude recognition or reconstruction of the classified information contained in or on the material. Destruction methods include burning, crosscut shredding, wet pulping, melting, mutilation, chemical decomposition, and pulverizing. The general rule is all documents or material associated with SIPRNET use are classified, and therefore should not be put in the normal trash. All sensitive waste must be shredded using a National Security Agency (NSA) approved cross-cut, high security shredder. These modern shredders “grind or pulverize” the documents so finely that even a determined adversary or competitor could not recreate our classified products. Some areas have specially marked “classified trash bags,” known as burn bags, in areas where classified information is used or produced. In addition, a good practice is to destroy For Official Use Only (FOUO) material as if it was classified.",
            },

            {
                slide: "Security Incident Reporting",
                text: "All MEDCOM SIPRNET users are responsible for the security of the SIPRNET network, computer, and the information you create and access. We want to eliminate or minimize various types of security violations. Our requirement is that you should report known or suspected security violations or potentially harmful security practices to your Security Manager or the S2. Examples of a security violation or harmful security practice include: token sharing or similar unauthorized SIPRNET access, unsecure computer terminals, improper data transfer, or not correctly disposing of and destroying classified or sensitive waste.",
            },

            {
                slide: "Summary",
                text: "We have presented a great deal of information to you, and to illustrate the serious nature of SIPRNET security we used a notional, but plausible, scenario that could result from a breach of security or compromise of our classified information communications security systems. As an authorized SIPRNET user, you are responsible for the security of the SIPRNET network, computer, and the information you create or access. Our annual refresher training is only a reminder that You personally are the most important step in the process of protecting our nation’s secrets. It truly is not complicated, but we should constantly remind ourselves that Everyone is responsible for security!",
            }            
        ];

        // Progress Bar styles
        function progressStyle() {

            if (isIE || isEdge) {
                
               var edgeIE = {
                    ms_track: [
                        '#seekerBar::-ms-track {',
                        // Change styles below //
                        
                        'background: transparent;',
                        'border-color: transparent;',
                        'color: transparent;',

                        // Change styles above //
                        '}'

                    ].join(''),

                    ms_thumb: [
                        '#seekerBar::-ms-thumb {',
                        // Change styles below //

                        'height: 0px;',
                        'width: 0px;',                            

                        // Change styles above //
                        '}'
                    ].join(''),

                    ms_fill_lower: [
                        '#seekerBar::-ms-fill-lower {',

                        // Change styles below //

                        'border: none;',
                        'background: linear-gradient(to bottom, rgba(165,201,86,1) 38%,rgba(205,235,142,1) 76%);',                            

                        // Change styles above // 
                        '}'             

                    ].join(''),

                    ms_fill_upper: [
                        '#seekerBar::-ms-fill-upper {',
                        // Change styles below //

                                                   

                        // Change styles above //
                        '}'                            
                    ].join('')

               } 

                return edgeIE.ms_track + edgeIE.ms_thumb + edgeIE.ms_fill_lower;
            }

            if (isFirefox) {
                
                var fireFox = {
                    moz_input: [
                        '#seekerBar {',

                        // Change styles below //
                        'background-color: transparent;',
                        


                        // Change styles above //
                        '}'
                    ].join(''),

                    moz_range_track: [
                        '#seekerBar::-moz-range-track {',

                        // Change styles below //
                        'background-color: transparent;',
                        'border: none;',


                        // Change styles above //
                        '}'
                    ].join(''),

                    moz_range_thumb: [
                        '#seekerBar::-moz-range-thumb {',

                        // Change styles below //

                        'height: 0px;',
                        'width: 0px;',
                        'border: none;',

                        // Change styles above //
                        '}'
                    ].join(''),

                    moz_range_progress: [
                        '#seekerBar::-moz-range-progress {',

                        // Change styles below //
                        'border: none;',
                        'background: -moz-linear-gradient(-45deg, rgba(165,201,86,1) 22%, rgba(205,235,142,1) 91%);',


                        // Change styles above //
                        '}'
                    ].join(''),
                }
                
                return fireFox.moz_input + fireFox.moz_range_track + fireFox.moz_range_thumb + fireFox.moz_range_progress;
            }

            if (isChrome) {
                
                var chrome = {

                    inputRngI: [
                        'input[type="range" i]  {',

                        // Change styles below //

                        '-webkit-appearance: none;',
                        'color: transparent;',
                        'cursor: default;',
                        'padding: initial;',
                        'border: none;',
                        'margin: 2px;',
                        

                        // Change styles above //

                        '}'

                    ].join(''),
                    

                    inputRng: [
                        'input[type="range"] {',

                        // Change styles below //

                        'overflow: hidden;',
                        '-webkit-appearance: none;',
                        'border: none;',

                        // Change styles above //

                        '}'

                    ].join(''),

                    runTrack: [
                        'input[type="range"]::-webkit-slider-runnable-track {',

                        // Change styles below //

                        'height: 5px;',
                        '-webkit-appearance: none;',
                        'border: none;',

                        // Change styles above //

                        '}'

                    ].join(''),

                    slideThumb: [
                        'input[type="range"]::-webkit-slider-thumb {',

                        // Change styles below //

                        'width: 0px;',
                        '-webkit-appearance: none;',
                        'box-shadow: -800px 0 0 800px #c0e07b;',


                        // Change styles above //

                        '}'

                    ].join(''),

                    inputFcs: [
                        'input[type="range"]:focus {',

                        // Change styles below //

                        'outline: none;',

                        // Change styles above //

                        '}'

                    ].join('')
                }                

                return chrome.inputRngI + chrome.inputRng + chrome.runTrack + chrome.slideThumb + chrome.inputFcs
            }
            
        }         
        
        /////////////////////////// Global Variables ////////////////////////////////              
        
        // Grabs the list of slides from the project and splits them into an array
        var slides = cp.model.data.project_main.slides.split(',');
        
        // Current Slide
        var currentSlide = cp.model.data[slides[window.cpInfoCurrentSlide - 1]];

        // Slide Number
        var slideNum = currentSlide.slideNumber;

        // lastFrame is the last frame for the current slide
        var lastFrame = currentSlide.to;

        // firstFrame is the starting frame 
        var firstFrame = currentSlide.from;
        
        // Checks for audio on slide
        var slideAudio = currentSlide.audioName; 
        
        // Grabs slide label
        var slideLabel = cpInfoCurrentSlideLabel.trim().toLowerCase();
        
        /////////////////////// Tool tips, Elements, ID ///////////////////////////////////////

        var toolTipArray = [
            "Pause",
            "Play",
            "Closed Caption",
            "Mute",
            "Unmute",
            "Replay",
            "Rewind",
            "Previous",
            "Next",
            "Menu",
            "Help",
            "Options",
            "Exit",
            "Resources"
        ];


        toolTipArray.forEach(function(elm) {          
            var setDataAttr;

            if (isIE) {                
                setDataAttr = $("p:contains(" + elm + ")" ).parent().parent();
                
            } else {
                setDataAttr = $('div[aria-label="' + elm + " " + '"]');
            }
            
            setDataAttr.attr("data-button", elm);
            setDataAttr.attr("title", elm);
            setDataAttr.css("cursor", "pointer");    
            
        }); 

        ///////////////////////// Nav bar funtions ////////////////////////////


        slideRest();     


        ////////////////////// Nav bar control /////////////////////////////

        // Pause
        $(getElement("Pause", "obj")).click(function () {
            if (cpInfoCurrentFrame < (lastFrame - 1)) {
                cpCmndPause = 1;                
                hidePause();
            } else {
                cpCmndPause = 1;
                hidePlay();                
            }
        });

        // Play        
        $(getElement("Play", "obj")).click(function () {
        
            if (cpInfoCurrentFrame < (lastFrame - 1)) {              
                cpCmndResume = 1;
                hidePlay();
                stayMute();                
            } else {
                cpCmndPause = 1;
                hidePlay();                 
            }   
        });
        
        // Replay button        
        $(getElement("Replay", "obj")).click(function () {
            cpCmndGotoFrame = firstFrame;

            if (cpCmndPause) {
                setTimeout(function () {
                    cpCmndResume = 1;
                }, 300);
            }

            if(cpCmndTOCVisible === 1) {
                cpCmndTOCVisible = 0;
                hidePlay();
                stayMute();
            } else { 
                hidePlay();
                stayMute(); 
            }
        });

        // Mute              
        $(getElement("Mute", "obj")).click(function () {
            cpCmndMute = 1; 
            hideMute();      
        });

        // Unmute          
        $(getElement("Unmute", "obj")).click(function () {
            cpCmndMute = 0;            
            hideUnmute();      
        });        

        // Previous button
        getElement("Previous", "obj").click(function(){
            cpCmndPrevious = 1;                        
        });

        // Next
        getElement("Next" , "obj").click(function(){ 
            cpCmndNextSlide = 1; 
        });
        

        /////////////////////////// CC Button /////////////////////////////////

        var ccBox = document.createElement('div');
        var ccPara = document.createElement('p');
        ccBox.id = 'ccTextBox';
        ccPara.id = 'ccParagraph';
        
        $('#div_Slide').append(ccBox);
        $('#ccTextBox').append(ccPara);

        $('#ccTextBox').css({
            'position' : 'absolute',
            'top' : ccTop,
            'right' : ccRight,
            'bottom' : ccBottom,
            'left' : ccLeft,            
            'width' : ccWidth,
            'height' : ccHeight,
            'bottom' : ccBottom,
            'z-index' : '2000',
            'background-color' : ccTextColor,
            'color' : ccBackgroundColor,
            'overflow-y' : 'scroll'
        });
        
        $('#ccParagraph').css({'margin' : '5px 16px', 'line-height' : '24px'});        

        var ccTextBox = document.getElementById('ccTextBox');

        ccTextBox.style.visibility = 'hidden';

        for (var i = 0; i < ccTextArray.length; i++) {

            if (ccTextArray[i].slide.trim().toLowerCase() === slideLabel) {
                $('#ccParagraph').text(ccTextArray[i].text);
                break;
            } else {
                $('#ccParagraph').text('No Audio');
            }
        }

        getElement("Closed Caption", "obj").click(function () {
            if (ccTextBox.style.visibility === 'hidden') {
                ccTextBox.style.visibility = 'visible';
                getElement("Closed Caption", "obj").prop("title", "Closed Caption Close");
            } else {
                ccTextBox.style.visibility = 'hidden';                
                getElement("Closed Caption", "obj").prop("title", "Closed Caption Open"); 
            }
        });       

        // Removes progress bar and timer from Learning Check slides and slides with no audio

        isProgress = slideAudio;

        ///////////// Progress bar ////////////////////////////

        ///////////////////// Setup and controls progress bar /////////////////////////////////////////////////////
        
        if (isProgress) {

            // Creates Progress Bar
            var playBar = document.createElement('input');            

            playBar.id = 'seekerBar';
            playBar.type = 'range';
            playBar.value = '0';
            playBar.step = '1';
            playBar.min = firstFrame;
            playBar.max = lastFrame;            
            
            
            // Places Progress Bar on slide           
            
            $("#div_Slide").append(playBar);

            // Positions Progress Bar            
            $('#seekerBar').css({
                'position': proPos, 
                'top': proTop,
                'right': proRight,
                'bottom': proBottom, 
                'left': proLeft,
                'width': proWidth,                
                'z-index': proZindex,
                'height': proHeight                
            });

            // Disables playBar Control
            playBar.disabled = true;

            // Progress Bar style
            var sheet = document.createElement('style');            
            document.head.appendChild(sheet);
            sheet.innerHTML = progressStyle();
            
            cpAPIEventEmitter.addEventListener("CPAPI_VARIABLEVALUECHANGED", seekUpdate, "cpInfoCurrentFrame");

            function seekUpdate() { playBar.valueAsNumber = cpInfoCurrentFrame; }
            
        }

        /////////////////// Utility Functions ////////////////////////

        // Grabs element
        function getElement (attribute, property) {
            return property === "obj" ?  $('div[data-button="' + attribute + '"]') : $('div[data-button="' + attribute + '"]').attr("id");            
        }

        // When mute is on keeps audio muted on slide change
        function stayMute () { 
            if(cpCmndMute === 1){ 
                hideMute();
                cpCmndMute = 1; 
            } else {
                hideUnmute();
                cpCmndMute = 0; 
            } 
        }

        // Hides and shows play and pause
        function hidePlay () {           
            cp.hide(getElement("Play", "id"));
            cp.show(getElement("Pause", "id"));                
        }

        // Hides pause and shows play
        function hidePause () {
            cp.show(getElement("Play", "id"));
            cp.hide(getElement("Pause", "id"));
        }

        // Hide mute shows unmute
        function hideMute () {
            cp.show(getElement("Unmute", "id"));
            cp.hide(getElement("Mute", "id"));
        }

        // Hide unmute shows mute
        function hideUnmute () {
            cp.show(getElement("Mute", "id"));
            cp.hide(getElement("Unmute", "id"));
        }

        // Rests UI controls when entering new slide
        function slideRest() {
            cpCmndTOCVisible = 0;
            hidePlay();
            stayMute();
        } 
 
    });