export function ripdPDF(formData){
    const documentRIPD = {
        content: [
        { text: 'Relatório de Impacto à Proteção de Dados (RIPD)', style: 'header' },
        { text: 'Dados Pessoais do Responsável', style: 'subheader' },
        { text: `Nome: ${formData.name}` },
        { text: `E-mail: ${formData.email}` },
        { text: `Telefone: ${formData.phone}` },
        { text: 'Categorias de Dados', style: 'subheader' },
        { text: formData.dataCategories },
        { text: 'Finalidade do Tratamento', style: 'subheader' },
        { text: formData.dataProcessingPurpose },
        { text: 'Atividades de Tratamento', style: 'subheader' },
        { text: formData.dataProcessingActivities },
        { text: 'Armazenamento dos Dados', style: 'subheader' },
        { text: formData.dataStorage },
        { text: 'Proteção dos Dados', style: 'subheader' },
        { text: formData.dataProtection },
        { text: 'Transferência de Dados', style: 'subheader' },
        { text: formData.dataTransfer },
        { text: 'Compartilhamento de Dados', style: 'subheader' },
        { text: formData.dataSharing },
        { text: 'Riscos aos Dados', style: 'subheader' },
        { text: formData.dataRisks },
        { text: 'Medidas de Proteção', style: 'subheader' },
        { text: formData.dataProtectionMeasures },
        ],
        styles: {
        header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10],
        },
        subheader: {
            fontSize: 14,
            bold: true,
            margin: [0, 10, 0, 5],
        },
        },
    };
    return documentRIPD;
}