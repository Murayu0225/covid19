# frozen_string_literal: true

require 'spec_helper'

describe 'page [/]', type: :feature do
  LOCALES.each do |lang, data|
    context "#{lang}" do
      describe 'h3' do
        before do
          visit "#{data[:path]}monitoring"
          render_lazy_contents
        end

        context 'CardsMonitoring' do
          it 'has cardTab' do
            expect(find('.v-tabs a#cardTab-1.v-tab--active').text).to eq t(lang, 'モニタリング項目').upcase
          end

          it 'has h3' do
            expect(find('.DataCard.MonitoringItemsOverviewCard > div > div > div.DataView-Header > h3').text).to eq t(lang, 'モニタリング項目')
            expect(find('.DataCard.MonitoringConfirmedCasesNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, 'モニタリング項目(1)')
            expect(find('.DataCard.UntrackedRateCard > div > div > div.DataView-Header > h3').text).to eq t(lang, 'モニタリング項目(3)')
            expect(find('.DataCard.SevereCaseCard > div > div > div.DataView-Header > h3').text).to eq t(lang, 'モニタリング項目(7)')
          end
        end
      end
    end
  end
end
