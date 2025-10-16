---
seo:
  title: AI Developer Assistant - Automate Your Development Workflow
  description: A modular, open-source AI Developer Assistant designed to automate, accelerate, and improve the software development lifecycle. Review, understand, document, refactor, test, and secure code using AI models.
---

::u-page-hero
#title
AI Developer Assistant

#description
A modular, open-source AI Developer Assistant designed to automate, accelerate, and improve the software development lifecycle. :br Review, understand, document, refactor, test, and secure code using AI models while maintaining privacy and extensibility.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: en/getting-started/installation
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  color: neutral
  icon: simple-icons-github
  size: xl
  to: https://github.com/kg6-oss/kg6-codex
  variant: outline
  ---
  Star on GitHub
  :::

#headline
  :::u-button
  ---
  size: sm
  to: https://github.com/kg6-oss/kg6-codex/releases
  variant: outline
  ---
  Latest Release →
  :::
::

::u-page-section
  :::u-page-grid
    ::::u-page-card
    ---
    spotlight: true
    class: group col-span-2 lg:col-span-1
    ---
      :::::div{.flex.flex-col.gap-2.text-center}
        ::::::i-lucide-code-2{.w-12.h-12.mx-auto.text-primary}
        ::::::
        ::::::i-lucide-shield-check{.w-12.h-12.mx-auto.text-primary}
        ::::::
        ::::::i-lucide-file-text{.w-12.h-12.mx-auto.text-primary}
        ::::::
      :::::
    
    #title
    [Core Capabilities]{.text-primary}
    
    #description
    Code review, security scanning, documentation generation, and testing automation. All powered by AI with support for multiple programming languages and frameworks.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    ---
      :::::div{.bg-elevated.rounded-lg.p-4.overflow-x-auto}
      ```bash
      # Review your latest changes
      ai-dev review
      
      # Generate tests with auto-detection
      ai-dev test-suggest --file-patterns "lib/**/*.dart"
      
      # Security scan with language detection
      ai-dev security-scan --file-patterns "src/**/*.ts"
      
      # Generate documentation
      ai-dev docs --file-patterns "*.py" --doc-type "api"
      ```
      :::::
    
    #title
    [Language-Specific Intelligence]{.text-primary}
    
    #description
    Automatic language detection, framework auto-selection, and tailored analysis for Dart, TypeScript, JavaScript, Python, Java, C#, Go, Rust, and more.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    ---
      :::::tabs
        ::::::tabs-item{.mt-5 icon="i-lucide-eye" label="Features"}
          :::::::div{.flex.flex-col.gap-4}
            ::::::::note{.my-0}
            **Code Review & Analysis**: Identify logical errors, style issues, and missing documentation
            ::::::::
          
            ::::::::tip{.my-0}
            **Testing Automation**: Generate test case templates with automatic framework detection
            ::::::::
          
            ::::::::warning{.my-0}
            **Security Scanning**: Detect common vulnerabilities and security issues
            ::::::::
          
            ::::::::caution{.my-0}
            **Privacy-First**: Supports both local (offline) and remote LLMs
            ::::::::
          :::::::
        ::::::
      
        ::::::tabs-item
        ---
        class: mt-5 mb-2 text-xs overflow-x-auto
        icon: i-lucide-code
        label: Commands
        ---
        ```bash
        # Code review with file patterns
        ai-dev review --file-patterns "src/**/*.ts"
        
        # Generate tests for specific languages
        ai-dev test-suggest --file-patterns "lib/**/*.dart"
        
        # Security scan with severity levels
        ai-dev security-scan --severity "high"
        
        # Documentation generation
        ai-dev docs --doc-type "api" --include-examples
        ```
        ::::::
      :::::
    
    #title
    [Multi-LLM Support]{.text-primary} with Privacy Options
    
    #description
    Choose between OpenAI, Ollama (local), and Google Gemini. Run completely offline with local models or use cloud providers. All with beautiful, colorized output and language-specific syntax highlighting.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 md:col-span-1
    ---
      :::::div{.bg-elevated.rounded-lg.p-3.overflow-x-auto}
      ```yaml [ai-dev.config.yaml]
      llm:
        provider: "openai"  # or "ollama" or "gemini"
        model: "gpt-4"
        temperature: 0.7
      
      security:
        enabled: true
        severity: ["medium", "high", "critical"]
      
      test:
        enabled: true
        coverageTarget: 80
      
      output:
        format: "console"
        colorize: true
        verbose: false
      ```
      :::::
    
    #title
    [Modular Configuration]{.text-primary}
    
    #description
    Configure AI providers, security settings, test frameworks, and output formats through simple YAML configuration. Supports environment variables and local overrides.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 md:col-span-1 min-h-[450px]
    ---
      :::::div{.flex.flex-col.gap-4.text-center}
        ::::::i-lucide-bot{.w-16.h-16.mx-auto.text-primary}
        ::::::
        ::::::div{.text-sm.text-muted-foreground}
        **Local & Cloud AI**
        ::::::
        ::::::div{.flex.gap-2.justify-center}
          <span class="px-2 py-1 bg-primary/10 text-primary text-xs rounded">OpenAI</span>
          <span class="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Ollama</span>
          <span class="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Gemini</span>
        ::::::
      :::::
    
    #title
    [Privacy-First]{.text-primary} AI Integration
    
    #description
    Run completely offline with local models or use cloud providers. Your choice of AI provider with full privacy control.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    ---
      :::::div{.bg-elevated.rounded-lg.p-4.overflow-x-auto}
      ```bash
      # Language-specific examples
      ai-dev test-suggest --file-patterns "lib/**/*.dart"     # Flutter tests
      ai-dev test-suggest --file-patterns "src/**/*.ts"      # Jest tests  
      ai-dev test-suggest --file-patterns "*.py"             # pytest tests
      ai-dev test-suggest --file-patterns "src/**/*.java"    # JUnit tests
      ```
      :::::
    
    #title
    [Framework Auto-Detection]{.text-primary}
    
    #description
    Automatically detects programming languages and selects appropriate testing frameworks. Dart → Flutter Test, TypeScript → Jest, Python → pytest, Java → JUnit, and more.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    ---
      :::::div{.grid.grid-cols-1.md:grid-cols-3.gap-6}
        ::::::div{.text-center.p-4.rounded-lg.bg-elevated.border.border-muted}
          :::::::div{.flex.justify-center.mb-3}
            ::::::::i-lucide-architecture{.w-10.h-10.text-primary}
          :::::::
          :::::::h3{.text-lg.font-semibold.mb-2}
          Clean Architecture
          :::::::
          :::::::p{.text-sm.text-muted-foreground}
          Hexagonal design with clean separation of concerns and dependency inversion
          :::::::
        ::::::
        ::::::div{.text-center.p-4.rounded-lg.bg-elevated.border.border-muted}
          :::::::div{.flex.justify-center.mb-3}
            ::::::::i-lucide-plug{.w-10.h-10.text-primary}
          :::::::
          :::::::h3{.text-lg.font-semibold.mb-2}
          Plugin Ecosystem
          :::::::
          :::::::p{.text-sm.text-muted-foreground}
          Extensible system for custom LLM providers, output formats, and integrations
          :::::::
        ::::::
        ::::::div{.text-center.p-4.rounded-lg.bg-elevated.border.border-muted}
          :::::::div{.flex.justify-center.mb-3}
            ::::::::i-lucide-terminal{.w-10.h-10.text-primary}
          :::::::
          :::::::h3{.text-lg.font-semibold.mb-2}
          Developer-Focused
          :::::::
          :::::::p{.text-sm.text-muted-foreground}
          CLI-first design optimized for developer workflows and automation
          :::::::
        ::::::
      :::::
    
    #title
    [Clean Architecture]{.text-primary} & Extensibility
    
    #description
    Built with Hexagonal Architecture principles for maximum flexibility. Cleanly separated business logic from infrastructure, with a plugin ecosystem that allows custom LLM providers, output formats, and integrations. Designed for developers who need powerful, extensible tools that adapt to their workflow.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-1
    ---
      :::::div{.flex.flex-col.gap-2.text-center}
        ::::::i-lucide-palette{.w-12.h-12.mx-auto.text-primary}
        ::::::
        ::::::i-lucide-terminal{.w-12.h-12.mx-auto.text-primary}
        ::::::
        ::::::i-lucide-file-text{.w-12.h-12.mx-auto.text-primary}
        ::::::
      :::::
    
    #title
    [Beautiful Output]{.text-primary} & CLI Experience
    
    #description
    Colorized, structured output with language-specific syntax highlighting, severity indicators, and actionable suggestions optimized for command-line workflows.
    ::::
  :::
::
