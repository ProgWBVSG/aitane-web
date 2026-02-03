import os
import subprocess

def run_command(command, cwd=None):
    """Execute shell command and return output."""
    try:
        result = subprocess.run(
            command, 
            shell=True, 
            check=True, 
            cwd=cwd, 
            stdout=subprocess.PIPE, 
            stderr=subprocess.PIPE, 
            text=True
        )
        print(f"✓ {command}")
        if result.stdout:
            print(result.stdout)
        return True
    except subprocess.CalledProcessError as e:
        print(f"✗ Error: {command}")
        print(e.stderr)
        return False

def main():
    root_dir = "c:/Users/benja/OneDrive/Desktop/Aitane Web"
    
    print("=== Git Repository Setup ===\n")
    
    # 1. Check if git is installed
    print("1. Checking Git installation...")
    if not run_command("git --version"):
        print("\n❌ Git is not installed. Please install Git first:")
        print("   https://git-scm.com/downloads")
        return
    
    # 2. Update .gitignore
    print("\n2. Updating .gitignore...")
    gitignore_content = """
# Dependencies
node_modules/

# Environment variables
.env

# Temporary files
.tmp/

# Build output
dist/
build/

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Python
__pycache__/
*.pyc
"""
    
    gitignore_path = os.path.join(root_dir, ".gitignore")
    with open(gitignore_path, 'w', encoding='utf-8') as f:
        f.write(gitignore_content.strip())
    print("✓ .gitignore updated")
    
    # 3. Initialize git repository
    print("\n3. Initializing Git repository...")
    if not run_command("git init", cwd=root_dir):
        return
    
    # 4. Configure git (basic setup)
    print("\n4. Configuring Git...")
    run_command('git config user.name "AITANE Dev"', cwd=root_dir)
    run_command('git config user.email "dev@aitane.com"', cwd=root_dir)
    
    # 5. Add all files
    print("\n5. Adding files to staging...")
    if not run_command("git add .", cwd=root_dir):
        return
    
    # 6. Create initial commit
    print("\n6. Creating initial commit...")
    commit_message = "Initial commit: AITANE website with modern design"
    if not run_command(f'git commit -m "{commit_message}"', cwd=root_dir):
        return
    
    # 7. Instructions for GitHub
    print("\n" + "="*60)
    print("✅ Local repository initialized successfully!")
    print("="*60)
    print("\n📋 Next steps to push to GitHub:\n")
    print("1. Go to https://github.com/new")
    print("2. Create a new repository named 'aitane-web' (or your preferred name)")
    print("3. DO NOT initialize with README, .gitignore, or license")
    print("4. After creating the repo, run these commands:\n")
    print("   cd \"c:/Users/benja/OneDrive/Desktop/Aitane Web\"")
    print("   git branch -M main")
    print("   git remote add origin https://github.com/YOUR_USERNAME/aitane-web.git")
    print("   git push -u origin main\n")
    print("="*60)

if __name__ == "__main__":
    main()
