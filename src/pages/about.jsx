import React from "react";
import Section from "../components/section.jsx";
import { aboutProject } from "../data/content.js";

const references = [
    {
        text: "American Enterprise Institute (n.d.) Gen Zers are anything but politically ill-informed. AEI.",
        url: "https://www.aei.org/politics-and-public-opinion/gen-zers-are-anything-but-politically-ill-informed/",
        accessed: "15 December 2025",
    },
    {
        text: "ASEAN (n.d.) ASEAN Charter (PDF). ASEAN.",
        url: "https://asean.org/wp-content/uploads/images/archive/publications/ASEAN-Charter.pdf",
        accessed: "15 December 2025",
    },
    {
        text: "ASEAN (n.d.) 13th East Asia Summit Foreign Ministers’ Meeting convenes in Jakarta. ASEAN.",
        url: "https://asean.org/13th-east-asia-summit-foreign-ministers-meeting-convenes-in-jakarta/",
        accessed: "16 December 2025",
    },
    {
        text: "Encyclopaedia Britannica (n.d.) Africa. Encyclopaedia Britannica.",
        url: "https://www.britannica.com/place/Africa",
        accessed: "16 December 2025",
    },
    {
        text: "Encyclopaedia Britannica (n.d.) Scramble for Africa. Encyclopaedia Britannica.",
        url: "https://www.britannica.com/event/Scramble-for-Africa",
        accessed: "17 December 2025",
    },
    {
        text: "Encyclopaedia Britannica (n.d.) What was the Treaty of Versailles? Encyclopaedia Britannica.",
        url: "https://www.britannica.com/question/What-was-the-Treaty-of-Versailles",
        accessed: "17 December 2025",
    },
    {
        text: "Encyclopaedia Britannica (n.d.) Treaty of Versailles (1919). Encyclopaedia Britannica.",
        url: "https://www.britannica.com/event/Treaty-of-Versailles-1919",
        accessed: "18 December 2025",
    },
    {
        text: "Encyclopaedia Britannica (n.d.) Germany: The Treaty of Versailles. Encyclopaedia Britannica.",
        url: "https://www.britannica.com/place/Germany/The-Treaty-of-Versailles",
        accessed: "18 December 2025",
    },
    {
        text: "Encyclopaedia Britannica (n.d.) ASEAN. Encyclopaedia Britannica.",
        url: "https://www.britannica.com/topic/ASEAN",
        accessed: "19 December 2025",
    },
    {
        text: "Britannica Kids (n.d.) Scramble for Africa. Britannica Kids.",
        url: "https://kids.britannica.com/kids/article/Scramble-for-Africa/632997",
        accessed: "19 December 2025",
    },
    {
        text: "Ezronix (n.d.) The scramble and partition of Africa explained. Ezronix African Historical Archives.",
        url: "https://www.ezronix.com/the-ezronix-african-historical-archives/the-scramble-and-partition-of-africa-explained",
        accessed: "20 December 2025",
    },
    {
        text: "History.com Editors (n.d.) Treaty of Versailles. History.",
        url: "https://www.history.com/articles/treaty-of-versailles",
        accessed: "20 December 2025",
    },
    {
        text: "Heryanto, A. (n.d.) Bersiap: a shared history of mass violence that haunts Indonesia and the Netherlands. Monash Lens.",
        url: "https://lens.monash.edu/bersiap-a-shared-history-of-mass-violence-that-haunts-indonesia-and-the-netherlands-ariel-heryanto-professor-emeritus-monash-university/",
        accessed: "21 December 2025",
    },
    {
        text: "MAGABlog Africa (n.d.) The Berlin Conference of 1884: how Europe divided Africa in 104 days. MAGABlog Africa.",
        url: "https://www.magablog.africa/articles/the-berlin-conference-of-1884-how-europe-divided-africa-in-104-days",
        accessed: "21 December 2025",
    },
    {
        text: "Oxford Learner’s Dictionaries (n.d.) History (definition). Oxford University Press.",
        url: "https://www.oxfordlearnersdictionaries.com/definition/english/history",
        accessed: "22 December 2025",
    },
    {
        text: "The Indo Project (n.d.) The Bersiap period. The Indo Project.",
        url: "https://theindoproject.org/the-bersiap-period/",
        accessed: "22 December 2025",
    },
    {
        text: "UNESCO (n.d.) Birth of the Association of Southeast Asia Nations (ASEAN): archives about formation of ASEAN (1967–1976). UNESCO Memory of the World.",
        url: "https://www.unesco.org/en/memory-world/birth-association-southeast-asia-nations-asean-archives-about-formation-asean-1967-1976",
        accessed: "22 December 2025",
    },
    {
        text: "World History Edu (n.d.) Scramble for Africa: history, Berlin Conference outcome, facts. World History Edu.",
        url: "https://worldhistoryedu.com/scramble-for-africa-history-berlin-conference-outcome-facts/",
        accessed: "22 December 2025",
    },
    {
        text: "American Historical Association (1998) Why study history? American Historical Association.",
        url: "https://www.historians.org/resource/why-study-history-1998/",
        accessed: "16 December 2025",
    },
    {
        text: "American Historical Association (n.d.) The well-rounded history graduate: professional, citizen, human. American Historical Association.",
        url: "https://www.historians.org/resource/the-well-rounded-history-graduate-professional-citizen-human/",
        accessed: "17 December 2025",
    },
    {
        text: "American Historical Association (2017) Why study history? Survey of history BAs provides some real answers. Perspectives on History.",
        url: "https://www.historians.org/perspectives-article/why-study-history-survey-of-history-bas-provides-some-real-answers-january-2017/",
        accessed: "18 December 2025",
    },
    {
        text: "American Historical Association (2021) Why study—you know what: our reasons for doing what we do. Perspectives on History.",
        url: "https://www.historians.org/perspectives-article/why-study-you-know-what-our-reasons-for-doing-what-we-do-february-2021/",
        accessed: "19 December 2025",
    },
];

export default function About() {
    return (
        <div>
            <Section title="How The Project was Built">
                {aboutProject.conceptToPlatform.map((p, idx) => (
                    <p key={idx}>{p}</p>
                ))}
            </Section>

            <Section title="Literacy and Interpretation">
                {aboutProject.literacyAndInterpretation.map((p, idx) => (
                    <p key={idx}>{p}</p>
                ))}
            </Section>

            <Section title="Learning Goal">
                <p>{aboutProject.learningGoal}</p>
            </Section>

            <Section title="Ethical Statement">
                {aboutProject.ethicalStatement.map((p, idx) => (
                    <p key={idx}>{p}</p>
                ))}
            </Section>

            <Section title="References">
                <ol className="list-decimal pl-6 space-y-2">
                    {references.map((ref, idx) => (
                        <li key={`${ref.url}-${idx}`} className="text-sm text-slate-700">
                            <span>{ref.text} </span>
                            <span>
                                Available at:{" "}
                                <a
                                    href={ref.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline break-all"
                                >
                                    {ref.url}
                                </a>{" "}
                                (Accessed: {ref.accessed}).
                            </span>
                        </li>
                    ))}
                </ol>
            </Section>
        </div>
    );
}
