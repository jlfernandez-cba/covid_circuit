import React from 'react';
import { useRecoilState } from 'recoil';
import selectedLanguage from './i18nState';

const translations = {
    "en": {
        "whatwedo_title":
            <h4 style={{ textAlign: 'justify' }}>SARS-CoV-2 whole genome sequencing circuit in Andalusia</h4>
            ,
        "whatwedo_txt": 
            <p style={{ textAlign: 'justify', fontSize: 18 }}>As response to a recommendation for the integration of genome sequencing in the SARS-CoV-2 surveillance published by the Public Health Commission of the Interterritorial council in <a href="httpss://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov/documentos/Integracion_de_la_secuenciacion_genomica-en_la_vigilancia_del_SARS-CoV-2.pdf">22 January 2021</a>, a joint instruction was carried out, 1/2020 from the General Secretariat for Research, Development and Innovation in Health and the Management Directorate of the Andalusian Health Service, for the Management of samples in the approach to Personalized Medicine in COVID-19.<br/><br/>A previous project funded by the Andalusian Health System (<a href="https://clinbioinfosspa.es/projects/covseq/indexEng.html">Sequencing of the SARS-CoV-2 virus genome for the monitoring and management of the Covid-19 epidemic in Andalusia and the rapid generation of prognostic and response to treatment biomarkers</a>)  that included the 16 main tertiary hospitals in Andalusia, along with three research centers with genome sequencing facilities (IBIS, Genyo and CABIMER) and the Bioinformatics Area of the Progress and Health Foundation, set the ground for a rapid implementation of a regional-scale systematic sequencing of the virus. This project constitutes a remarkable example of translational research.</p>
            ,
        "about_text_title": 
            <h4 style={{ fontSize: 20 }}>SARS-CoV-2 whole genome sequencing circuit</h4>
            ,
        "about_text_1": 
            <p style={{ textAlign: 'justify', fontSize: 18 }}>The operation of the circuit is as follows: SARS-CoV-2 naso-pharingeal samples (used for PCR testing) are collected in the main tertiary hospitals of the eight Andalusian provinces and sent to the two reference hospitals, the San Cecilio Clinical Hospital for Eastern Andalusia, and Virgen del Rocio University Hospital for Western Andalusia (Figure 1A and Table 1), where the viral RNA is extracted and subjected to WGS (Figure 1B). Raw sequencing data is transferred to the <a href="https://www.clinbioinfosspa.es/">Bioinformatics Area</a> (Figure 1C), processed, and indexed along with the meta-data automatically provided by the COVID registry (Figure 1D), previously collected from the hospitals (Figure 1E). The resulting findings (strain, VOIs and VOCs) are reported back to the sampling hospitals, for supporting clinical decision (Figure 1G), and relevant epidemiological information is reported to the COVID registry (Figure 1F).<br /></p>
        ,
        "about_text_Table1": 
            <p style={{ textAlign: 'center', fontSize: 16 }}><b>Table 1.</b> <i>Selection of samples per week for sequencing at different Andalusian provinces in primary care (PC) or hospitalized (H) patients</i></p>
            ,
        "about_text_2": 
            <p className="text-justify" style={{ fontSize: 18 }}>Unlike in many other initiatives that consider exclusively the primary use of genomic data, here especial attention has been paid to the secondary use of genomic data for clinical research. Andalusia has a unique resource, the Population Health Database (<a href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/profesionales/sistemas-de-informacion/base-poblacional-de-salud">BPS, after Base Poblacional de Salud</a>). All the clinical information on all the patients of the Andalusian Health System is stored there (Figure 1H).<br/><br/>The Bioinformatics Area submits all the viral genomes to BPS (Figure 1I), where they are permanently stored, linked to the clinical information of the patients. BPS has a procedure available to request data for secondary use in <a href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/sites/default/files/sincfiles/wsas-media-mediafile_sasdocumento/2019/BPS_Investigaci%C3%B3n.pdf">clinical research</a>. Finally, the Bioinformatic Area is responsible for the submission of the viral genomic sequences to ENA to make them available to the scientific community (Figure 1J).</p> 
        ,
        "about_text_fig1": 
            <p style={{ textAlign: 'center', fontSize: 16 }}><b>Figure 1.</b> <i>Clinical circuit for WGS of SARS-CoV-2 for epidemiologic surveillance and medical decision support</i></p>
            ,
        "clinicalInterest_text_title":
            <h4 style={{ fontSize: 20 }}>Potential Clinical Interest</h4>
            ,
        "clinicalInterest_text_charts": 
            <p style={{ textAlign: "center", fontSize: 16 }}>
            <b>Charts.</b>{" "}
            <i>
              These charts refer to the samples sequenced as part of this study, which are selected according to their potential scientific interest. As such, the proportions do not reflect the relative natural prevalence in the general population.</i>
          </p>
            ,
            "results_text_title": 
            <h4 style={{ fontSize: 20 }}>Results</h4>
            
            ,
            "results_text_1":
            <p className="text-justify" style={{ fontSize: 18 }}>
            This circuit is operating since middle February and currently, the pace of sequencing is of 300-400 per week,
            depending on the final results of quality control processes both in the RNA extraction and in the sequencing
            processes.
          </p>
            ,
            "results_text_2":
            <p className="text-justify" style={{ fontSize: 18 }}>
            The Bioinformatics Area reports back to the San Cecilio and the Virgen del Rocio reference hospitals the
            lineages of the virus sequenced, if these are VOIs or VOCs, as well as any new mutations of concern.
            <br />
            <br />

            An advanced tool developed by the area, which is freely available in the{" "}
            <a href="https://github.com/babelomics/impuSARS">impuSARS github repository</a>, is used to recover low quality
            sequences and we can impute lineage with accuracy for more than the 95% of the samples sequenced. See more
            details in the <a href="https://www.biorxiv.org/content/10.1101/2021.04.13.439668v1">preprint</a>.
 
          <br />
          <br />
            

            <a href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage">A local instance of NextStrain</a>{" "}
            represent all the samples currently sequenced:
            <br />
            </p>
            ,
        }, 
    "es": {
        "whatwedo_title":
            <h4 style = {{textAlign: 'justify'}}> Circuito de secuenciación del genoma completo del SARS-CoV-2 en Andalucía </h4> 
            ,
        "whatwedo_txt": 
            <p style = {{textAlign: 'justify', fontSize: 18}}> Como respuesta a una recomendación para la integración de la secuenciación del genoma en la vigilancia del SARS-CoV-2 publicada por la Comisión de Salud Pública del Consejo Interterritorial en <a href = "httpss: //www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov/documentos/Integracion_de_la_secuenciacion_genomica-en_la_vigilancia_del_SARS-CoV-2.pdf"> 22 de enero de 2021 </a>, se realizó una instrucción conjunta realizado, 1/2020 desde la Secretaría General de Investigación, Desarrollo e Innovación en Salud y la Dirección de Gestión del Servicio Andaluz de Salud, para la Gestión de muestras en el abordaje de Medicina Personalizada en COVID-19. <br/> <br /> Un proyecto previo financiado por el Sistema Andaluz de Salud (<a href="https://clinbioinfosspa.es/projects/covseq/indexEng.html"> Secuenciación del genoma del virus SARS-CoV-2 para el seguimiento y manejo de la epidemia de Covid-19 en Andalucía y la rápida generación de pronósticos y respuestas de biomarcadores de tratamiento </a>) que incluía los 16 principales hospitales terciarios de Andalucía, junto con tres centros de investigación con secuenciación del genoma (IBIS, Genyo y CABIMER) y el Área de Bioinformática de la Fundación Progreso y Salud, sentaron las bases para una rápida implementación de una secuenciación sistemática del virus a escala regional. Este proyecto constituye un ejemplo notable de investigación traslacional. </p>
            ,
        "about_text_title":
            <h4 style={{ fontSize: 20 }}>Circuito de secuenciación del genoma completo del SARS-CoV-2 </h4>
            ,
        "about_text_1": 
            <p style = {{textAlign: 'justify', fontSize: 18}}> El funcionamiento del circuito es el siguiente: Las muestras nasofaríngeas del SARS-CoV-2 (utilizadas para las pruebas de PCR) se recogen en los principales hospitales terciarios de de las ocho provincias andaluzas y remitido a los dos hospitales de referencia, el Hospital Clínico San Cecilio de Andalucía Oriental y el Hospital Universitario Virgen del Rocío de Andalucía Occidental (Figura 1A y Tabla 1), donde se extrae el ARN viral y se somete a WGS (Figura 1A y Tabla 1). 1B). Los datos de secuenciación sin procesar se transfieren al <a href="https://www.clinbioinfosspa.es/"> Área de Bioinformática </a> (Figura 1C), se procesan e indexan junto con los metadatos proporcionados automáticamente por el COVID. registro (Figura 1D), recogido previamente de los hospitales (Figura 1E). Los hallazgos resultantes (cepa, VOI y VOC) se informan a los hospitales de muestreo, para respaldar la decisión clínica (Figura 1G), y la información epidemiológica relevante se reporta al registro COVID (Figura 1F). <br/> </p>
            ,

        "about_text_Table1": 
            <p style = {{textAlign: 'center', fontSize: 16}}> <b> Tabla 1. </b> <i> Selección de muestras semanales para secuenciación en diferentes provincias andaluzas en atención primaria (AP) u hospitalizadas (H) pacientes </i> </p> 
            ,
        "about_text_2": 
            <p className = "text-justify" style = {{fontSize: 18}}> A diferencia de muchas otras iniciativas que consideran exclusivamente el uso primario de datos genómicos, aquí se ha prestado especial atención al uso secundario de datos genómicos para la investigación clínica . Andalucía cuenta con un recurso único, la Base de Datos de Salud de la Población (<a href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/profesionales/sistemas-de-informacion/base-poblacional-de-salud"> BPS, después Base Poblacional de Salud </a>). Allí se almacena toda la información clínica de todos los pacientes del Sistema de Salud de Andalucía (Figura 1H). <br/> <br/> El Área de Bioinformática envía todos los genomas virales al BPS (Figura 1I), donde se almacenan de forma permanente, vinculado a la información clínica de los pacientes. BPS dispone de un procedimiento para solicitar datos para uso secundario en <a href = "https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/sites/default/files/sincfiles/wsas-media-mediafile_sasdocumento/2019/BPS_Investigaci%C3%B3n.pdf "> investigación clínica </a>. Finalmente, el Área Bioinformática se encarga del envío de las secuencias genómicas virales a ENA para ponerlas a disposición de la comunidad científica (Figura 1J). </p> 
            ,
        "about_text_fig1": 
            <p style = {{textAlign: 'center', fontSize: 16}}> <b> Figura 1. </b> <i> Circuito clínico para WGS de SARS-CoV-2 para vigilancia epidemiológica y apoyo a decisiones médicas </ i> </p> 
            ,
        "clinicalInterest_text_title":
            <h4 style = {{fontSize: 20}}> Interés clínico potencial </h4> 
            ,
        "clinicalInterest_text_charts": 
            <p style = {{textAlign: "center", fontSize: 16}}>
               <b> Gráficos. </b> {""}
               <i>
                 Estos gráficos se refieren a las muestras secuenciadas como parte de este estudio, que se seleccionan de acuerdo con su potencial interés científico. Como tal, las proporciones no reflejan la prevalencia natural relativa en la población general. </i>
             </p> 
            ,
            "results_text_title": 
            <h4 style={{ fontSize: 20 }}>Resultados</h4>
            ,
            "results_text_1":
            <p className = "text-justify" style = {{fontSize: 18}}>
            Este circuito está en funcionamiento desde mediados de febrero y actualmente, el ritmo de secuenciación es de 300-400 por semana,
            dependiendo de los resultados finales de los procesos de control de calidad tanto en la extracción de ARN como en la secuenciación
            Procesos.
          </p> 
            ,
            "results_text_2":
            <p className = "text-justify" style = {{fontSize: 18}}>
            El Área de Bioinformática informa a los hospitales de referencia San Cecilio y Virgen del Rocío.
            linajes del virus secuenciado, si se trata de VOI o VOC, así como cualquier nueva mutación de interés.
            <br />
            <br />

            Una herramienta avanzada desarrollada por el área, que está disponible gratuitamente en el {""}
            <a href="https://github.com/babelomics/impuSARS"> repositorio de github impuSARS </a>, se utiliza para recuperar baja calidad
            secuencias y podemos imputar el linaje con precisión para más del 95% de las muestras secuenciadas. Ver más
            detalles en la <a href="https://www.biorxiv.org/content/10.1101/2021.04.13.439668v1"> preimpresión </a>.
 
          <br />
            
          <br />

            <a href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage"> Una instancia local de NextStrain </a> {""}
            representan todas las muestras secuenciadas actualmente:
            <br />
            </p> 
            ,
        }
};

interface IProps {
    textKey: string;
}

function TranslatedText(props: IProps) {
    const { textKey } = props;
    const [language, setLanguage] = useRecoilState(selectedLanguage);
    const languageTranslations = translations[language];
    return languageTranslations[textKey];
}

export default TranslatedText;
