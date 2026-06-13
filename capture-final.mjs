import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../figuras/');

async function takeScreenshots() {
  console.log('Iniciando captura de telas com Playwright...');
  
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  const baseUrl = 'http://localhost:5173';

  try {
    console.log('Autenticando...');
    await page.goto(`${baseUrl}/login`, { waitUntil: 'networkidle' });
    await page.fill('input[name="email"]', 'teste@idr.pr.gov.br');
    await page.fill('input[name="password"]', 'senha123');
    await page.click('button[type="submit"]');
    
    await page.waitForSelector('text=Propriedades');
    await page.waitForTimeout(1000);

    console.log('Acessando propriedade Souza S.A...');
    await page.goto(`${baseUrl}/properties/1?producer=Lorraine+Franco&property=Souza+S.A.&tab=nutritional-balancings-data`, { waitUntil: 'networkidle' });
    
    await page.waitForSelector('text=Adicionar Balanceamento Nutricional');
    await page.click('text=Adicionar Balanceamento Nutricional');
    await page.waitForTimeout(1500);

    // 1. CAPTURA DO HEADER DE NAVEGAÇÃO DE ANIMAIS
    console.log('Capturando Visão Geral Header...');
    // We capture the top area (viewport) and crop it to just the header/nav part
    await page.screenshot({ path: path.join(OUT_DIR, 'sys-balanceamento-visao-geral-header.png'), clip: { x: 0, y: 0, width: 1440, height: 260 } });
    
    // 2. CAPTURA DO RESUMO NUTRICIONAL
    console.log('Capturando Resumo Nutricional...');
    const resumoNutricional = page.locator('h3:has-text("Resumo Nutricional")');
    if (await resumoNutricional.count() > 0) {
        await resumoNutricional.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        // Let's capture the whole viewport after scrolling down to make sure it includes the info block
        await page.screenshot({ path: path.join(OUT_DIR, 'sys-balanceamento-visao-geral.png') });
    }

    console.log('Indo para aba Nutrição...');
    await page.click('[role="tab"]:has-text("Nutrição")');
    await page.waitForTimeout(1000);
    
    console.log('Adicionando ingredientes...');
    await page.click('text=Adicionar Ingrediente');
    await page.waitForTimeout(500);
    await page.click('button:has-text("Selecione um ingrediente")');
    await page.waitForTimeout(500);
    await page.click('[role="option"]');
    
    const inputs = await page.$$('input');
    await inputs[inputs.length - 1].fill('40'); 
    await page.click('text=Salvar');
    await page.waitForTimeout(1000); 
    
    // 3. CAPTURA DOS INDICADORES STATUS E EXIGÊNCIAS (Sem Header)
    console.log('Capturando Nutrição com Badges...');
    const exigencias = page.locator('h3:has-text("Exigências Nutricionais")');
    if (await exigencias.count() > 0) {
        await exigencias.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        // Capture viewport to show the badges clearly
        await page.screenshot({ path: path.join(OUT_DIR, 'sys-balanceamento-nutricao.png') });
    }

    // 4. CAPTURA DOS INGREDIENTES INSERIDOS
    console.log('Capturando Tabela de Ingredientes...');
    const dietaTable = page.locator('h3:has-text("Composição da Dieta")');
    if (await dietaTable.count() > 0) {
        await dietaTable.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        await page.screenshot({ path: path.join(OUT_DIR, 'sys-balanceamento-ingredientes-lista.png') });
    }
    
    console.log('Capturas finalizadas com sucesso!');
  } catch (error) {
    console.error('Erro ao capturar telas:', error);
  } finally {
    await browser.close();
  }
}

takeScreenshots();