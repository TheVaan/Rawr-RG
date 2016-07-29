using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Text;
using System.Globalization;
using System.Threading;
using System.Windows.Forms;

namespace Rawr.UserControls.Options
{
	public partial class GeneralSettings : UserControl, IOptions
	{
        string _locale = "de-DE";

        public GeneralSettings()
		{
			InitializeComponent();
			//cannot be in load, because its possible this tab won't show, and the values will not be initialized.
			//if this happens, then the users settings will be cleared.
            CK_UseMultithreading.Checked = Rawr.Properties.GeneralSettings.Default.UseMultithreading;
            CK_BuffSource.Checked = Rawr.Properties.GeneralSettings.Default.DisplayBuffSource;
            CK_GemNames.Checked = Rawr.Properties.GeneralSettings.Default.DisplayGemNames;
            CB_ProcEffectCalculationMode.SelectedIndex = Rawr.Properties.GeneralSettings.Default.ProcEffectMode;
            CB_EffectCombinationsCalculationMode.SelectedIndex = Rawr.Properties.GeneralSettings.Default.CombinationEffectMode;
            CK_DisplayItemIds.Checked = Rawr.Properties.GeneralSettings.Default.DisplayExtraItemInfo;
            CK_HideEnchantsBasedOnProfs.Checked = Rawr.Properties.GeneralSettings.Default.HideProfEnchants;

            CB_ItemNameWidthSetting.SelectedIndex = Rawr.Properties.GeneralSettings.Default.ItemNameWidthSetting;

            setLocale(Rawr.Properties.GeneralSettings.Default.Locale);
        }

        private void setLocale(string locale)
        {
            _locale = locale;
            switch (locale)
            {
                case "en":
                case "en-US": 
                    rbEnglish.Checked = true;
                    break;
                case "de":
                case "de-DE":
                    rbGerman.Checked = true;
                    break;
            }
        }

		#region IOptions Members

		public void Save()
		{
            string message = string.Empty;
            string title = string.Empty;
			Rawr.Properties.GeneralSettings.Default.UseMultithreading = CK_UseMultithreading.Checked;
            Rawr.Properties.GeneralSettings.Default.DisplayBuffSource = CK_BuffSource.Checked;
            Rawr.Properties.GeneralSettings.Default.DisplayGemNames = CK_GemNames.Checked;
            Rawr.Properties.GeneralSettings.Default.DisplayExtraItemInfo = CK_DisplayItemIds.Checked;
            Rawr.Properties.GeneralSettings.Default.HideProfEnchants = CK_HideEnchantsBasedOnProfs.Checked;
            Rawr.Properties.GeneralSettings.Default.Locale = _locale;
            Rawr.Properties.GeneralSettings.Default.ProcEffectMode = CB_ProcEffectCalculationMode.SelectedIndex;
            Rawr.Properties.GeneralSettings.Default.CombinationEffectMode = CB_EffectCombinationsCalculationMode.SelectedIndex;
            Rawr.Properties.GeneralSettings.Default.ItemNameWidthSetting = CB_ItemNameWidthSetting.SelectedIndex;
			Rawr.Properties.GeneralSettings.Default.Save();
            switch(_locale)
            {
                case "de-DE":
                    title = "Profil Aktualisieren";
                    message = "Um die deutsche Lokalisierung nachzuladen müssen sie auf 'Aktuallisiere Item Cache aus RG-Datenbank' drücken.";
                    break;
            }
            if (!_locale.Equals("en-US"))
                System.Windows.Forms.MessageBox.Show(message, title, System.Windows.Forms.MessageBoxButtons.OK);
            OnDisplayBuffChanged();
            OnHideProfessionsChanged();
            SpecialEffect.UpdateCalculationMode();
            //ItemCache.OnItemsChanged();
            FormMain.Instance.Character.OnCalculationsInvalidated();
            CultureInfo currentCultureInfo = new CultureInfo(_locale);
            Thread.CurrentThread.CurrentCulture = currentCultureInfo;
            Thread.CurrentThread.CurrentUICulture = currentCultureInfo;
            ProcessControls(currentCultureInfo);
        }

        // Needed to Update all controls dependent of the choosen language - by Alacant
        private void ProcessControls(CultureInfo currentCultureInfo)
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(FormMain));
            foreach (Control ctrl in FormMain.Instance.Controls)
            {
                //resources.ApplyResources(ctrl, ctrl.Name, currentCultureInfo);
                string text = resources.GetString(ctrl.Name + ".Text", currentCultureInfo);
                if (text != null)
                    ctrl.Text = text;

                if (ctrl.HasChildren)
                    ProcessSubControls(ctrl, currentCultureInfo, resources);
            }
        }

        private void ProcessSubControls(Control ctrlcontainer, CultureInfo currentCultureInfo, System.ComponentModel.ComponentResourceManager resources)
        {
            foreach (Control ctrl in ctrlcontainer.Controls)
            {
                //resources.ApplyResources(ctrl, ctrl.Name, currentCultureInfo);
                string text = resources.GetString(ctrl.Name + ".Text", currentCultureInfo);
                if (text != null)
                    ctrl.Text = text;
                if (ctrl.HasChildren)
                    ProcessSubControls(ctrl, currentCultureInfo, resources);
            }
        }

        public void Cancel()
		{
			//NOOP;
		}

		public bool HasValidationErrors()
		{
			return CheckChildrenValidation(this);
		}

		private bool CheckChildrenValidation(Control control)
		{
			bool invalid = false;

			for (int i = 0; i < control.Controls.Count; i++)
			{
				if (!String.IsNullOrEmpty(errorProvider1.GetError(control.Controls[i])))
				{
					invalid = true;
					break;
				}
				else
				{
					invalid = CheckChildrenValidation(control.Controls[i]);
					if (invalid)
					{
						break;
					}
				}
			}

			return invalid;
		}

		public string DisplayName
		{
			get { return "Allgemeine Einstellungen"; }
		}


		public string TreePosition
		{
			get { return DisplayName; }
		}

		public Image MenuIcon
		{
			get { return null; }
		}

		#endregion

        private void rbEnglish_CheckedChanged(object sender, EventArgs e)
        {
            _locale = "en-US";
        }

        private void rbGerman_CheckedChanged(object sender, EventArgs e)
        {
            _locale = "de-DE";
        }

        public static event EventHandler DisplayBuffChanged;
        protected static void OnDisplayBuffChanged()
        {
            if (DisplayBuffChanged != null)
                DisplayBuffChanged(null, EventArgs.Empty);
        }
       
        public static event EventHandler HideProfessionsChanged;
        protected static void OnHideProfessionsChanged()
        {
            if (HideProfessionsChanged != null)
                HideProfessionsChanged(null, EventArgs.Empty);
        }
    }
}
