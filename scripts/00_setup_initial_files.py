import os

def create_file_if_missing(path, content):
    if os.path.exists(path):
        print(f"Skipping {path}, acts.")
    else:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Created {path}")

def main():
    root_dir = "c:/Users/benja/OneDrive/Desktop/Aitane Web"
    
    gitignore_content = """
.tmp/
__pycache__/
.env
*.pyc
.DS_Store
"""
    create_file_if_missing(os.path.join(root_dir, ".gitignore"), gitignore_content.strip())

    env_content = "# Environment variables\n"
    create_file_if_missing(os.path.join(root_dir, ".env"), env_content)

    req_content = "" # Empty for now
    create_file_if_missing(os.path.join(root_dir, "requirements.txt"), req_content)

if __name__ == "__main__":
    main()
