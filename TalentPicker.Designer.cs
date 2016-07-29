namespace Rawr
{
	partial class TalentPicker
	{
		/// <summary> 
		/// Required designer variable.
		/// </summary>
		private System.ComponentModel.IContainer components = null;

		/// <summary> 
		/// Clean up any resources being used.
		/// </summary>
		/// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
		protected override void Dispose(bool disposing)
		{
			if (disposing && (components != null))
			{
				components.Dispose();
			}
			base.Dispose(disposing);
		}

		#region Component Designer generated code

		/// <summary> 
		/// Required method for Designer support - do not modify 
		/// the contents of this method with the code editor.
		/// </summary>
		private void InitializeComponent()
		{
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(TalentPicker));
            this.panelTop = new System.Windows.Forms.Panel();
            this.talentSpecButton = new System.Windows.Forms.Button();
            this.comboBoxTalentSpec = new System.Windows.Forms.ComboBox();
            this.tabPageTree3 = new System.Windows.Forms.TabPage();
            this.talentTree3 = new Rawr.TalentTree();
            this.tabControlMain = new System.Windows.Forms.TabControl();
            this.tabPageTree1 = new System.Windows.Forms.TabPage();
            this.talentTree1 = new Rawr.TalentTree();
            this.tabPageTree2 = new System.Windows.Forms.TabPage();
            this.talentTree2 = new Rawr.TalentTree();
            this.tabPageGlyphs = new System.Windows.Forms.TabPage();
            this.grpMinorGlyph = new System.Windows.Forms.GroupBox();
            this.grpMajorGlyph = new System.Windows.Forms.GroupBox();
            this.tooltipGlyph = new System.Windows.Forms.ToolTip(this.components);
            this.panelTop.SuspendLayout();
            this.tabPageTree3.SuspendLayout();
            this.tabControlMain.SuspendLayout();
            this.tabPageTree1.SuspendLayout();
            this.tabPageTree2.SuspendLayout();
            this.tabPageGlyphs.SuspendLayout();
            this.SuspendLayout();
            // 
            // panelTop
            // 
            this.panelTop.Controls.Add(this.talentSpecButton);
            this.panelTop.Controls.Add(this.comboBoxTalentSpec);
            resources.ApplyResources(this.panelTop, "panelTop");
            this.panelTop.Name = "panelTop";
            // 
            // talentSpecButton
            // 
            resources.ApplyResources(this.talentSpecButton, "talentSpecButton");
            this.talentSpecButton.Name = "talentSpecButton";
            this.talentSpecButton.UseVisualStyleBackColor = true;
            this.talentSpecButton.Click += new System.EventHandler(this.talentSpecButton_Click);
            // 
            // comboBoxTalentSpec
            // 
            resources.ApplyResources(this.comboBoxTalentSpec, "comboBoxTalentSpec");
            this.comboBoxTalentSpec.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboBoxTalentSpec.FormattingEnabled = true;
            this.comboBoxTalentSpec.Items.AddRange(new object[] {
            resources.GetString("comboBoxTalentSpec.Items")});
            this.comboBoxTalentSpec.Name = "comboBoxTalentSpec";
            this.comboBoxTalentSpec.SelectedIndexChanged += new System.EventHandler(this.comboBoxTalentSpec_SelectedIndexChanged);
            // 
            // tabPageTree3
            // 
            resources.ApplyResources(this.tabPageTree3, "tabPageTree3");
            this.tabPageTree3.BackColor = System.Drawing.Color.Transparent;
            this.tabPageTree3.Controls.Add(this.talentTree3);
            this.tabPageTree3.Name = "tabPageTree3";
            this.tabPageTree3.UseVisualStyleBackColor = true;
            // 
            // talentTree3
            // 
            resources.ApplyResources(this.talentTree3, "talentTree3");
            this.talentTree3.CharacterClass = Rawr.CharacterClass.Paladin;
            this.talentTree3.Name = "talentTree3";
            this.talentTree3.TreeName = "Holy";
            // 
            // tabControlMain
            // 
            this.tabControlMain.Controls.Add(this.tabPageTree1);
            this.tabControlMain.Controls.Add(this.tabPageTree2);
            this.tabControlMain.Controls.Add(this.tabPageTree3);
            this.tabControlMain.Controls.Add(this.tabPageGlyphs);
            resources.ApplyResources(this.tabControlMain, "tabControlMain");
            this.tabControlMain.HotTrack = true;
            this.tabControlMain.Name = "tabControlMain";
            this.tabControlMain.SelectedIndex = 0;
            this.tabControlMain.SizeMode = System.Windows.Forms.TabSizeMode.Fixed;
            // 
            // tabPageTree1
            // 
            resources.ApplyResources(this.tabPageTree1, "tabPageTree1");
            this.tabPageTree1.BackColor = System.Drawing.Color.Transparent;
            this.tabPageTree1.Controls.Add(this.talentTree1);
            this.tabPageTree1.Name = "tabPageTree1";
            this.tabPageTree1.UseVisualStyleBackColor = true;
            // 
            // talentTree1
            // 
            resources.ApplyResources(this.talentTree1, "talentTree1");
            this.talentTree1.CharacterClass = Rawr.CharacterClass.Paladin;
            this.talentTree1.Name = "talentTree1";
            this.talentTree1.TreeName = "Holy";
            // 
            // tabPageTree2
            // 
            resources.ApplyResources(this.tabPageTree2, "tabPageTree2");
            this.tabPageTree2.BackColor = System.Drawing.Color.Transparent;
            this.tabPageTree2.Controls.Add(this.talentTree2);
            this.tabPageTree2.Name = "tabPageTree2";
            this.tabPageTree2.UseVisualStyleBackColor = true;
            // 
            // talentTree2
            // 
            resources.ApplyResources(this.talentTree2, "talentTree2");
            this.talentTree2.CharacterClass = Rawr.CharacterClass.Paladin;
            this.talentTree2.Name = "talentTree2";
            this.talentTree2.TreeName = "Holy";
            // 
            // tabPageGlyphs
            // 
            resources.ApplyResources(this.tabPageGlyphs, "tabPageGlyphs");
            this.tabPageGlyphs.Controls.Add(this.grpMinorGlyph);
            this.tabPageGlyphs.Controls.Add(this.grpMajorGlyph);
            this.tabPageGlyphs.Name = "tabPageGlyphs";
            this.tabPageGlyphs.UseVisualStyleBackColor = true;
            // 
            // grpMinorGlyph
            // 
            resources.ApplyResources(this.grpMinorGlyph, "grpMinorGlyph");
            this.grpMinorGlyph.Name = "grpMinorGlyph";
            this.grpMinorGlyph.TabStop = false;
            // 
            // grpMajorGlyph
            // 
            resources.ApplyResources(this.grpMajorGlyph, "grpMajorGlyph");
            this.grpMajorGlyph.Name = "grpMajorGlyph";
            this.grpMajorGlyph.TabStop = false;
            // 
            // TalentPicker
            // 
            resources.ApplyResources(this, "$this");
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.tabControlMain);
            this.Controls.Add(this.panelTop);
            this.Name = "TalentPicker";
            this.panelTop.ResumeLayout(false);
            this.tabPageTree3.ResumeLayout(false);
            this.tabPageTree3.PerformLayout();
            this.tabControlMain.ResumeLayout(false);
            this.tabPageTree1.ResumeLayout(false);
            this.tabPageTree1.PerformLayout();
            this.tabPageTree2.ResumeLayout(false);
            this.tabPageTree2.PerformLayout();
            this.tabPageGlyphs.ResumeLayout(false);
            this.tabPageGlyphs.PerformLayout();
            this.ResumeLayout(false);

		}

		#endregion

        private System.Windows.Forms.Panel panelTop;
        private System.Windows.Forms.ComboBox comboBoxTalentSpec;
        private System.Windows.Forms.TabPage tabPageTree3;
        private System.Windows.Forms.TabControl tabControlMain;
        private System.Windows.Forms.TabPage tabPageTree1;
        private System.Windows.Forms.TabPage tabPageTree2;
        private TalentTree talentTree1;
        private TalentTree talentTree3;
        private TalentTree talentTree2;
        private System.Windows.Forms.Button talentSpecButton;
        private System.Windows.Forms.TabPage tabPageGlyphs;
        private System.Windows.Forms.GroupBox grpMajorGlyph;
        private System.Windows.Forms.GroupBox grpMinorGlyph;
        private System.Windows.Forms.ToolTip tooltipGlyph;
	}
}
