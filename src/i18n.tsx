import React from 'react';
import { useRecoilState } from 'recoil';
import selectedLanguage from './i18nState';

const translations = {
  "en": {
    "menuLink-about": "About",
    "menuLink-results": "Results",
    "menuLink-clinical": "Clinical Interest",
    "menuLink-news": "News",
    "menuLink-contact": "Contact",
    "whatwedo_title":
      <h4>SARS-CoV-2 whole genome sequencing circuit in Andalusia</h4>
    ,
    "whatwedo_txt":
      <p style={{ textAlign: 'justify', fontSize: 18 }}>As response to a recommendation for the integration of genome sequencing in the SARS-CoV-2 surveillance published by the Public Health Commission of the Interterritorial council in <a href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov/documentos/Integracion_de_la_secuenciacion_genomica-en_la_vigilancia_del_SARS-CoV-2.pdf">22 January 2021</a>, a joint instruction was carried out, 1/2020 from the General Secretariat for Research, Development and Innovation in Health and the Management Directorate of the Andalusian Health Service, for the Management of samples in the approach to Personalized Medicine in COVID-19.<br /><br />A previous project funded by the Andalusian Health System (<a target="_blank" rel="noreferrer" href="https://clinbioinfosspa.es/projects/covseq/indexEng.html">Sequencing of the SARS-CoV-2 virus genome for the monitoring and management of the Covid-19 epidemic in Andalusia and the rapid generation of prognostic and response to treatment biomarkers</a>)  that included the 16 main tertiary hospitals in Andalusia, along with three research centers with genome sequencing facilities (IBIS, Genyo and CABIMER) and the Bioinformatics Area of the Progress and Health Foundation, set the ground for a rapid implementation of a regional-scale systematic sequencing of the virus. This project constitutes a remarkable example of translational research.</p>
    ,
    "about_text_title":
      <h4>SARS-CoV-2 whole genome sequencing circuit</h4>
    ,
    "about_text_1":
      <p style={{ textAlign: 'justify', fontSize: 18 }}>The operation of the circuit is as follows: SARS-CoV-2 naso-pharingeal samples (used for PCR testing) are collected in the main tertiary hospitals of the eight Andalusian provinces and sent to the two reference hospitals, the San Cecilio Clinical Hospital for Eastern Andalusia, and Virgen del Rocio University Hospital for Western Andalusia (Figure 1A and Table 1), where the viral RNA is extracted and subjected to WGS (Figure 1B). Raw sequencing data is transferred to the <a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/">Bioinformatics Area</a> (Figure 1C), processed, and indexed along with the meta-data automatically provided by the COVID registry (Figure 1D), previously collected from the hospitals (Figure 2). The resulting findings (strain, VOIs and VOCs) are reported back to the sampling hospitals, for supporting clinical decision (Figure 1G), and relevant epidemiological information is reported to the COVID registry (Figure 1F).<br /></p>
    ,
    "about_text_Table1":
      <p style={{ textAlign: 'center', fontSize: 16 }}><b>Table 1.</b> <i>Selection of samples per week for sequencing at different Andalusian provinces in primary care (PC) or hospitalized (H) patients</i></p>
    ,
    "about_text_2":
      <p className="text-justify" >Unlike in many other initiatives that consider exclusively the primary use of genomic data, here especial attention has been paid to the secondary use of genomic data for clinical research. Andalusia has a unique resource, the Population Health Database (<a target="_blank" rel="noreferrer" href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/profesionales/sistemas-de-informacion/base-poblacional-de-salud">BPS, after Base Poblacional de Salud</a>). All the clinical information on all the patients of the Andalusian Health System is stored there (Figure 1H).<br /><br />The Bioinformatics Area submits all the viral genomes to BPS (Figure 1I), where they are permanently stored, linked to the clinical information of the patients. BPS has a procedure available to request data for secondary use in <a target="_blank" rel="noreferrer" href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/sites/default/files/sincfiles/wsas-media-mediafile_sasdocumento/2019/BPS_Investigaci%C3%B3n.pdf">clinical research</a>. Finally, the Bioinformatic Area is responsible for the submission of the viral genomic sequences to ENA to make them available to the scientific community (Figure 1J).</p>
    ,
    "about_text_fig1":
      <p style={{ textAlign: 'center', fontSize: 16 }}><b>Figure 1.</b> <i>Clinical circuit for WGS of SARS-CoV-2 for epidemiologic surveillance and medical decision support</i></p>
    ,
    "about_text_fig2":
      <p style={{ textAlign: 'center', fontSize: 16 }}><b>Figure 2. </b> <i>Bioinformatic workflow for SARS-CoV-2 data</ i> </p>
    ,
    "clinicalInterest_text_title":
      <h4>Distribution of SARS-CoV-2 Lineages</h4>
    ,
    "clinicalInterest_text_charts":
      <p style={{ textAlign: "center", fontSize: 16 }}>
        <b>Charts.</b>{" "}<i>These charts refer to the samples sequenced as part of this study, which are selected according to their potential scientific interest. As such, the proportions do not reflect the relative natural prevalence in the general population.</i></p>
    ,
    "results_text_title":
      <h4>Results</h4>
    ,
    "results_text_conferences":
      <h4 style={{ fontSize: 20 }}>The Andalusian COVID-circuit in International Conferences</h4>
    ,
    "results_text_Downloads_poster":
      <p className="text-justify" >Here you can view or download our posters: </p>
    ,
    "results_text_Downloads_1_poster":
      <p className="text-justify" ><a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/TheAndalusiancircuitforSARS-CoV-2%20WGS.pdf"><b>"The Andalusian circuit for SARS-CoV-2 whole genome sequencing"</b> </a></p>
    ,
    "results_text_Downloads_2_poster":
      <p className="text-justify" ><a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/Impact_of_SARS-CoV-2.pdf"><b>"Impact of SARS-CoV-2 lineages on the survival of hospitalized patients"</b> </a></p>
    ,
    "results_text_Downloads_2_top100":
      <p className="text-justify" >Our paper on <a href="https://www.nature.com/articles/s41598-021-02701-5.pdf"><b>Real World Evidence of vitamin D use and mortality rate of COVID-19</b></a> is among the top 100 most dowloaded articles of <a href="https://www.nature.com/collections/fhhdbhejca/?sap-outbound-id=0FAA2601713AAD4A5CA1D416B9988FC308869765&utm_source=hybris-campaign&utm_medium=email&utm_campaign=000_WANJ01_0000020639_HSCR_41598_CON1_GL_PHSS_TOP21_T100_Phys&utm_content=EN_internal_38720_20220321&mkt-key=42010A0550671EDA9BA9E11DF2291A52">Scientific Reports.</a></p>
    ,

    "results_text_1":
      <p className="text-justify" >This circuit is operating since middle February and currently, the pace of sequencing is of 300-400 per week, depending on the final results of quality control processes both in the RNA extraction and in the sequencing processes.</p>
    ,
    "results_text_2":
      <p className="text-justify" >The Bioinformatics Area reports back to the San Cecilio and the Virgen del Rocio reference hospitals the lineages of the virus sequenced, if these are VOIs or VOCs, as well as any new mutations of concern.<br /><br />An advanced tool developed by the area, which is freely available in the{" "}<a target="_blank" rel="noreferrer" href="https://github.com/babelomics/impuSARS">impuSARS github repository</a>, is used to recover low quality sequences and we can impute lineage with accuracy for more than the 95% of the samples sequenced. See more details in the <a target="_blank" rel="noreferrer" href="https://pubmed.ncbi.nlm.nih.gov/34865008/">publication</a>.<br /><br /></p>
    ,

    "results_text_3":
      <p className="text-justify text-center" >
        <a target="_blank" rel="noreferrer" href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage">A local instance of NextStrain</a>{" "}represent all the samples currently sequenced:<br /></p>
    ,
    "results_text_relatedWorks":
      <h4 style={{ fontSize: 20 }}>Another related works</h4>
    ,
    "news_title":
      <h4>News</h4>
    ,
    "news-heading":
      <h4 className="news-heading">
        Andalusia leads the genomic sequencing of the coronavirus at the national level
      </h4>
    ,
    "news-text":
      <p>Informative video about the work carried out in the Andalusian Public Health System to sequence the coronavirus genome and better understand the disease. Made by 7TV in collaboration with the Ministry of Health and Families, the Progreso y Salud Foundation and Novartis.<br />
        <br />
        <br />
      </p>
    ,
    "contact_title":
      <h4>Contact</h4>
    ,
  },
  "es": {
    "menuLink-about": "Acerca de",
    "menuLink-results": "Resultados",
    "menuLink-clinical": "Interés Clínico",
    "menuLink-news": "Noticias",
    "menuLink-contact": "Contacto",
    "whatwedo_title":
      <h4>Circuito de secuenciación del genoma completo del SARS-CoV-2 en Andalucía </h4>
    ,
    "whatwedo_txt":
      <p style={{ textAlign: 'justify', fontSize: 18 }}>Como respuesta a una recomendación para la integración de la secuenciación del genoma en la vigilancia del SARS-CoV-2 publicada por la Comisión de Salud Pública del Consejo Interterritorial en <a target="_blank" rel="noreferrer" href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov/documentos/Integracion_de_la_secuenciacion_genomica-en_la_vigilancia_del_SARS-CoV-2.pdf"> 22 de enero de 2021 </a>, se realizó una instrucción conjunta, 1/2020 desde la Secretaría General de Investigación, Desarrollo e Innovación en Salud y la Dirección de Gestión del Servicio Andaluz de Salud, para la Gestión de muestras en el abordaje de Medicina Personalizada en COVID-19. <br /> <br /> Un proyecto previo financiado por el Sistema Andaluz de Salud (<a target="_blank" rel="noreferrer" href="https://clinbioinfosspa.es/projects/covseq/indexEng.html"> Secuenciación del genoma del virus SARS-CoV-2 para el seguimiento y manejo de la epidemia de Covid-19 en Andalucía y la rápida generación de pronósticos y respuestas de biomarcadores de tratamiento </a>) que incluía los 16 principales hospitales terciarios de Andalucía, junto con tres centros de investigación con secuenciación del genoma (IBIS, Genyo y CABIMER) y el Área de Bioinformática de la Fundación Progreso y Salud, sentaron las bases para una rápida implementación de una secuenciación sistemática del virus a escala regional. Este proyecto constituye un ejemplo notable de investigación traslacional. </p>
    ,
    "about_text_title":
      <h4>Circuito de secuenciación del genoma completo del SARS-CoV-2</h4>
    ,
    "about_text_1":
      <p style={{ textAlign: 'justify', fontSize: 18 }}>El funcionamiento del circuito es el siguiente: Las muestras nasofaríngeas del SARS-CoV-2 (utilizadas para las pruebas de PCR) se recogen en los principales hospitales terciarios de de las ocho provincias andaluzas y remitido a los dos hospitales de referencia, el Hospital Clínico San Cecilio de Andalucía Oriental y el Hospital Universitario Virgen del Rocío de Andalucía Occidental (Figura 1A y Tabla 1), donde se extrae el ARN viral y se somete a WGS (Figura 1A y Tabla 1). 1B). Los datos de secuenciación sin procesar se transfieren al <a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/"> Área de Bioinformática </a> (Figura 1C), se procesan e indexan junto con los metadatos proporcionados automáticamente por el registro del COVID (Figura 1D), recogido previamente de los hospitales (Figura 2). Los hallazgos resultantes (cepa, VOI y VOC) se informan a los hospitales de muestreo, para respaldar la decisión clínica (Figura 1G), y la información epidemiológica relevante se reporta al registro COVID (Figura 1F). <br /> </p>
    ,
    "about_text_Table1":
      <p style={{ textAlign: 'center', fontSize: 16 }}><b>Tabla 1. </b> <i> Selección de muestras semanales para secuenciación en diferentes provincias andaluzas en atención primaria (AP) u hospitalizadas (H) pacientes </i> </p>
    ,
    "about_text_2":
      <p className="text-justify" >A diferencia de muchas otras iniciativas que consideran exclusivamente el uso primario de datos genómicos, aquí se ha prestado especial atención al uso secundario de datos genómicos para la investigación clínica. Andalucía cuenta con un recurso único, la <a target="_blank" rel="noreferrer" href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/profesionales/sistemas-de-informacion/base-poblacional-de-salud"> Base Poblacional de Salud (BPS)</a>. Allí se almacena toda la información clínica de todos los pacientes del Sistema de Salud de Andalucía (Figura 1H). <br /> <br /> El Área de Bioinformática envía todos los genomas virales al BPS (Figura 1I), donde se almacenan de forma permanente, vinculado a la información clínica de los pacientes. BPS dispone de un procedimiento para solicitar datos para uso secundario en <a target="_blank" rel="noreferrer" href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/sites/default/files/sincfiles/wsas-media-mediafile_sasdocumento/2019/BPS_Investigaci%C3%B3n.pdf "> investigación clínica </a>. Finalmente, el Área Bioinformática se encarga del envío de las secuencias genómicas virales a ENA para ponerlas a disposición de la comunidad científica (Figura 1J). </p>
    ,
    "about_text_fig1":
      <p style={{ textAlign: 'center', fontSize: 16 }}><b>Figura 1. </b> <i> Circuito clínico para WGS de SARS-CoV-2 para vigilancia epidemiológica y apoyo a decisiones médicas </ i> </p>
    ,
    "about_text_fig2":
      <p style={{ textAlign: 'center', fontSize: 16 }}><b>Figura 2. </b> <i>Flujo de trabajo bioinformático para datos de SARS-CoV-2</ i> </p>
    ,

    "clinicalInterest_text_title":
      <h4>Distribución de linajes de SARS-CoV-2</h4>
    ,
    "clinicalInterest_text_charts":
      <p style={{ textAlign: "center", fontSize: 16 }}><b>Gráficos. </b> {""}<i>Estos gráficos se refieren a las muestras secuenciadas como parte de este estudio, que se seleccionan de acuerdo con su potencial interés científico. Como tal, las proporciones no reflejan la prevalencia natural relativa en la población general.</i></p>
    ,
    "results_text_title":
      <h4>Resultados</h4>
    ,
    "results_text_Downloads_poster":
      <p className="text-justify" >Aquí puedes consultar o descargar nuestros póster:</p>
    ,
    "results_text_Downloads_1_poster":
      <p className="text-justify" ><a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/TheAndalusiancircuitforSARS-CoV-2%20WGS.pdf"><b>"The Andalusian circuit for SARS-CoV-2 whole genome sequencing"</b> </a></p>
    ,
    "results_text_Downloads_2_poster":
      <p className="text-justify" ><a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/Impact_of_SARS-CoV-2.pdf"><b>"Impact of SARS-CoV-2 lineages on the survival of hospitalized patients"</b> </a></p>
    ,
    "results_text_Downloads_2_top100":
      <p className="text-justify" >Nuestro artículo <a href="https://www.nature.com/articles/s41598-021-02701-5.pdf"><b>Real World Evidence of vitamin D use and mortality rate of COVID-19</b></a> está entre los 100 artículos más descargados de <a target="_blank" rel="noreferrer" href="https://www.nature.com/collections/fhhdbhejca/?sap-outbound-id=0FAA2601713AAD4A5CA1D416B9988FC308869765&utm_source=hybris-campaign&utm_medium=email&utm_campaign=000_WANJ01_0000020639_HSCR_41598_CON1_GL_PHSS_TOP21_T100_Phys&utm_content=EN_internal_38720_20220321&mkt-key=42010A0550671EDA9BA9E11DF2291A52">Scientific Reports.</a></p>
    ,
    "results_text_conferences":
      <h4 style={{ fontSize: 20 }}>El circuito COVID de Andalucía en Congresos Internacionales</h4>
    ,
    "results_text_1":
      <p className="text-justify" >Este circuito está en funcionamiento desde mediados de febrero y actualmente, el ritmo de secuenciación es de 300-400 por semana, dependiendo de los resultados finales de los procesos de control de calidad tanto en la extracción de ARN como en la secuenciación Procesos.</p>
    ,
    "results_text_2":
      <p className="text-justify" >El Área de Bioinformática informa a los hospitales de referencia San Cecilio y Virgen del Rocío. linajes del virus secuenciado, si se trata de VOI o VOC, así como cualquier nueva mutación de interés. <br /><br />Una herramienta avanzada desarrollada por el área, que está disponible gratuitamente en el {""}<a href="https://github.com/babelomics/impuSARS"> repositorio de github impuSARS </a>, se utiliza para recuperar baja calidad secuencias y podemos imputar el linaje con precisión para más del 95% de las muestras secuenciadas. Ver más detalles en la <a href="https://pubmed.ncbi.nlm.nih.gov/34865008/"> publicación </a>.<br /><br />
      </p>
    ,
    "results_text_3":
      <p className="text-justify text-center" >
        <a target="_blank" rel="noreferrer" href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage"> Una instancia local de NextStrain </a> {""}representa las muestras secuenciadas actualmente:<br /></p>
    ,
    "results_text_relatedWorks":
      <h4 style={{ fontSize: 20 }}>Otros trabajos relacionados</h4>
    ,
    "news_title":
      <h4>Artículos de prensa</h4>
    ,
    "news-heading":
      <h4 className="news-heading">
        Andalucía lidera la secuenciación genómica del coronavirus a nivel nacional
      </h4>
    ,
    "news-text":
      <p>Video divulgativo sobre el trabajo que se realiza en el Sistema Sanitario Público de Andalucía para secuenciar el genoma del coronavirus y conocer mejor la enfermedad.
        Realizado por 7TV en colaboración con la Consejería de Salud y Familias, la Fundación Progreso y Salud y Novartis.<br /><br /><br /></p>
    , "contact_title":
      <h4>Contacto </h4>
    ,
  }
};

interface IProps {
  textKey: string;
}

function TranslatedText(props: IProps) {
  const { textKey } = props;
  const [language] = useRecoilState(selectedLanguage);
  // const [language, setLanguage] = useRecoilState(selectedLanguage);
  const languageTranslations = translations[language];
  return languageTranslations[textKey];
}

export default TranslatedText;
